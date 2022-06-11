import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { Heading, IST, Metatags } from "../components/common";

import Layout from "../components/Layout";
import { storage } from "../lib/firebase";

export default function VelMayilVirutham(props: any) {
  return (
    <Layout>
      <Metatags title="Vel Mayil Virutham" />
      <Heading text="Vel Mayil Virutham" />
      <Grid container spacing={1}>
        {props?.list.map(({ name, url }: { name: string; url: string }) => {
          return (
            <Grid item md={6} xs={12} key={name}>
              <Card>
                <CardHeader
                  title={name}
                ></CardHeader>
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
    </Layout>
  );
}

export async function getStaticProps() {
  const files = await storage.ref("vel-mayil-virutham").list();
  const list = await Promise.all(
    files.items.map(async (item) => {
      const url = await item.getDownloadURL();
      let name = item.name;
      name = name.split('.mp3')[0];
      let number = +name.split('.')[0];
      return { name: name, url, number };
    })
  );
  list.sort((a, b) =>  {
    return a.number - b.number;
  })
  return {
    props: {
      list,
    },
    revalidate: IST,
  };
}
