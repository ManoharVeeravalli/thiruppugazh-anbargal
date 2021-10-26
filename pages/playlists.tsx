import { Button, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
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

  const getMorePlaylists = async () => {
    const last = playlists[playlists.length - 1];
    if (!last) {
      return setPlaylistsEnd(true);
    }
    const cursor =
      typeof last.createdAt === "number"
        ? fromMillis(last.createdAt)
        : last.createdAt;
    setLoading(true);
    const query = firestore
      .collectionGroup("playlists")
      .orderBy("createdAt", "desc")
      .startAfter(cursor)
      .limit(LIMIT);

    const newPlaylists = (await query.get()).docs.map(playlistToJSON);
    setPlaylists(playlists.concat(newPlaylists));
    setLoading(false);

    if (newPlaylists.length < LIMIT) {
      setPlaylistsEnd(true);
    }
  };
  return (
    <Layout>
      <Metatags title="Playlists" />
      <Grid container justifyContent="space-between">
        <Heading text="Playlists" />
        {currentUser && (
          <Button
            color="primary"
            variant="outlined"
            onClick={() => {
              router.push(`/songs`);
            }}
          >
            Create Playlist
          </Button>
        )}
      </Grid>

      <br />
      <Grid container spacing={3}>
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
      {loading && <Typography paragraph>Loading...</Typography>}
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
