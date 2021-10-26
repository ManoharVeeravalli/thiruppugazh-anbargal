import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import {
  extractQueryParams,
  Heading,
  IST,
  Metatags,
} from "../components/common";

import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";

export default function VelMayilVirutham(props: any) {
  return (
    <Layout>
      <Metatags title="Vel Mayil Virutham" />
      <Card>
        <CardContent>
          <Heading text="Vel Mayil Virutham" />
          <Grid container>
            <Grid item md={12} xs={12}>
              <TableContainer>
                <Table>
                  <TableBody>
                    {props?.list?.map(
                      ({ english, ragam, url }: any, i: number) => {
                        return (
                          <TableRow key={i}>
                            <TableCell>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                              >
                                {ragam}  {english}
                              </Typography>
                              {url.map((u: string) => {
                                const params = extractQueryParams(u);
                                return (
                                  <iframe
                                    key={u}
                                    className="bhajans"
                                    src={`https://www.youtube.com/embed/${params.get(
                                      "v"
                                    )}`}
                                    title="YouTube video player"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                );
                              })}
                            </TableCell>
                          </TableRow>
                        );
                      }
                    )}
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
  const doc = await firestore
    .collection("other")
    .doc("vel-mayil-virutham")
    .get();
  return {
    props: {
      list: doc?.data()?.data,
    },
    revalidate: IST,
  };
}
