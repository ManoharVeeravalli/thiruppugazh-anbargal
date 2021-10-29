import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link as MaterialLink,
  Breadcrumbs,
} from "@material-ui/core";
import Link from "next/link";
import moment from "moment";
import {
  customizeColumns,
  exportWorkbook,
  Heading,
  Metatags,
  Playlist,
  SharePlaylist,
  Song,
  SongsTable,
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

export default function PlayList({
  playlist,
  user,
  songs,
}: {
  playlist: Playlist;
  user: User;
  songs: Song[];
}) {
  const exportToExcel = async () => {
    await exportWorkbook(songs, playlist.pid);
  };
  return (
    <Layout>
      <Metatags title={playlist.name} />
      <Breadcrumbs aria-label="breadcrumb">
        <Link passHref href={`/${user.username}`}>
          <MaterialLink underline="hover" color="inherit">
            {user.displayName}
          </MaterialLink>
        </Link>
        <Link passHref href={`/${user.username}/${playlist.pid}`}>
          <MaterialLink underline="hover" color="primary">
            {playlist.name}
          </MaterialLink>
        </Link>
      </Breadcrumbs>
      <Heading text={playlist.name} />
      <SubTitle text={moment(playlist.createdAt).format('ll')} />
      <Card>
        <CardHeader
          avatar={<Avatar alt={user.displayName} src={user.photoURL} />}
          title={
            <Link passHref href={`/${user.username}`}>
              <MaterialLink underline="hover" color="inherit">
                {user.displayName}
              </MaterialLink>
            </Link>
          }
          subheader={`@${user.username}`}
        />
        <CardContent>
          <SongsTable
            songs={songs}
            columns={customizeColumns((row, value) => (
              <Link
                href={`/${user.username}/${playlist.pid}/${row.newNumber}`}
                passHref
              >
                <MaterialLink underline="hover" color="primary">
                  {value}
                </MaterialLink>
              </Link>
            ))}
          />
          <br />
        </CardContent>
        <CardActions>
          <SharePlaylist username={user.username} pid={playlist.pid} />
          <Button color="primary" onClick={exportToExcel}>
            Export
          </Button>
        </CardActions>
      </Card>
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  const { username, pid } = params;
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
  const songs = (
    await Promise.all(
      playlist.list.map((l) => firestore.collection("songs").doc(`${l}`).get())
    )
  ).map((doc) => ({ ...doc.data(), id: doc.id } as Song));
  return {
    props: {
      user,
      playlist,
      songs,
    },
  };
}
