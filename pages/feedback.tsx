import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
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
  serverTimestamp,
} from "../lib/firebase";
import { Heading, Metatags } from "../components/common";
import Link from "next/link";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  })
);

export default function Feedback(props: any) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [comment, setComment] = useState(``);
  const [comments, setComments] = useState(props?.comments || []);

  const [user] = useAuthState(auth);

  const addComment = async (comment: string) => {
    if (!comment) {
      setError(true);
    } else {
      setError(false);
    }
    const o = {
      commentImage: user?.photoURL,
      commentMsg: comment,
      commentedBy: user?.displayName,
      commentedOn: serverTimestamp(),
      commentedUserUid: user?.uid,
    };
    try {
      await firestore.collection("comments").add(o);
      props.comments.push(o);
      setComment("");
      setComments([o, ...comments]);
    } catch (e) {
      console.error(e);
      alert("Failed to add comment");
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
            {comments?.map((comment: any) => {
              return (
                <ListItem alignItems="flex-start" key={comment.commentMsg}>
                  <ListItemAvatar>
                    <Avatar
                      alt={comment.commentedBy}
                      src={comment.commentImage}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Link href={`/${comment.commentedUserUid}`}>
                        {comment.commentedBy}
                      </Link>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {comment.commentMsg}
                        </Typography>
                      </>
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
    .collection("comments")
    .orderBy("commentedOn", "desc")
    .get();
  return {
    props: {
      comments: collection.docs.map((doc) => {
        return commentsToJSON(doc);
      }),
    },
  };
}
