import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  Center,
  Metatags,
  Playlist,
  PlayListCard,
  SubHeading,
  User,
} from "../../components/common";
import Layout from "../../components/Layout";
import {
  auth,
  firestore,
  getUserWithUsername,
  playlistToJSON,
} from "../../lib/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      margin: "auto",
    },
  })
);

export default function Profile({
  user,
  playlists,
}: {
  user: User;
  playlists: Playlist[];
}) {
  const [list, setList] = useState(playlists);
  const classes = useStyles();
  const [currentUser] = useAuthState(auth);

  const signOut = async () => {
    await auth.signOut();
  };

  const onPlaylistDelete = async (pid: string) => {
    try {
      await firestore
        .collection("users")
        .doc(currentUser?.uid)
        .collection("playlists")
        .doc(pid)
        .delete();
      const index = list.findIndex((l) => l.pid === pid);
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
      toast.success("Playlist deleted successfully");
    } catch (e) {
      console.error(e);
      toast.error("Failed to delete Playlist, Please try again later");
    }
  };

  return (
    <Layout>
       <Metatags title={user.displayName} image={user.photoURL}/>
      <Card>
        <CardContent>
          <div className="box-center">
            <Center>
              <Avatar
                alt={user.displayName}
                src={user.photoURL}
                className={classes.large}
              />
              <Typography variant="h6" component="h1">
                {user.displayName}
              </Typography>
              <Typography variant="caption" component="p">
                <i>@{user.username}</i>
              </Typography>
              <br />
              {user.uid === currentUser?.uid ? (
                <Button variant="outlined" color="secondary" onClick={signOut}>
                  Sign Out
                </Button>
              ) : null}
            </Center>
          </div>
        </CardContent>
      </Card>
      <br />
      {!!list.length && <SubHeading text="Playlists" />}
      <Grid container spacing={3}>
        {list.map((playlist) => (
          <PlayListCard
            playlist={playlist}
            key={playlist.pid}
            onPlaylistDelete={onPlaylistDelete}
          />
        ))}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {
  let user;
  const { username } = query;
  const userDoc = await getUserWithUsername(username);
  // If no user, short circuit to 404 page
  if (!userDoc || !userDoc.exists) {
    return {
      notFound: true,
    };
  }
  user = userDoc.data() as User;
  const playlists = (
    await firestore
      .collection("users")
      .doc(user.uid)
      .collection("playlists")
      .orderBy("createdAt", "desc")
      .get()
  ).docs.map((doc) => playlistToJSON(doc));
  return {
    props: { user, playlists },
  };
}
