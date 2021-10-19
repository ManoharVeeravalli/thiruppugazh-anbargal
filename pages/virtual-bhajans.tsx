import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { extractQueryParams, Heading, IST, Metatags } from "../components/common";

import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";

export default function Bhajans(props: any) {
  return (
    <Layout>
      <Metatags title="Virtual Bhajans" />
      <Card>
        <CardContent>
          <Heading text="Virtual Bhajans" />
          <Grid container>
            <Grid item md={12} xs={12}>
              <TableContainer>
                <Table>
                  <TableBody>
                    {props?.list?.map(({ name, url }: any, i: number) => {
                      const params = extractQueryParams(url);
                      let cell = (
                        <a href={url} target="_blank" rel="noreferrer">
                          {name}
                        </a>
                      );
                      if (params.has('v')) {
                        cell = (
                          <iframe
                            className="bhajans"
                            src={`https://www.youtube.com/embed/${params.get('v')}`}
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        );
                      } else if (params.has('list')) {
                        cell = (
                          <iframe
                            className="bhajans"
                            src={`https://www.youtube.com/embed/videoseries?list=${params.get('list')}`}
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        );
                      }
                      return (
                        <TableRow key={i}>
                          <TableCell>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {name}
                            </Typography>
                            {cell}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await firestore.collection("other").doc("bhajans").get();
  return {
    props: {
      list: doc?.data()?.data,
    },
    revalidate: IST,
  };
}
