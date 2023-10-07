import React from "react";
import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";
import Link from "next/link";
import toast from "react-hot-toast";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Image from "next/image";
import Layout from "../../components/Layout";
import { auth, firestore, serverTimestamp } from "../../lib/firebase";
const lodash = require("lodash");
import {
  Center,
  getUsernameFromEmail,
  exportWorkbook,
  Heading,
  IST,
  Metatags,
  Playlist,
  Song,
  SongsTable,
  customizeColumns,
} from "../../components/common";
import guru1 from "../../public/images/other/6-min.png";
import { useAuthState } from "react-firebase-hooks/auth";
import router from "next/router";

export default function Songs(props: { songs: Song[] }) {
  const [select, setSelection] = React.useState<number[]>([]);
  const [model, setModel] = React.useState<boolean>(false);
  const [currentUser] = useAuthState(auth);

  const handleClose = (event: any, reason: any) => {
    if (reason !== "backdropClick") {
      setModel(false);
    }
  };

  const handleOpen = async () => {
    setModel(true);
  };

  const savePlaylist = async (name: string, pid: string) => {
    const toastId = toast.loading("Loading...");
    try {
      const p: Playlist = {
        uid: `${currentUser?.uid}`,
        username: `${getUsernameFromEmail(`${currentUser?.email}`)}`,
        pid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        list: select,
        name,
      };
      const doc = await firestore
        .collection("users")
        .doc(currentUser?.uid)
        .collection("playlists")
        .doc(pid);
      const exists = (await doc.get()).exists;
      if (exists) {
        toast.remove(toastId);
        toast.error(`Playlist ${name} Already Exists!`);
        return false;
      } else {
        await doc.set(p);
        await router.push(`/${p.username}/${p.pid}`);
        toast.remove(toastId);
        toast.success("Playlist created successfully");
        setModel(false);
        setSelection([]);
        return true;
      }
    } catch (e) {
      console.error(e);
      toast.remove(toastId);
      toast.error("Failed to create playlist, Please try again later");
    }
  };
  const exportToExcel = async () => {
    const selectedSongs: any[] = props?.songs.filter((song) => {
      return select.includes(song.newNumber);
    });
    await exportWorkbook(selectedSongs);
  };

  return (
    <Layout>
      <Metatags title="Songs With Script And Audio" />
      <Card>
        <CardContent>
          <Heading text="Songs With Script And Audio" />
          <SavePlaylist
            open={model}
            handleClose={handleClose}
            savePlaylist={savePlaylist}
          />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!select.length}
                    onClick={exportToExcel}
                  >
                    Export
                  </Button>
                </Grid>
                {currentUser && (
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={!select.length}
                      onClick={handleOpen}
                    >
                      Save
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <SongsTable
            columns={customizeColumns((row, value) => (
              <Link href={`/songs/${row.newNumber}`} passHref>
                <MaterialLink underline="hover" color="primary">
                  {value}
                </MaterialLink>
              </Link>
            ))}
            songs={props.songs}
            setSelection={setSelection}
            select={select}
            checkboxSelection
          />
          <br /> <br />
          <Grid container spacing={3}>
            <Grid item md={5} xs={12}>
              <Center>
                <Image src={guru1} alt="guruji" width={250} height={350} />
              </Center>
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography paragraph>
                All 503 songs have audio with script with ragas meanings in
                English and classified based on songs on vinayakar, guru,
                shivan, ramayana, ambal, bhagwatam, yaman, lotus feet, murugan &
                peruvazhvu. All these lists can be obtained by the click of a
                button.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {
  const collection = await firestore
    .collection("songs")
    .orderBy("newNumber", "asc")
    .get();
  return {
    props: {
      songs: collection.docs.map((doc) => {
        return {
          ...doc.data(),
          id: +doc.id,
        };
      }),
    },
    revalidate: IST,
  };
}

const SavePlaylist = (props: any) => {
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Save Playlist</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="dense"
          id="name"
          label="Name"
          type="email"
          fullWidth
          variant="standard"
          disabled={loading}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          disabled={loading || !name}
          color="primary"
          onClick={async () => {
            setLoading(true);
            const result = await props.savePlaylist(
              name,
              encodeURI(lodash.kebabCase(name))
            );
            if (result) {
              setName("");
            }
            setLoading(false);
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
