import { Card, CardContent, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Center, Copyright, Heading, IST, Metatags } from "../components/common";
import Image from "next/image";
import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";
import image1 from "../public/images/valli-kalyanam/valli kalyanam_1-min.jpg";
import image2 from "../public/images/valli-kalyanam/valli kalyanam_2-min.jpg";
import image3 from "../public/images/valli-kalyanam/valli kalyanam_3-min.jpg";
import image4 from "../public/images/valli-kalyanam/valli kalyanam_4-min.jpg";
import image5 from "../public/images/valli-kalyanam/valli kalyanam_5-min.jpg";
import image6 from "../public/images/valli-kalyanam/valli kalyanam_6-min.jpg";
import image7 from "../public/images/valli-kalyanam/valli kalyanam_7-min.jpg";
import image8 from "../public/images/valli-kalyanam/valli kalyanam_8-min.jpg";
import image9 from "../public/images/valli-kalyanam/valli kalyanam_9-min.jpg";
import image10 from "../public/images/valli-kalyanam/valli kalyanam_10-min.jpg";
import image11 from "../public/images/valli-kalyanam/valli kalyanam_11-min.jpg";
import image12 from "../public/images/valli-kalyanam/valli kalyanam_12-min.jpg";
import image13 from "../public/images/valli-kalyanam/valli kalyanam_13-min.jpg";
import image14 from "../public/images/valli-kalyanam/valli kalyanam_14-min.jpg";
import image15 from "../public/images/valli-kalyanam/valli kalyanam_15-min.jpg";
import image16 from "../public/images/valli-kalyanam/valli kalyanam_16-min.jpg";
import image17 from "../public/images/valli-kalyanam/valli kalyanam_17-min.jpg";
import image18 from "../public/images/valli-kalyanam/valli kalyanam_18-min.jpg";
import image19 from "../public/images/valli-kalyanam/valli kalyanam_19-min.jpg";
import image20 from "../public/images/valli-kalyanam/valli kalyanam_20-min.jpg";
import image21 from "../public/images/valli-kalyanam/valli kalyanam_21-min.jpg";
import image22 from "../public/images/valli-kalyanam/valli kalyanam_22-min.jpg";
import image23 from "../public/images/valli-kalyanam/valli kalyanam_23-min.jpg";
import image24 from "../public/images/valli-kalyanam/valli kalyanam_24-min.jpg";
import image25 from "../public/images/valli-kalyanam/valli kalyanam_25-min.jpg";
import image26 from "../public/images/valli-kalyanam/valli kalyanam_26-min.jpg";
import image27 from "../public/images/valli-kalyanam/valli kalyanam_27-min.jpg";
import image28 from "../public/images/valli-kalyanam/valli kalyanam_28-min.jpg";
import image29 from "../public/images/valli-kalyanam/valli kalyanam_29-min.jpg";
import image30 from "../public/images/valli-kalyanam/valli kalyanam_30-min.jpg";
import image31 from "../public/images/valli-kalyanam/valli kalyanam_31-min.jpg";
import image32 from "../public/images/valli-kalyanam/valli kalyanam_32-min.jpg";
import image33 from "../public/images/valli-kalyanam/valli kalyanam_33-min.jpg";
import image34 from "../public/images/valli-kalyanam/valli kalyanam_34-min.jpg";
import image35 from "../public/images/valli-kalyanam/valli kalyanam_35-min.jpg";

const images: { [key: string]: StaticImageData } = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
};

export default function ValliKalyanam(props: any) {
  return (
    <Layout>
      <Metatags title="Valli Kalyanam" />
      <Card>
        <CardContent>
          <Heading text="Valli Kalyanam" />
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
            {Object.keys(images).map((key) => {
              return (
                <Grid item md={12} key={key}>
                  <Center>
                    <Image src={images[key]} alt="guruji" />
                  </Center>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
      <Copyright />
    </Layout>
  );
}

export async function getStaticProps() {
  const doc = await firestore.collection("other").doc("vallikalyanam").get();
  return {
    props: {
      list: doc?.data()?.data,
    },
    revalidate: IST,
  };
}
