import { Card, CardContent, Typography } from "@material-ui/core";
import { Heading } from "../components/common";
import Layout from "../components/Layout";
import Metatags from "../components/Metataga";

export default function AboutUs() {
  return (
    <Layout>
      <Metatags
        title="About Us"
        description={`This web site has been developed with the intention of propagating
      Guruji Sri A.S. Raghavan’s enormous contribution to society. All of
      us, our parents and generations to come will benefit from this, so I
      thought it is our duty to consolidate everything and preserve it for
      posterity
      The aim is that anyone opening this web site can get all the music,
      several bhajans, the true paddhathi of a bhajan, all centres round
      the world etc etc.
      We have tried not to highlight anybody by name, as we are after all
      just small instruments in this whole scheme of things. We should
      consider ourselves blessed, we lived in the era when Guruji was
      present and we developed an interest in this.
      In developing this web site I have taken help of many members of our
      group, across the country. I would just like to mention the two
      persons who gave me the technical help in developing this web site.
      They are
      Sri Pavan Kumar our son in law,
      Sri Murali Manohar his cousin,
      Please pray to Senthil andavan to shower His blessings on them for a
      happy, successful and contented life and more in the service of the
      LORD.
      I wish to add as many of Guruji’s bhajans, pictures, speeches,
      functions or anecdotes. Let this site remain exclusively for GURUJI,
      Thiruppugazh and Muruga.`}
      />

      <Card>
        <CardContent>
          <Heading text="About Us" />
          <Typography paragraph>
            This web site has been developed with the intention of propagating
            Guruji Sri A.S. Raghavan’s enormous contribution to society. All of
            us, our parents and generations to come will benefit from this, so I
            thought it is our duty to consolidate everything and preserve it for
            posterity
          </Typography>
          <Typography paragraph>
            The aim is that anyone opening this web site can get all the music,
            several bhajans, the true paddhathi of a bhajan, all centres round
            the world etc etc.
          </Typography>
          <Typography paragraph>
            We have tried not to highlight anybody by name, as we are after all
            just small instruments in this whole scheme of things. We should
            consider ourselves blessed, we lived in the era when Guruji was
            present and we developed an interest in this.
          </Typography>
          <Typography paragraph>
            In developing this web site I have taken help of many members of our
            group, across the country. I would just like to mention the two
            persons who gave me the technical help in developing this web site.
            They are
          </Typography>
          <Typography paragraph>Sri Pavan Kumar our son in law,</Typography>
          <Typography paragraph>Sri Murali Manohar his cousin</Typography>
          <Typography paragraph>
            Please pray to Senthil andavan to shower His blessings on them for a
            happy, successful and contented life and more in the service of the
            LORD.
          </Typography>
          <Typography paragraph>
            I wish to add as many of Guruji’s bhajans, pictures, speeches,
            functions or anecdotes. Let this site remain exclusively for GURUJI,
            Thiruppugazh and Muruga.
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  );
}
