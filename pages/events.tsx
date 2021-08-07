import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";
import EventIcon from "@material-ui/icons/Event";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Heading, IST } from "../components/common";
import Metatags from "../components/Metataga";

export default function Events(props: any) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Metatags title="Major Events & Office Bearers" />
      <Card>
        <CardContent>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Major Events" />
            <Tab label="Office Bearers" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Heading text="Major Events Of Thiruppugazh Movement" />
            <Typography paragraph>
              Guruji Sri A.S. Raghavan started teaching Thiruppugazh in 1958
            </Typography>
            <List>
              {props?.list?.map(({ date, event }: any) => (
                <ListItem key={date}>
                  <ListItemIcon>
                    <EventIcon />
                  </ListItemIcon>
                  <ListItemText primary={date} secondary={event} />
                </ListItem>
              ))}
            </List>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Heading text="Office Bearers 1987-2018" />
            <Grid container>
              <Grid item md={12}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <EventIcon />
                    <Typography>1987 - 1993</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell component="th">
                                Office bearers
                              </TableCell>
                              <TableCell component="th">
                                For purpose of registration 26.8 1987
                              </TableCell>
                              <TableCell component="th">
                                For purpose of accounts26.8 87 to 31.3.90
                              </TableCell>
                              <TableCell component="th">
                                1990-91, 1991-92, 1992-93
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>PRESIDENT</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>VICE PRESIDENT </TableCell>
                              <TableCell>Sri S.B.Subramanian</TableCell>
                              <TableCell>Sri S.B.Subramanian</TableCell>
                              <TableCell>Sri A.G.Krishnan</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SECRETARY</TableCell>
                              <TableCell>Sri K.Lakshminarayanan</TableCell>
                              <TableCell>Sri G.Krishnan </TableCell>
                              <TableCell>Sri A.G.Krishnan</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>JOINT SECRETARY</TableCell>
                              <TableCell>-</TableCell>
                              <TableCell>-</TableCell>
                              <TableCell>Sri N.R.subbaram</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>TREASURER</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>MEMBERS</TableCell>
                              <TableCell>
                                Sri G.SundaramSri A.Sundaram, Sri G.Krishnan,
                                Sri T.M.subramanian, Smt Lakshmi Kumari,Smt Jaya
                                Ramachandran
                              </TableCell>
                              <TableCell>-</TableCell>
                              <TableCell>
                                Sri E.N.Murthy, Sri G.Sundaram, Sri A.Natarajan,
                                Sri T.M.subramanian, Smt S.Doraiswamy, Smt
                                Lakshmi Kumari
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                REGIONS - CHENNAI, KARNATAKA & MUMBAI
                              </TableCell>
                              <TableCell>-</TableCell>
                              <TableCell>-</TableCell>
                              <TableCell>
                                Sri S.K.Ramanathan, Sri R.Venkataraman, Sri
                                A.S.Subramanian
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <EventIcon />
                    <Typography>1993 - 2002</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell component="th">
                                Office bearers
                              </TableCell>
                              <TableCell component="th">
                                1993-94,1994-95,1995-96
                              </TableCell>
                              <TableCell component="th">
                                1996-97,1997-98,1998-99
                              </TableCell>
                              <TableCell component="th">
                                1999-2000,2000-2001,2001-2002
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>PRESIDENT</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>VICE PRESIDENT</TableCell>
                              <TableCell>Sri K.Lakshminarayanan</TableCell>
                              <TableCell>Sri G.Sundaram</TableCell>
                              <TableCell>Sri G.Sundaram</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SECRETARY</TableCell>
                              <TableCell>Sri E.N.Murthy</TableCell>
                              <TableCell>Sri E.N.Murthy</TableCell>
                              <TableCell>Sri E.N.Murthy</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>JOINT SECRETARY</TableCell>
                              <TableCell>Smt S.Padma</TableCell>
                              <TableCell>Smt S.Padma</TableCell>
                              <TableCell>Smt S.Padma</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>TREASURER</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>MEMBERS</TableCell>
                              <TableCell>
                                {" "}
                                Sri G.Sundaram, Sri M.B.Kumaraswamy, Sri
                                N.Rajan, Sri K.Subbiah, Sri G.V.subramanian
                              </TableCell>
                              <TableCell>
                                Sri G.V.Subramanian, Sri K.Subbiah, Sri
                                M.R.Ramani, Smt Uma Balasubramanian
                              </TableCell>
                              <TableCell>
                                Sri K.Subbiah, Sri C V Jayaraman, Sri C N K
                                Swamy, Smt Uma Balasubramanian, Smt Chandra P
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                REGIONS - CHENNAI, KARNATAKA & MUMBAI
                              </TableCell>
                              <TableCell>
                                Sri A.S. Subramanian, Sri R.Venkataraman, Sri
                                K.N.Sivaraman
                              </TableCell>
                              <TableCell>
                                Sri A.S. Subramanian, Sri R.Venkataraman, Smt
                                Padma venkataraman, Sri G Krishnan, Sri T V
                                Ramachandran
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri T V Ramachandran, Smt
                                Padma venkataraman, Sri N S Mani (Delhi)
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <EventIcon />
                    <Typography>2002 - 2008</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell component="th">
                                Office bearers
                              </TableCell>
                              <TableCell component="th">
                                2002-2003,2003-2004
                              </TableCell>
                              <TableCell component="th">2004-2005</TableCell>
                              <TableCell component="th">
                                2005-2006,2006-2007,2007-2008
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>PRESIDENT</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>VICE PRESIDENT</TableCell>
                              <TableCell>Sri Ganesh Sundaram</TableCell>
                              <TableCell>Sri EN Murthy</TableCell>
                              <TableCell>Sri Ganesh Sundaram</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SECRETARY</TableCell>
                              <TableCell>Smt S Padma</TableCell>
                              <TableCell>Smt S Padma</TableCell>
                              <TableCell>Smt S Padma</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>JOINT SECRETARY</TableCell>
                              <TableCell>Smt Uma Balasubramanian</TableCell>
                              <TableCell>Smt Uma Balasubramanian</TableCell>
                              <TableCell>Smt Uma Balasubramanian</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>TREASURER</TableCell>
                              <TableCell>Sri N Rajan</TableCell>
                              <TableCell>Sri N Rajan</TableCell>
                              <TableCell>Sri N Ramamurthi</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>MEMBERS</TableCell>
                              <TableCell>
                                Sri K Subbiah, Sri CV Jayaraman, Sri N
                                Ramamurthi, Sri E N Muthy, Sri V Sethuraman
                              </TableCell>
                              <TableCell>
                                Sri K Subbiah, Sri C V Jayaraman, Sri N
                                Ramamurthi, Sri V Sethuraman
                              </TableCell>
                              <TableCell>
                                Sri K Subbiah, Sri C V Jayaraman, Sri G
                                Krishnan, Sri N Rajan, Smt Chandra P
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                REGIONS - CHENNAI, KARNATAKA & MUMBAI
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri KN Krishnamurthy, Smt
                                Padma V
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri KN Krishnamurthy, Smt
                                Padma V
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri KN Krishnamurthy, Smt
                                Padma V
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <EventIcon />
                    <Typography>2008 - 2019</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell component="th">
                                Office bearers
                              </TableCell>
                              <TableCell component="th">
                                2008-2009,2009-2010,2010-2011
                              </TableCell>
                              <TableCell component="th">
                                2011-2012,2012-2013,2013-2014
                              </TableCell>
                              <TableCell component="th">
                                2014-2015,2015-2016,2016-2017
                              </TableCell>
                              <TableCell component="th">
                                2017-2018,2018-2019
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>PRESIDENT</TableCell>
                              <TableCell>Sri A.S.Raghavan</TableCell>
                              <TableCell>Smt Padma V</TableCell>
                              <TableCell>Sri KN Krishnamurthy</TableCell>
                              <TableCell>Sri KN Krishnamurthy</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>VICE PRESIDENT</TableCell>
                              <TableCell>Sri Ganesh Sundaram</TableCell>
                              <TableCell>Sri Ganesh Sundaram</TableCell>
                              <TableCell>Sri Ganesh Sundaram</TableCell>
                              <TableCell>Sri Ganesh Sundaram</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>SECRETARY</TableCell>
                              <TableCell>Smt S Padma</TableCell>
                              <TableCell>Smt S Padma</TableCell>
                              <TableCell>Sri R Nagesh</TableCell>
                              <TableCell>Sri R Nagesh</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>JOINT SECRETARY</TableCell>
                              <TableCell>Smt S.Padma</TableCell>
                              <TableCell>Smt S.Padma</TableCell>
                              <TableCell>Smt S.Padma</TableCell>
                              <TableCell>-</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>TREASURER</TableCell>
                              <TableCell>Sri N.Ramamurthi</TableCell>
                              <TableCell>Sri N Rajan</TableCell>
                              <TableCell>Sri JA Kuppu Subramanian</TableCell>
                              <TableCell>Sri JA Kuppu Subramanian</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>MEMBERS</TableCell>
                              <TableCell>
                                Sri G Krishnan, Sri CV Jayaraman, Sri G
                                Vasudevan, Smt Uma B, Smt Girija R
                              </TableCell>
                              <TableCell>
                                Sri G.V.Subramanian, Sri CV Jayaraman, Sri G
                                Vasudevan, Smt Uma B, Smt Seetha V
                              </TableCell>
                              <TableCell>
                                Sri R Ramanathan, Sri N Rajan, Sri K
                                Balasubramanian, Dr M Natarajan, Smt Vasantha P
                              </TableCell>
                              <TableCell>
                                Sri TS Sakthidharan, Sri RS Balaji, Sri K
                                Balasubramanian, Smt Vasantha P, Sri AS
                                Nagarajan
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                REGIONS - CHENNAI, KARNATAKA & MUMBAI
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri KN Krishnamurthy, Smt
                                Padma V, Sri R Thiagarajan
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri KN Krishnamurthy, Sri
                                R Thiagarajan
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri AN Arumugan, Sri
                                Ramnath S Mani
                              </TableCell>
                              <TableCell>
                                Sri G Balasubramanian, Sri SG Ramakrishnan, Sri
                                Ramnath S Mani
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </TabPanel>
        </CardContent>
      </Card>
    </Layout>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export async function getStaticProps() {
  const doc = await firestore.collection("other").doc("events").get();
  return {
    props: {
      list: doc?.data()?.data,
    },
    revalidate: IST,
  };
}
