import { Card, CardContent, CardHeader, Grid, List, ListItem, Link, Typography } from "@material-ui/core";
import { Center, Heading, IST, Metatags, SubHeading } from "../components/common";
import Layout from "../components/Layout";
import { storage } from "../lib/firebase";

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
          <Grid container>
            <Grid item md={12} xs={12}>
              <SubHeading text="Valli Kalyanam Book PDF" />
              <List>
                {[{name: 'Valli Kalyanam', url: '/pdf/Valli K_0001.pdf'}].map(({ name, url }: { name: string; url: string }) =>
                  <ListItem key={url}>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <Typography gutterBottom component="p">
                        {name}
                      </Typography>
                    </Link>
                  </ListItem>)}
              </List>
            </Grid>
          </Grid>


        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {

  const pdfsRef = await storage.ref("resources/valli-kalyanam").list();
  const pdfs = await Promise.all(
    pdfsRef.items.map(async (item) => {
      const url = await item.getDownloadURL();
      return { name: item.name, url };
    })
  );

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
      pdfs
    },
    revalidate: IST,
  };
}
