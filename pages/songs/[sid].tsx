import { Card, CardContent } from "@material-ui/core";
import {
  Heading,
  IST,
  Metatags,
  Song,
  SongDetails,
} from "../../components/common";
import Layout from "../../components/Layout";
import { firestore } from "../../lib/firebase";

export default function SongItem({ song }: { song: Song }) {
  return (
    <Layout>
      <Metatags title={song.englishName} description={song.songUrl} />
      <Card>
        <CardContent>
          <Heading text={`${song.englishName} / ${song.songName}`} />
          <SongDetails song={song} />
        </CardContent>
      </Card>
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
