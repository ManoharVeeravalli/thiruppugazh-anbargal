import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Grid,
  Link as MaterialLink,
} from "@material-ui/core";
import Link from "next/link";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

import {
  Heading,
  Metatags,
  Playlist,
  Song,
  SongDetails,
  SubHeading,
  SubTitle,
  User,
} from "../../../components/common";
import Layout from "../../../components/Layout";
import {
  firestore,
  getPlayList,
  getUserWithUsername,
  playlistToJSON,
} from "../../../lib/firebase";
import { useRouter } from "next/router";
import moment from "moment";

export default function PlayListSong({
  playlist,
  user,
  song,
}: {
  playlist: Playlist;
  user: User;
  song: Song;
}) {
  const router = useRouter();
  const currentIndex = playlist.list.indexOf(song.newNumber);
  return (
    <Layout>
      <Metatags title={song.englishName} />
      <Breadcrumbs aria-label="breadcrumb">
        <Link passHref href={`/${user.username}`}>
          <MaterialLink underline="hover" color="inherit">
            {user.displayName}
          </MaterialLink>
        </Link>
        <Link passHref href={`/${user.username}/${playlist.pid}`}>
          <MaterialLink underline="hover" color="inherit">
            {playlist.name}
          </MaterialLink>
        </Link>
        <Link
          passHref
          href={`/${user.username}/${playlist.pid}/${song.newNumber}`}
        >
          <MaterialLink underline="hover" color="primary">
            {song.englishName}
          </MaterialLink>
        </Link>
      </Breadcrumbs>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Heading text={`${song.englishName} / ${song.songName}`} />
              <SubHeading text={playlist.name} />
              <SubTitle text={moment(playlist.createdAt).format("ll")} />
              <SongDetails song={song}>
                <br />
                <Grid container justifyContent="space-evenly">
                  <Button
                    color="primary"
                    disabled={currentIndex === 0}
                    variant="outlined"
                    startIcon={<SkipPreviousIcon />}
                    onClick={() => {
                      router.push(
                        `/${user.username}/${playlist.pid}/${
                          playlist.list[currentIndex - 1]
                        }`
                      );
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    color="primary"
                    disabled={currentIndex === playlist.list.length - 1}
                    variant="outlined"
                    endIcon={<SkipNextIcon />}
                    onClick={() => {
                      router.push(
                        `/${user.username}/${playlist.pid}/${
                          playlist.list[currentIndex + 1]
                        }`
                      );
                    }}
                  >
                    Next
                  </Button>
                </Grid>
                <br />
              </SongDetails>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  const { username, pid, sid } = params;
  const userDoc = await getUserWithUsername(username);
  if (!userDoc.exists) {
    return {
      notFound: true,
    };
  }
  const user = userDoc.data() as User;
  const playlistDoc = await getPlayList(user.uid, pid);
  if (!playlistDoc.exists) {
    return {
      notFound: true,
    };
  }
  const playlist = playlistToJSON(playlistDoc);
  if (!playlist.list.includes(+sid)) {
    return {
      notFound: true,
    };
  }
  const songDoc = await firestore.collection("songs").doc(sid).get();
  if (!songDoc.exists) {
    return {
      notFound: true,
    };
  }
  const song = songDoc.data() as Song;
  return {
    props: {
      user,
      playlist,
      song,
    },
  };
}
