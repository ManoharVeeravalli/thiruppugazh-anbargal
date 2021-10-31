import { Card, CardContent } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactMarkdown from 'react-markdown'
import {
  Heading,
  IST,
  Metatags,
  Song,
  SongDetails,
  SubHeading,
} from "../../components/common";
import Layout from "../../components/Layout";
import { auth, firestore } from "../../lib/firebase";

const admins = ["nBzBGB2Vsuh4fZvIV43Q3zlOS243", "qW8jXHLldoOyc54iHyb29sEikJr1"];

export default function SongItem({ song }: { song: Song }) {
  const [currentUser] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [meaning, setMeaning] = useState(song.englishMeaning);
  const [text, setText] = useState(song.englishMeaning);
  useEffect(() => {
    if (currentUser) {
      setIsAdmin(admins.includes(currentUser.uid));
    }
  }, [currentUser]);
  return (
    <Layout>
      <Metatags title={song.englishName} description={song.songUrl} />
      <Card>
        <CardContent>
          <Heading text={`${song.englishName} / ${song.songName}`} />
          <SongDetails song={song} />
          <SubHeading text="English Meaning" />
          <ReactMarkdown>{meaning}</ReactMarkdown>
          {isAdmin && (
            <>
              <textarea
                className="text-song"
                name="content"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="English Meaning"
              ></textarea>
              <button
                onClick={async () => {
                  try {
                    await firestore
                      .collection("songs")
                      .doc(`${song.newNumber}`)
                      .update({
                        englishMeaning: text,
                      });
                      setMeaning(text)
                    alert("Updated Successfully");
                  } catch (e) {
                    alert("Failed");
                    console.error(e);
                  }
                }}
              >
                Save
              </button>
              <button onClick={() => setMeaning(text)}>Preview</button>
            </>
          )}
        </CardContent>
      </Card>
      <br />
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const { sid } = params;
  const doc = await firestore.collection("songs").doc(sid).get();
  return {
    props: { song: doc.data() },
    revalidate: IST,
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collection("songs").get();
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { sid: doc.id },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}
