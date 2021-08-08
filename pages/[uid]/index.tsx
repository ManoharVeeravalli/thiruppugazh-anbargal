import {
  Avatar,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import { useAuthState } from "react-firebase-hooks/auth";
import { Center } from "../../components/common";
import Layout from "../../components/Layout";
import { auth, firestore } from "../../lib/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      margin: "auto",
    },
  })
);

export default function Profile({ user }: any) {
  const classes = useStyles();
  const router = useRouter();

  const [currentUser] = useAuthState(auth);

  const signOut = async () => {
    await auth.signOut();
    router.push("/");
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <div className="box-center">
            <Center>
              <Avatar
                alt={user.username}
                src={user.photoUrl}
                className={classes.large}
              />
              <p>
                <Typography variant="caption">
                  <i>{user.emailId}</i>
                </Typography>
              </p>
              <Typography variant="h6" component="h1">
                {user.username}
              </Typography>
              {user.uid === currentUser?.uid ? (
                <Button variant="outlined" color="secondary" onClick={signOut}>
                  Sign Out
                </Button>
              ) : null}
            </Center>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getServerSideProps({ query }: any) {
  let user;
  const { uid } = query;
  const userDoc = await firestore.collection("users").doc(uid).get();
  // If no user, short circuit to 404 page
  if (!userDoc.exists) {
    return {
      notFound: true,
    };
  }
  user = userDoc.data();
  return {
    props: { user },
  };
}
