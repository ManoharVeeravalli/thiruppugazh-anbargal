import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";
import ExcelJS from "exceljs";
var FileSaver = require("file-saver");
import Image from "next/image";
import Head from "next/head";
import theme from "../lib/theme";
import FacebookIcon from "@material-ui/icons/Facebook";
import google from "../public/google.png";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

export const IST = +`${process.env.IST ?? 86400}`;

export function Center(props: any) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={12} style={{ textAlign: "center" }}>
        {props.children}
      </Grid>
    </Grid>
  );
}

export function Heading({ text }: { text: string }) {
  return (
    <Typography
      gutterBottom
      variant="h4"
      component="h1"
      style={{ textTransform: "capitalize" }}
    >
      {text}
    </Typography>
  );
}

export function SubTitle({ text }: { text: string }) {
  return (
    <Typography
      gutterBottom
      variant="body1"
      component="h6"
      className="MuiTypography-colorTextSecondary"
      style={{ textTransform: "capitalize" }}
    >
      <i>{text}</i>
    </Typography>
  );
}

export function SubHeading({ text }: { text: string }) {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {text}
    </Typography>
  );
}

export function Copyright() {
  return (
    <>
      <div style={{ padding: "24px" }}>
        <Grid container justifyContent="flex-end">
          <a
            href="https://www.facebook.com/Thiruppugazh-Anbargal-341776189325994"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </Grid>
        <br />
        <Center>
          <Typography variant="caption">
            Copyright © 2021 by Thiruppugazh Anbargal. All rights reserved.
          </Typography>
        </Center>
      </div>
    </>
  );
}

export function Carosal() {
  return <></>;
}

export function Metatags({
  title = "Thiruppugazh Anbargal",
  description = "Guruji Sri AS Raghavan has had a life of miracles. He was an extraordinary man, recognized by one and all as superhuman and as an evolved soul.",
  image = "https://firebasestorage.googleapis.com/v0/b/thiruppugazhanbargal-515e8.appspot.com/o/thiruppugazh-anbargal%2Flogo.jpg?alt=media&token=5bc35d9b-4390-4176-b056-d344cca59de3",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Murali Manohar" />
      <meta name="theme-color" content={theme.palette.primary.main} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://thiruppugazhanbargal.org" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://thiruppugazhanbargal.org`} />
    </Head>
  );
}

export function GoogleSignIn() {
  const signInWithGoogle = async () => {
    const credentials = await auth.signInWithPopup(googleAuthProvider);
    if (credentials.additionalUserInfo?.isNewUser) {
      const u = credentials.user;
      let username = getUsernameFromEmail(`${u?.email}`);
      const user: User = {
        email: `${u?.email}`,
        phoneNumber: `${u?.phoneNumber}`,
        photoURL: `${u?.photoURL}`,
        uid: `${u?.uid}`,
        displayName: `${u?.displayName}`,
        username,
      };
      // Create refs for both documents
      const userDoc = firestore.doc(`users/${user.uid}`);
      // Commit both docs together as a batch write.
      await userDoc.set(user);
    }
  };
  return (
    <Button className="btn-google" onClick={signInWithGoogle}>
      <Image src={google} alt="google sign in" />
    </Button>
  );
}

export async function exportWorkbook(selected: Song[], name = "song") {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Selected Songs");
  let width = 30;
  worksheet.columns = [
    { header: "Song Name", key: "songName", width },
    { header: "New Number", key: "newNumber", width: 20 },
    { header: "Old Number", key: "oldNumber", width: 20 },
    { header: "Ragam", key: "ragam", width },
    { header: "Thalam", key: "thalam", width },
    { header: "Tamil Meaning", key: "tamilMeaning", width },
    { header: "Meaning", key: "meaning", width },
    { header: "Classify 1", key: "classify1", width },
    { header: "Classify 2", key: "classify2", width },
    { header: "Classify 3", key: "classify3", width },
  ];
  for (let i = 0; i < selected.length; i++) {
    const row = worksheet.getRow(i + 2);
    const song = selected[i];
    for (let j = 0; j < worksheet.columns.length; j++) {
      const column = worksheet.columns[j];
      const cell = row.getCell(j + 1);
      switch (column.key) {
        case "songName":
          cell.value = {
            text: song.songName,
            hyperlink: song.songUrl,
          };
          cell.font = {
            color: { argb: "2B00FF" },
          };
          break;
        case "thalam":
          if (!song.thalamUrl) {
            cell.value = song.thalam ?? `-`;
          } else {
            cell.value = {
              text: song.thalam,
              hyperlink: song.thalamUrl,
            };
            cell.font = {
              color: { argb: "2B00FF" },
            };
          }
          break;
        case "tamilMeaning":
          cell.value = {
            text: song.tamilMeaning,
            hyperlink: song.tamilMeaningUrl,
          };
          cell.font = {
            color: { argb: "2B00FF" },
          };
          break;
        default:
          cell.value = column.key ? song[column.key] : ``;
      }
    }
  }
  const buffer = await workbook.xlsx.writeBuffer();
  var blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  FileSaver.saveAs(blob, `${name}_${Date.now()}.xlsx`);
}

export function extractQueryParams(url: string) {
  const map: Map<string, string> = new Map();
  const query = url.split("?")[1]?.split("&");
  for (let param of query ?? []) {
    map.set(param.split("=")[0], param.split("=")[1]);
  }
  return map;
}

const SongLink = (newNumber: number, name: string) => {
  return <Link href={`/songs/${newNumber}`}>{name}</Link>;
};

export function customizeColumns(
  link: (row: Song, display: string) => React.ReactNode
): GridColDef[] {
  const HyperLink = (value: string, url: string) => {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        {value}
      </a>
    );
  };
  return [
    {
      field: "songName",
      headerName: "Song Name",
      width: 180,
      renderCell: ({ row }: any) => link(row, row.songName),
    },
    {
      field: "englishName",
      headerName: "English Name",
      width: 180,
      renderCell: ({ row }: any) => link(row, row.englishName),
    },
    { field: "newNumber", headerName: "New Number", width: 90 },
    { field: "oldNumber", headerName: "Old Number", width: 90 },
    { field: "ragam", headerName: "ragam", width: 180 },
    {
      field: "tamilMeaning",
      headerName: "Tamil Meaning",
      width: 180,
      renderCell: ({ row }) => HyperLink(row.tamilMeaning, row.tamilMeaningUrl),
    },
    { field: "meaning", headerName: "Meaning", width: 180 },
    { field: "classify1", headerName: "Classify 1", width: 180 },
    { field: "classify2", headerName: "Classify 2", width: 180 },
    { field: "classify3", headerName: "Classify 3", width: 180 },
  ];
}

export const SongsTable = (props: {
  songs: Song[];
  columns: any[];
  setSelection?: any;
  select?: number[];
  checkboxSelection?: boolean;
}) => {
  const [songs, setSongs] = React.useState<any[]>(props.songs);
  const [filter, setFilter] = React.useState<string>("");
  const [classify, setClassify] = React.useState("");

  const handleClassify = (event: any) => {
    setClassify(event.target.value);
  };

  const handleDelete = () => {
    setClassify("");
  };

  React.useEffect(() => {
    let songs = props.songs;
    if (classify) {
      songs = songs.filter((song: any) => {
        return (
          song?.classify1?.includes(classify) ||
          song?.classify2?.includes(classify) ||
          song?.classify3?.includes(classify)
        );
      });
    }
    if (filter) {
      songs = songs.filter((song: any) => {
        return Object.keys(song)
          .map((key) => {
            return `${song[key]}`
              .toLowerCase()
              .startsWith(filter.toLowerCase());
          })
          .reduce((a, b) => a || b);
      });
    }
    setSongs(songs);
  }, [filter, props.songs, classify]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <TextField
          id="standard-basic"
          label="Search here..."
          variant="standard"
          autoComplete="off"
          fullWidth
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="classify">Classify</InputLabel>
          <Select
            labelId="classify"
            id="classify-select"
            value={classify}
            label="Classify"
            onChange={handleClassify}
          >
            <MenuItem value={"Vinayakar"}>Vinayakar</MenuItem>
            <MenuItem value={"Guru"}>Guru</MenuItem>
            <MenuItem value={"Baghavat"}>Baghavat</MenuItem>
            <MenuItem value={"Shivan"}>Shivan</MenuItem>
            <MenuItem value={"Ramayanam"}>Ramayanam</MenuItem>
            <MenuItem value={"Yaman"}>Yaman</MenuItem>
            <MenuItem value={"Valli deivayani"}>Valli deivayani</MenuItem>
            <MenuItem value={"Peruvazhvu"}>Peruvazhvu</MenuItem>
            <MenuItem value={"Murugan"}>Murugan</MenuItem>
            <MenuItem value={"Lotus feet"}>Lotus feet</MenuItem>
            <MenuItem value={"Valli"}>Valli</MenuItem>
            <MenuItem value={"Ambal"}>Ambal</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {classify && <Chip label={classify} onDelete={handleDelete} />}
        <div style={{ height: 500 }}>
          <br />
          <DataGrid
            onSelectionModelChange={(newSelection) => {
              props.setSelection(newSelection);
            }}
            rows={songs}
            columns={props.columns}
            density="compact"
            pageSize={10}
            selectionModel={props.select}
            checkboxSelection={props.checkboxSelection}
            disableSelectionOnClick
            rowsPerPageOptions={[10]}
          />
        </div>
      </Grid>
    </Grid>
  );
};
export interface User {
  email: string;
  phoneNumber: string;
  photoURL: string;
  uid: string;
  displayName: string;
  username: string;
}
export interface Song {
  id?: string;
  songName: string;
  songUrl: string;
  newNumber: number;
  oldNumber: number;
  ragam: string;
  thalam: string;
  thalamUrl: string;
  tamilMeaning: string;
  tamilMeaningUrl: string;
  meaning: string;
  classify1: string;
  classify2: string;
  classify3: string;
  englishName: string;
  englishMeaning: string;
  [key: string]: any;
}

export interface Playlist {
  createdAt: any;
  updatedAt: any;
  pid: string;
  list: number[];
  name: string;
  uid: string;
  username: string;
  user?: User;
  songs?: Song[];
}

export interface Feedback {
  message: string;
  commentedOn: any;
  uid: string;
  fid?: string;
  user?: User;
}

export const getUsernameFromEmail = (email: string) => {
  return email.split("@")[0];
};

const playlistStyles = makeStyles((theme: Theme) =>
  createStyles({
    user: {
      fontWeight: "bold",
      fontSize: "16px",
    },
    username: {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },

    title: {
      fontWeight: "bold",
      fontSize: "20px",
      cursor: "pointer",
      textTransform: "capitalize",
    },
    subtitle: {
      fontWeight: "lighter",
      fontStyle: "italic",
      fontSize: "14px",
    },
  })
);

export function PlayListCard({
  playlist: { pid, username, name, list, createdAt, uid },
  onPlaylistDelete,
}: {
  playlist: Playlist;
  onPlaylistDelete?: (pid: string) => Promise<void>;
}) {
  const classes = playlistStyles();
  const router = useRouter();
  const [currentUser] = useAuthState(auth);
  return (
    <Grid item xs={12} key={pid}>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.user}
          >
            By&nbsp;
            <Link passHref href={`/${username}`}>
              <MaterialLink underline="hover" color="primary">
                @{username}
              </MaterialLink>
            </Link>
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="h1"
            onClick={() => {
              router.push(`/${username}/${pid}`);
            }}
            className={classes.title}
          >
            <MaterialLink underline="hover" color="inherit">
              {name}
            </MaterialLink>
          </Typography>
          <Typography paragraph className={classes.subtitle}>
            {moment(createdAt).format("LL")} - {list.length} Songs
          </Typography>
        </CardContent>
        <CardActions>
          <SharePlaylist username={username} pid={pid} />
          {onPlaylistDelete && currentUser?.uid === uid && (
            <Button
              color="secondary"
              size="small"
              onClick={() => onPlaylistDelete(pid)}
            >
              DELETE
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export function SharePlaylist({
  username,
  pid,
}: {
  username: string;
  pid: string;
}) {
  return (
    <Button
      size="small"
      onClick={async () => {
        await navigator.clipboard.writeText(
          `https://www.thiruppugazhanbargal.org/${username}/${pid}`
        );
        toast.success("Copied to clipboard!");
      }}
    >
      Share
    </Button>
  );
}

export function AlertDialog({
  open,
  handleClose,
  message,
}: {
  open: boolean;
  handleClose: any;
  message: string;
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Alert</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export function SongDetails({
  song,
  children,
}: {
  song: Song;
  children?: any;
}) {
  const p1 = extractQueryParams(song.songUrl);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <iframe
            className="song"
            src={`https://www.youtube.com/embed/${p1.get("v")}`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {children}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Ragam: <span>{song.ragam}</span>
          </Typography>
          <Typography paragraph>
            New Number:
            <span>{song.newNumber}</span>
          </Typography>
          <Typography paragraph>
            Old Number:
            <span>{song.oldNumber}</span>
          </Typography>
          <Typography paragraph>
            Tamil Meaning:
            <span>
              {song.tamilMeaningUrl ? (
                <a href={song.tamilMeaningUrl} target="_blank" rel="noreferrer">
                  {song.tamilMeaning}
                </a>
              ) : (
                song.tamilMeaning
              )}
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Meaning: <span> {song.meaning}</span>
          </Typography>
          <Typography paragraph>
            Classify 1:
            <span>{song.classify1}</span>
          </Typography>
          <Typography paragraph>
            Classify 2:
            <span>{song.classify2}</span>
          </Typography>
          <Typography paragraph>
            Classify 3:
            <span>{song.classify3}</span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
