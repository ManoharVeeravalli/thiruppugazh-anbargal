import { Card, CardContent, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Layout from "../components/Layout";
import { commentsToJSON, firestore } from "../lib/firebase";
import { Heading, IST } from "../components/common";
import Metatags from "../components/Metataga";

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
  return (
    <Layout>
      <Metatags title="Write To Us" />
      <Card>
        <CardContent>
          <Heading text="Write To Us" />
          <List>
            {props?.comments?.map((comment: any) => {
              return (
                <ListItem alignItems="flex-start" key={comment.commentMsg}>
                  <ListItemAvatar>
                    <Avatar
                      alt={comment.commentedBy}
                      src={comment.commentImage}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.commentedBy}
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

export async function getStaticProps() {
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
    revalidate: IST,
  };
}
