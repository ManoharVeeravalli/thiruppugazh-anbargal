import { Grid } from "@material-ui/core";
import { Heading, Metatags } from "../components/common";

import Layout from "../components/Layout";

export default function GuruAnjali(props: any) {
  return (
    <Layout>
      <Metatags title="Guru Anjali" />
      <Heading text="Guru Anjali" />
      <Grid container spacing={1}>
        {
            [
                './pdf/1. Guru Anjali 1998.pdf',
                './pdf/2. Pavazha Vizha of guruji 2003.pdf',
                './pdf/3. Guruji Ninaivu Poongotthu 2018.pdf',
            ].map(url => {
                return <Grid item md={12} xs={12} key={url}><a href={url} key={url} target="_blank" rel="noopener noreferrer">{url.substring(url.lastIndexOf('/') + 1)}</a></Grid>
            })
        }
      </Grid>
    </Layout>
  );
}
