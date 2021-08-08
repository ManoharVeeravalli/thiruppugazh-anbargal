import { Box, Button, Grid, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import banner1 from "../public/images/carosal/banner1.webp";
import banner2 from "../public/images/carosal/banner2.png";
import banner3 from "../public/images/carosal/banner3.webp";
import banner4 from "../public/images/carosal/banner4.webp";
import Head from "next/head";
import theme from "../lib/theme";
import FacebookIcon from "@material-ui/icons/Facebook";
import google from "../public/google.png";
import { auth, firestore, googleAuthProvider } from "../lib/firebase";

export const IST = 86400;

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
      <Center>
        <Typography variant="caption">
          Copyright © 2021 by Thiruppugazh Anbargal. All rights reserved.
        </Typography>
      </Center>
    </Box>
  );
}

export function Carosal() {
  return (
    <Carousel
      className="w-100"
      autoPlay
      interval={3000}
      fullHeightHover={false}
      indicators={false}
    >
      <Image src={banner2} alt="banner" />
      <Image src={banner1} alt="banner" />
      <Image src={banner3} alt="banner" />
      <Image src={banner4} alt="banner" />
    </Carousel>
  );
}

export function Metatags({
  title = "Thiruppugazh Anbargal",
  description = "Guruji Sri AS Raghavan has had a life of miracles. He was an extraordinary man, recognized by one and all as superhuman and as an evolved soul.",
  image = "https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-9/99120461_1218156155021322_4691731027570196480_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=e3f864&_nc_ohc=BIUYnI3cqEsAX9UkVYv&_nc_ht=scontent.fhyd14-2.fna&oh=963123cbe73df2743261df9abec3fc7d&oe=6135CF15",
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
