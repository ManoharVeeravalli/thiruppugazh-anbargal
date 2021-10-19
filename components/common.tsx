import { Box, Button, Grid, Typography } from "@material-ui/core";
import ExcelJS from "exceljs";
import Image from "next/image";
import Head from "next/head";
import theme from "../lib/theme";
import FacebookIcon from "@material-ui/icons/Facebook";
import google from "../public/google.png";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";

export const IST = process.env.IST;

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
    <Typography gutterBottom variant="h4" component="h1">
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
    <Box p={3}>
      <Grid container justifyContent="flex-end">
        <a
          href="https://www.facebook.com/Thiruppugazh-Anbargal-341776189325994"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </Grid>
      <br/>
      <Center>
        <Typography variant="caption">
          Copyright © 2021 by Thiruppugazh Anbargal. All rights reserved.
        </Typography>
      </Center>
    </Box>
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
      await firestore.collection("users").doc(u?.uid).set({
        emailId: u?.email,
        phoneNumber: u?.phoneNumber,
        photoURL: u?.photoURL,
        state: null,
        uid: u?.uid,
        username: u?.displayName,
      });
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
          if (song.thalamUrl === "NOLINK") {
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
