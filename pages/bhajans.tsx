import { Card, CardContent, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Heading, IST } from "../components/common";

import Layout from "../components/Layout";
import Metatags from "../components/Metataga";
import { firestore } from "../lib/firebase";

export default function Bhajans(props: any) {
  return (
    <Layout>
      <Metatags title="Bhajans" />
      <Card>
        <CardContent>
          <Heading text="Bhajans" />
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
