import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { Center, Heading, IST, Metatags } from "../components/common";
import Image from "next/image";
import Layout from "../components/Layout";
import { storage } from "../lib/firebase";
import image1 from "../public/images/valli-kalyanam/valli kalyanam_1-min.png";
import image2 from "../public/images/valli-kalyanam/valli kalyanam_2-min.png";
import image3 from "../public/images/valli-kalyanam/valli kalyanam_3-min.png";
import image4 from "../public/images/valli-kalyanam/valli kalyanam_4-min.png";
import image5 from "../public/images/valli-kalyanam/valli kalyanam_5-min.png";
import image6 from "../public/images/valli-kalyanam/valli kalyanam_6-min.png";
import image7 from "../public/images/valli-kalyanam/valli kalyanam_7-min.png";
import image8 from "../public/images/valli-kalyanam/valli kalyanam_8-min.png";
import image9 from "../public/images/valli-kalyanam/valli kalyanam_9-min.png";
import image10 from "../public/images/valli-kalyanam/valli kalyanam_10-min.png";
import image11 from "../public/images/valli-kalyanam/valli kalyanam_11-min.png";
import image12 from "../public/images/valli-kalyanam/valli kalyanam_12-min.png";
import image13 from "../public/images/valli-kalyanam/valli kalyanam_13-min.png";
import image14 from "../public/images/valli-kalyanam/valli kalyanam_14-min.png";
import image15 from "../public/images/valli-kalyanam/valli kalyanam_15-min.png";
import image16 from "../public/images/valli-kalyanam/valli kalyanam_16-min.png";
import image17 from "../public/images/valli-kalyanam/valli kalyanam_17-min.png";
import image18 from "../public/images/valli-kalyanam/valli kalyanam_18-min.png";
import image19 from "../public/images/valli-kalyanam/valli kalyanam_19-min.png";
import image20 from "../public/images/valli-kalyanam/valli kalyanam_20-min.png";
import image21 from "../public/images/valli-kalyanam/valli kalyanam_21-min.png";
import image22 from "../public/images/valli-kalyanam/valli kalyanam_22-min.png";
import image23 from "../public/images/valli-kalyanam/valli kalyanam_23-min.png";
import image24 from "../public/images/valli-kalyanam/valli kalyanam_24-min.png";
import image25 from "../public/images/valli-kalyanam/valli kalyanam_25-min.png";
import image26 from "../public/images/valli-kalyanam/valli kalyanam_26-min.png";
import image27 from "../public/images/valli-kalyanam/valli kalyanam_27-min.png";
import image28 from "../public/images/valli-kalyanam/valli kalyanam_28-min.png";
import image29 from "../public/images/valli-kalyanam/valli kalyanam_29-min.png";
import image30 from "../public/images/valli-kalyanam/valli kalyanam_30-min.png";
import image31 from "../public/images/valli-kalyanam/valli kalyanam_31-min.png";
import image32 from "../public/images/valli-kalyanam/valli kalyanam_32-min.png";
import image33 from "../public/images/valli-kalyanam/valli kalyanam_33-min.png";
import image34 from "../public/images/valli-kalyanam/valli kalyanam_34-min.png";
import image35 from "../public/images/valli-kalyanam/valli kalyanam_35-min.png";

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
      <Heading text="Valli Kalyanam" />
      <Grid container spacing={1}>
        {props?.list.map(({ name, url }: { name: string; url: string }) => {
          return (
            <Grid item md={6} xs={12} key={name}>
              <Card>
                <CardHeader title={name.split(".")[0].replace(/_/g, " ")} />
                <CardContent>
                  <audio controls className="w-100">
                    <source src={url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            {Object.keys(images).map((key) => {
              return (
                <Grid item md={12} xs={12} key={key}>
                  <Center>
                    <Image src={images[key]} alt="guruji" />
                  </Center>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await storage.ref("valli-kalyanam").list();
  const list = await Promise.all(
    files.items.map(async (item) => {
      const url = await item.getDownloadURL();
      return { name: item.name, url };
    })
  );
  return {
    props: {
      list,
    },
    revalidate: IST,
  };
}
