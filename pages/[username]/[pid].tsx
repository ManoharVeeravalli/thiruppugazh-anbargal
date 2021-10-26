import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { useRouter } from "next/router";
import {
  Heading,
  Metatags,
  Playlist,
  Song,
  SongsTable,
  User,
} from "../../components/common";
import Layout from "../../components/Layout";
import { getPlayList } from "../../lib/firebase";
const moment = require('moment');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      margin: "auto",
    },
    header: {
      cursor: "pointer",
    },
  })
);

export default function PlayList({
  playlist,
  user,
  songs,
}: {
  playlist: Playlist;
  user: User;
  songs: Song[];
}) {
  const router = useRouter();
  const classes = useStyles();
  const goToAuthor = () => {
    router.push(`/${user.username}`);
  };
  return (
    <Layout>
      <Metatags title={playlist.name} />
      <Heading text={playlist.name} />
      <Card>
        <CardHeader
          className={classes.header}
          avatar={<Avatar onClick={goToAuthor} alt={user.displayName} src={user.photoURL} />}
          title={<span onClick={goToAuthor}>{user.displayName}</span>}
          subheader={moment(playlist.createdAt).format('LL')}
        />
        <CardContent>
          <SongsTable songs={songs} />
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  const { username, pid } = params;
  return getPlayList(username, pid);
}
