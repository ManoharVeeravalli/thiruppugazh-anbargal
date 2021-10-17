import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import Layout from "../components/Layout";
import image1 from "../public/images/other/5-min.jpg";
import image2 from "../public/images/rules/goldenRules-min.jpg";
import image3 from "../public/images/other/9-min.png";
import image4 from "../public/images/other/10-min.png";
import { Center, Heading, SubHeading, Metatags } from "../components/common";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function Rules() {
  return (
    <Layout>
      <Metatags
        title="Golden Rules"
        description={`Guruji Sri AS Raghavan is the only person to be referred as 'Guruji' in our organization.,
        The Isai Vazhipaadu will be conducted as per the 'Paddhathi' established by Guruji,
        Only the 505 songs tuned by Guruji will be sung and in the same ragam that he has set,
        There should be strict discipline, silence and shanthi during and after the bhajan.,
        It is the responsibility of all teachers to let all new students know about Guruji.`}
      />
      <Card>
        <CardContent>
          <Heading text="Golden Rules, Message from Guruji" />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <List component="div" dense>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography paragraph>
                      <strong>
                        Guruji Sri AS Raghavan is the only person to be referred
                        as &apos;Guruji&apos; in our organization.
                      </strong>
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography paragraph>
                      The Isai Vazhipaadu will be conducted as per the &apos;
                      <strong>Paddhathi</strong>&apos; established by Guruji
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography paragraph>
                      Only the 505 songs tuned by Guruji will be sung and in the
                      same ragam that he has set
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      There should be strict discipline, silence and shanthi
                      during and after the bhajan.
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>
                      It is the responsibility of all teachers to let all new
                      students know about Guruji.
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            {/* <Grid item md={5} xs={12}>
              <Center>
                <Image src={image1} alt="guruji" />
              </Center>
            </Grid> */}
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Center>
                <Image src={image2} alt="guruji" />
              </Center>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <SubHeading text="Message From Guruji" />
              <Typography paragraph>2001</Typography>
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography paragraph>
                <strong>
                  My humble namaskarams to all anbargal who teach Thiruppugazh,
                  students who learn Thiruppugazh, those anbargal who enjoy
                  listening to Thiruppugazh and those who volunteer to serve in
                  the Thiruppugazh Anbargal organisation.
                </strong>
              </Typography>
              <Typography paragraph>
                Thiruppugazh is the divine words of andavan through the
                compositions of Saint Arunagirinathar, in the form of poetry. It
                contains the essence of the vedas.
              </Typography>
              <Typography paragraph>
                Andavan is making us sing, listen and understand with devotion,
                the Thiruppugazh with the correct chandam in the correct ragam,
                thaalam and bhava. Let us all incorporate the teachings into our
                way of life
              </Typography>
              <Typography paragraph>
                The true nature of the Paramporul is referred to as Murugan in
                Thiruppugazh For us to understand and enjoy the benefits of
                Thiruppugazh, the first change that is needed is to get rid of
                &apos;யான்-தான் -- (I -My&apos;, ego-self).
              </Typography>
              <Typography paragraph>
                Only then one can see the Param porul in the words of
                Thiruppugazh
              </Typography>
              <Typography paragraph>
                &apos;I am singing&apos; &apos;I am singing well&apos; &apos;I
                am singing better than others&apos;- In the first place, these
                thoughts must be removed from our minds.
              </Typography>
              <Typography paragraph>
                Only if HE Andavan makes us sing, we sing.Any singing without
                HIS wish will not happen.This should be understood by us.
                Everybody cannot sing in the same manner. Andavan makes each one
                sing according to his capacity.It is therefore not right to
                discuss or comment about anybody&apos;s inability to sing the
                way they have been taught.
              </Typography>
              <Typography paragraph>
                Thiruppugazh teaches that those who cannot sing in raga, thala
                and bhava can benefit even by reading aloud or reading in the
                mind. Murugan will still bless them
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <Center>
                <Image src={image3} alt="guruji" />
              </Center>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={7} xs={12}>
              <Typography paragraph>
                So let all those who learn, teach, listen and sing Thiruppugazh
                .Understand this and get the blessings of Murugan
              </Typography>
              <Typography paragraph>
                &apos;Anbu&apos; is the word or substance of all
                Thiruppugazh.What each one of us has to realise is that the
                central theme of Thiruppugazh is &apos;Anbe Sivam&apos;
              </Typography>
              <Typography paragraph>
                If we submerge ourselves in this &apos;Anbe Sivam&apos;, it will
                surely remove all bad thoughts, bad deeds, from our minds and
                enable us to show love towards all beings and elevate us to the
                ADVAITA stage. Let us not waste this realisation on worldly
                matters, let us elevate ourselves and sing with devotion and
                keep this feeling of Anbu -Love in our minds.
              </Typography>
              <Typography paragraph>
                Once we are able to keep this love within us, we will develop
                AVIROTHAM –NON ENIMITY/be able to talk and relate with all and
                do Thruppugazh work as one family.
              </Typography>
              <Typography paragraph>
                Arunagirinathar has given two unmatched teachings viz.
              </Typography>
              <Typography paragraph>ANBU & AVIROTHAM</Typography>
              <Typography paragraph>LOVE & NON ENIMITY</Typography>
              <Typography paragraph>
                Let us get rid of self pride and dwell in Anbu and Avirotham and
                do Thiruppugazh service.
              </Typography>
              <Typography paragraph>
                The teaching anbargal, learning anbargal, all those working
                under the banner of Thiruppugazh Anbargal, should imbibe these
                three gunas viz. Anbu, Avirodam and Aanavam atra nilai (egoless
                state).
              </Typography>
              <Typography paragraph>
                Only then will their service be fruitful, beneficial, divine and
                pleasing to Muruga.
              </Typography>
              <Typography paragraph>
                Whatever we do, we should realize that andavan is making us do
                it. Service done without doubts, anguish, done with attitude of
                selflessness will never go in vain.
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <Center>
                <Image src={image4} alt="guruji" />
              </Center>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}
