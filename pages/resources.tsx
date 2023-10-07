import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  Typography,
  List,
  ListItem,
  Link
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";
import image1 from "../public/images/articles/Felicitation-1-min.png";
import image2 from "../public/images/articles/Felicitation-2-min.png";
import image3 from "../public/images/articles/Felicitation-3-min.png";
import image4 from "../public/images/articles/Felicitation-4-min.png";
import image5 from "../public/images/articles/Felicitation-5-min.png";
import image6 from "../public/images/articles/Felicitation-6-min.png";
import image7 from "../public/images/articles/Felicitation-7-min.png";
import image8 from "../public/images/articles/Felicitation-8-min.png";
import image9 from "../public/images/articles/Felicitation-9-min.png";
import image10 from "../public/images/articles/Felicitation-10-min.png";
import image11 from "../public/images/articles/Felicitation-11-min.png";
import image12 from "../public/images/articles/Felicitation-12-min.png";
import image13 from "../public/images/articles/Felicitation-13-min.png";
import image14 from "../public/images/articles/Felicitation-14-min.png";
import image15 from "../public/images/articles/Felicitation-15-min.png";
import image16 from "../public/images/articles/Felicitation-16-min.png";
import image17 from "../public/images/articles/Felicitation-17-min.png";
import image18 from "../public/images/articles/Felicitation-18-min.png";
import image19 from "../public/images/articles/Felicitation-19-min.png";
import image20 from "../public/images/articles/Felicitation-20-min.png";
import image21 from "../public/images/articles/Felicitation-21-min.png";
import image22 from "../public/images/articles/Felicitation-22-min.png";
import image23 from "../public/images/articles/Felicitation-23-min.png";
import image24 from "../public/images/articles/Felicitation-24-min.png";
import image25 from "../public/images/articles/Felicitation-25-min.png";
import image26 from "../public/images/articles/Felicitation-26-min.png";
import image27 from "../public/images/articles/Felicitation-27-min.png";
import { storage } from "../lib/firebase";
import Layout from "../components/Layout";
import { Center, Heading, Metatags, SubHeading1, IST, SubHeading } from "../components/common";

export default function Articles(props: any) {
  return (
    <Layout>
      <Metatags title="Resources" />
      <Card>
        <CardContent>
          <Heading text="Resources" />
          <Grid container>
            <Grid item md={12} xs={12}>
              <SubHeading text="TIV Book Regional" />
              <List>
                {props.pdfs.map(({ name, url }: { name: string; url: string }) =>
                  <ListItem key={url}>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <Typography gutterBottom component="p">
                        {name}
                      </Typography>
                    </Link>
                  </ListItem>)}
              </List>
            </Grid>
            <Grid item md={12} xs={12}>
              <SubHeading text="All Songs With Meaning" />
              <List>
                {props.meanings.map(({ name, url }: { name: string; url: string }) =>
                  <ListItem key={url}>
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                      <Typography gutterBottom component="p">
                        {name}
                      </Typography>
                    </Link>
                  </ListItem>)}
              </List>
            </Grid>
            <Grid item md={12} xs={12}>
              <SubHeading text="Articles" />
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Felicitation&apos;s to Guruji </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image1} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Pada Thamarai by Guruji</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image2} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image3} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image4} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image5} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Arunagirinathar Arutparvaiyil Aatruppadai Thalangal by Smt
                    Chitra Murthy
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image6} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image7} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image8} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image9} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image10} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image11} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image12} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image13} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Thiruppugazhai Vaibhavam Aakkiya by Guruji
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image14} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image15} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image16} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Cultivating Indianess by Hindu Paper</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image17} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    ArunagiriNatharum Arputha Vakkum by Uma Bala Subramanian
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image18} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image19} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image20} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image21} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image22} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image23} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image24} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    About Guruji Mami by Smt Padma Subramanian
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image25} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image26} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Grace by Sri Vs Krishnan</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Center>
                      <Image src={image27} alt="guruji" />
                    </Center>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {
  const pdfsRef = await storage.ref("resources/pdfs").list();
  const pdfs = await Promise.all(
    pdfsRef.items.map(async (item) => {
      const url = await item.getDownloadURL();
      return { name: item.name, url };
    })
  );

  const meaningsRef = await storage.ref("meanings").list();
  const meanings = await Promise.all(
    meaningsRef.items.map(async (item) => {
      const url = await item.getDownloadURL();
      return { name: item.name, url };
    })
  );
  return {
    props: {
      pdfs,
      meanings
    },
    revalidate: IST,
  };
}
