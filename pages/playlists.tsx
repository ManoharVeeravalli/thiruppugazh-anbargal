import { Button, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import {
  AlertDialog,
  Heading,
  Metatags,
  Playlist,
  PlayListCard,
} from "../components/common";

import Layout from "../components/Layout";
import { auth, firestore, fromMillis, playlistToJSON } from "../lib/firebase";

const LIMIT = 10;

export default function Playlists(props: { playlists: Playlist[] }) {
  const [playlists, setPlaylists] = useState(props.playlists);
  const [loading, setLoading] = useState(false);
  const [playlistsEnd, setPlaylistsEnd] = useState(false);
  const router = useRouter();
  const [currentUser] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getMorePlaylists = async () => {
    const last = playlists[playlists.length - 1];
    if (!last) {
      return setPlaylistsEnd(true);
    }
    const cursor =
      typeof last.createdAt === "number"
        ? fromMillis(last.createdAt)
        : last.createdAt;
    const id = toast.loading("Loading...");
    setLoading(true);
    const query = firestore
      .collectionGroup("playlists")
      .orderBy("createdAt", "desc")
      .startAfter(cursor)
      .limit(LIMIT);

    const newPlaylists = (await query.get()).docs.map(playlistToJSON);
    setPlaylists(playlists.concat(newPlaylists));
    setLoading(false);
    toast.remove(id);
    if (newPlaylists.length < LIMIT) {
      setPlaylistsEnd(true);
    }
  };
  return (
    <Layout>
      <Metatags title="Playlists" />
      <Grid container justifyContent="space-between">
        <Heading text="Playlists" />
        <AlertDialog
          open={open}
          handleClose={handleClose}
          message="Please login to create playlists"
        />
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            if (currentUser) {
              router.push(`/songs`);
            } else {
              setOpen(true);
            }
          }}
        >
          Create Playlist
        </Button>
      </Grid>
      <br />
      <Grid container spacing={1}>
        {playlists.map((playlist) => {
          return <PlayListCard playlist={playlist} key={playlist.pid} />;
        })}
      </Grid>
      <br />
      {!loading && !playlistsEnd && (
        <Button color="primary" variant="outlined" onClick={getMorePlaylists}>
          Load more
        </Button>
      )}
      {playlistsEnd && (
        <Typography paragraph>You have reached the end!</Typography>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  const collection = await firestore
    .collectionGroup("playlists")
    .orderBy("createdAt", "desc")
    .limit(LIMIT)
    .get();
  const playlists = collection?.docs.map(playlistToJSON);
  return {
    props: {
      playlists,
    },
  };
}
