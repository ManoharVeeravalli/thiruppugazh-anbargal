import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Copyright, Heading, IST, Metatags } from "../components/common";
import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";

export default function Meanings(props: any) {
  return (
    <Layout>
      <Metatags title="All Songs With Meaning" />
      <Card>
        <CardContent>
          <Heading text="All Songs With Meaning" />
          <Grid container>
            <Grid item md={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell component="th">#</TableCell>
                      <TableCell component="th">Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props?.list?.map(({ name, url }: any, i: number) => {
                      return (
                        <TableRow key={i}>
                          <TableCell>{i + 1}</TableCell>
                          <TableCell>
                            <a href={url} target="_blank" rel="noreferrer">
                              {name}
                            </a>
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
      <Copyright />
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await firestore.collection("other").doc("meanings").get();
  return {
    props: {
      list: doc?.data()?.data,
    },
    revalidate: IST,
  };
}
