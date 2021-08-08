import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";
import image1 from "../public/images/articles/Felicitation-1-min.jpg";
import image2 from "../public/images/articles/Felicitation-2-min.jpg";
import image3 from "../public/images/articles/Felicitation-3-min.jpg";
import image4 from "../public/images/articles/Felicitation-4-min.jpg";
import image5 from "../public/images/articles/Felicitation-5-min.jpg";
import image6 from "../public/images/articles/Felicitation-6-min.jpg";
import image7 from "../public/images/articles/Felicitation-7-min.jpg";
import image8 from "../public/images/articles/Felicitation-8-min.jpg";
import image9 from "../public/images/articles/Felicitation-9-min.jpg";
import image10 from "../public/images/articles/Felicitation-10-min.jpg";
import image11 from "../public/images/articles/Felicitation-11-min.jpg";
import image12 from "../public/images/articles/Felicitation-12-min.jpg";
import image13 from "../public/images/articles/Felicitation-13-min.jpg";
import image14 from "../public/images/articles/Felicitation-14-min.jpg";
import image15 from "../public/images/articles/Felicitation-15-min.jpg";
import image16 from "../public/images/articles/Felicitation-16-min.jpg";
import image17 from "../public/images/articles/Felicitation-17-min.jpg";
import image18 from "../public/images/articles/Felicitation-18-min.jpg";
import image19 from "../public/images/articles/Felicitation-19-min.jpg";
import image20 from "../public/images/articles/Felicitation-20-min.jpg";
import image21 from "../public/images/articles/Felicitation-21-min.jpg";
import image22 from "../public/images/articles/Felicitation-22-min.jpg";
import image23 from "../public/images/articles/Felicitation-23-min.jpg";
import image24 from "../public/images/articles/Felicitation-24-min.jpg";
import image25 from "../public/images/articles/Felicitation-25-min.jpg";
import image26 from "../public/images/articles/Felicitation-26-min.jpg";
import image27 from "../public/images/articles/Felicitation-27-min.jpg";

import Layout from "../components/Layout";
import { Center, Copyright, Heading, Metatags } from "../components/common";

export default function Articles() {
  return (
    <Layout>
      <Metatags title="Articles" />
      <Card>
        <CardContent>
          <Heading text="Articles" />
          <Grid container>
            <Grid item md={12}>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Felicitation&apos;s to Guruji </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Center>
                      <Image src={image1} alt="guruji" />
                    </Center>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Pada Thamarai by Guruji</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
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
                  </Box>
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
                  <Box>
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
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    Thiruppugazhai Vaibhavam Aakkiya by Guruji
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Center>
                      <Image src={image14} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image15} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image16} alt="guruji" />
                    </Center>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Cultivating Indianess by Hindu Paper</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Center>
                      <Image src={image17} alt="guruji" />
                    </Center>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    ArunagiriNatharum Arputha Vakkum by Uma Bala Subramanian
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
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
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    About Guruji Mami by Smt Padma Subramanian
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Center>
                      <Image src={image25} alt="guruji" />
                    </Center>
                    <Center>
                      <Image src={image26} alt="guruji" />
                    </Center>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Grace by Sri Vs Krishnan</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Center>
                      <Image src={image27} alt="guruji" />
                    </Center>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Copyright />
    </Layout>
  );
}
