import { Grid } from "@material-ui/core";
import { Heading, Metatags } from "../components/common";

import Layout from "../components/Layout";

export default function Souveneirs(props: any) {
  return (
    <Layout>
      <Metatags title="Souveneirs" />
      <Heading text="Souveneirs" />
      <Grid container spacing={1}>
        {
            [
                './pdf/1975 DELHI ARUNAGIRINATHAR 6th CENTENARY.pdf',
                './pdf/1975 KARNATAKA ARUNAGIRINATHAR 6th CENTENARY.pdf',
                './pdf/1983 DELHI VELLI VIZHA.pdf',
                './pdf/1988 KARNATAKA THIRUPPUGAZH KARUVOOLAM.pdf',
                './pdf/1994 KARNATAKA SILVER JUBILEE.pdf',
                './pdf/1997 MUMBAI VELLI VIZHA THIRUPPUGAZH OVIYAM.pdf',
                './pdf/1998 CHENNAI 40YRS THIRUVIZHA.pdf',

            ].map(url => {
                return <Grid item md={12} xs={12} key={url}><a href={url} key={url} target="_blank" rel="noopener noreferrer">{url.substring(url.lastIndexOf('/') + 1)}</a></Grid>
            })
        }
      </Grid>
    </Layout>
  );
}
