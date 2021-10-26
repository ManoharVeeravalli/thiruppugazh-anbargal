import {
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {
  extractQueryParams,
  Heading,
  IST,
  Metatags,
  Song,
} from "../../components/common";
import Layout from "../../components/Layout";
import { firestore } from "../../lib/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    span: {
      fontWeight: "bold",
    },
  })
);

export default function SongItem({ song }: { song: Song }) {
  const classes = useStyles();
  const p1 = extractQueryParams(song.songUrl);
  const p2 = extractQueryParams(song.thalamUrl);
  return (
    <Layout>
      <Metatags
        title={song.songName}
        description={song.songUrl}
      />
      <Card>
        <CardContent>
          <Heading text={song.songName} />
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
            </Grid>
            {song.thalam && (
              <Grid item md={6} xs={12}>
                <iframe
                  className="song"
                  src={`https://www.youtube.com/embed/${p2.get("v")}`}
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Grid>
            )}
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography paragraph>
                Ragam: <span className={classes.span}>{song.ragam}</span>
              </Typography>
              <Typography paragraph>
                New Number:
                <span className={classes.span}>{song.newNumber}</span>
              </Typography>
              <Typography paragraph>
                Old Number:
                <span className={classes.span}>{song.oldNumber}</span>
              </Typography>
              <Typography paragraph>
                Tamil Meaning:
                <span className={classes.span}>
                  {song.tamilMeaningUrl ? (
                    <a
                      href={song.tamilMeaningUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
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
                Meaning: <span className={classes.span}> {song.meaning}</span>
              </Typography>
              <Typography paragraph>
                Classify 1:
                <span className={classes.span}>{song.classify1}</span>
              </Typography>
              <Typography paragraph>
                Classify 2:
                <span className={classes.span}>{song.classify2}</span>
              </Typography>
              <Typography paragraph>
                Classify 3:
                <span className={classes.span}>{song.classify3}</span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const { sid } = params;
  const doc = await firestore.collection("songs").doc(sid).get();
  return {
    props: { song: doc.data() },
    revalidate: IST,
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collection("songs").get();
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { sid: doc.id },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}
