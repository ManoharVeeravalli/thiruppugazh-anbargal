import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import ExcelJS from "exceljs";
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
      <div style={{padding: '24px'}}>
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

export function getWorkbook(selected: any[], songs: any[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Selected Songs");
  const selectedSongs: any[] = songs.filter((song) => {
    return selected.includes(song.newNumber);
  });
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
  for (let i = 0; i < selectedSongs.length; i++) {
    const row = worksheet.getRow(i + 2);
    const song = selectedSongs[i];
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
  return workbook;
}

export function extractQueryParams(url: string) {
  const map: Map<string, string> = new Map();
  const query = url.split("?")[1]?.split("&");
  for (let param of query ?? []) {
    map.set(param.split("=")[0], param.split("=")[1]);
  }
  return map;
}

const HyperLink = (value: string, url: string) => {
  if (!value) {
    return <span>-</span>;
  }
  if (!url) {
    return <span>{value}</span>;
  }
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        {value}
      </a>
    </>
  );
};

const SongLink = (row: any) => {
  return <Link href={`/songs/${row.newNumber}`}>{row.songName}</Link>;
};

export const columns: GridColDef[] = [
  {
    field: "songName",
    headerName: "Song Name",
    width: 180,
    renderCell: ({ row }: any) => SongLink(row),
  },
  { field: "newNumber", headerName: "New Number", width: 90 },
  { field: "oldNumber", headerName: "Old Number", width: 90 },
  { field: "ragam", headerName: "ragam", width: 180 },
  {
    field: "thalam",
    headerName: "thalam",
    width: 180,
    renderCell: ({ row }) => HyperLink(row.thalam, row.thalamUrl),
  },
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

export const SongsTable = (props: {
  songs: Song[];
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
      {classify && (
        <Grid xs={12}>
          <Chip label={classify} onDelete={handleDelete} />
        </Grid>
      )}
      <Grid item xs={12}>
        <div style={{ height: 500 }}>
          <br />
          <DataGrid
            onSelectionModelChange={(newSelection) => {
              props.setSelection(newSelection);
            }}
            rows={songs}
            columns={columns}
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
            <span
              className={classes.username}
              onClick={() => {
                router.push(`/${username}`);
              }}
            >
              @{username}
            </span>
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
            {name}
          </Typography>
          <Typography paragraph className={classes.subtitle}>
            {moment(createdAt).format("LL")} - {list.length} Songs
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={async () => {
            await navigator.clipboard.writeText(`https://www.thiruppugazhanbargal.org/${username}/${pid}`);
            toast.success('Copied to clipboard!');
          }}>Share</Button>
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
