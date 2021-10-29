import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Link as MaterialLink,
} from "@material-ui/core";
import toast from "react-hot-toast";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Layout from "../components/Layout";
import {
  auth,
  commentsToJSON,
  firestore,
  getUser,
  serverTimestamp,
} from "../lib/firebase";
import { Feedback, Heading, Metatags, User } from "../components/common";
import Link from "next/link";
import { useState } from "react";
const moment = require("moment");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      color: theme.palette.grey[500],
    },
  })
);

export default function FeedbackComments(props: { feedbacks: Feedback[] }) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [comment, setComment] = useState(``);
  const [comments, setComments] = useState<Feedback[]>(props?.feedbacks || []);

  const [user] = useAuthState(auth);

  const addComment = async (comment: string) => {
    if (!comment) {
      setError(true);
    } else {
      setError(false);
    }
    let o: Feedback = {
      message: comment,
      commentedOn: serverTimestamp(),
      uid: `${user?.uid}`,
    };
    const toastId = toast.loading("Loading...");
    try {
      const doc = await firestore.collection("feedbacks").add(o);
      const userDoc = (await getUser(`${user?.uid}`)).data() as User;
      o = {
        ...o,
        fid: `${doc.id}`,
        user: userDoc,
      };
      toast.remove(toastId);
      toast.success("Feedback added successfully");
      setComment("");
      setComments([{ ...o, commentedOn: Date.now() }, ...comments]);
    } catch (e) {
      console.error(e);
      toast.remove(toastId);
      toast.error("Failed to add feedback, Please try again later");
    }
  };
  return (
    <Layout>
      <Metatags title="Write To Us" />
      <Card>
        <CardContent>
          <Heading text="Write To Us" />
          {user && (
            <>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    error={error}
                    onChange={(c) => {
                      setComment(c.target.value);
                      setError(false);
                    }}
                    value={comment}
                    label="Feedback"
                    multiline
                    variant="outlined"
                    rows={5}
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
              <br />
              <Grid container justifyContent="flex-end" alignItems="flex-end">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    disabled={!comment}
                    onClick={() => addComment(comment)}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
              <br />
            </>
          )}
          <List>
            {comments?.map(({ message, user, fid, commentedOn }) => {
              return (
                <ListItem alignItems="flex-start" key={fid}>
                  <ListItemAvatar>
                    <Avatar alt={user?.displayName} src={user?.photoURL} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        <Link passHref href={`/${user?.username}`}>
                          <MaterialLink underline="hover" color="inherit">
                            {user?.displayName}
                          </MaterialLink>
                        </Link>
                        &nbsp;
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="inherit"
                        >
                          {moment(commentedOn).fromNow()}
                        </Typography>
                      </>
                    }
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {message}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getServerSideProps() {
  const collection = await firestore
    .collection("feedbacks")
    .orderBy("commentedOn", "desc")
    .get();
  const feedbacks = collection.docs.map(commentsToJSON) as Feedback[];
  for (const feedback of feedbacks) {
    feedback.user = (await getUser(feedback.uid)).data() as User;
  }
  return {
    props: {
      feedbacks,
    },
  };
}
