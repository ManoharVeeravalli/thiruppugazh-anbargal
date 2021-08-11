import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Layout from "../components/Layout";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { firestore } from "../lib/firebase";
import {
  Center,
  Heading,
  IST,
  SubHeading,
  Metatags,
} from "../components/common";
import Image from "next/image";
import image1 from "../public/images/other/1-min.jpg";
import image2 from "../public/images/other/2-min.jpg";

export default function Centers(props: any) {
  return (
    <Layout>
      <Metatags title="Centers In India And World" />
      <Card>
        <CardContent>
          <Heading text="Centers In India And World" />
          <Grid container spacing={1}>
            <Grid item md={7} xs={12} className="overflow-auto">
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Delhi</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Delhi" />
                  <Typography paragraph>
                    Guruji started this movement in Delhi and it has spread
                    world over.He used to conduct cl;asses and bhajans almost
                    all 7 days of the week and return home by 9 pm every
                    day.There are several classes conducted by anbars across the
                    city.
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Padi Vizha</TableCell>
                          <TableCell>Malai mandir</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Arunagirinathar Vizha</TableCell>
                          <TableCell>Malai mandir</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Thai Poosam</TableCell>
                          <TableCell>
                            Karunya Mahaganapathy Mandir at Mayur Vihar II,
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sri Ramanavami Bhajan</TableCell>
                          <TableCell>
                            Mayur Vihar I, South Indian Association
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tamil New Year Bhajan</TableCell>
                          <TableCell>Dwaraka</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Maha Skanda Shasti</TableCell>
                          <TableCell>
                            Subha Siddhi Vinayagar Mandir, Mayur Vihar I,
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Ayyappa Mandala Pooja Bhajan</TableCell>
                          <TableCell>
                            Aishwarya Mahaganapathi Temple (Lawrence Road)
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Thiru Karthigai Bhajan</TableCell>
                          <TableCell>
                            Ganeshji Mandir, Irwin Road, Connaught Place
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>25th December</TableCell>
                          <TableCell>Devi Kamakshi Temple</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Navarathri Bhajan</TableCell>
                          <TableCell>
                            Sri Sharadambal Koil, VasantVihar
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Guruvandanam</TableCell>
                          <TableCell>
                            Bhajan at Malai Mandir, R.K.Puram
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Skanda Sashti Bhajan</TableCell>
                          <TableCell>Malai Mandir, R.K.Puram</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Delhi"
                    contacts={[
                      { name: "Sri S.Ganesh", number: "9810413265" },
                      { name: "Smt Girija", number: "9953727467" },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Chennai</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Chennai" />
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                          <TableCell component="th">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>Krithikai</TableCell>
                          <TableCell>Kapaliswarar temple, Mylapore</TableCell>
                          <TableCell>Every Month</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell>Shashti</TableCell>
                          <TableCell>Ramana Kendra, Mylapore</TableCell>
                          <TableCell>Every Month</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell>Visakham</TableCell>
                          <TableCell>
                            Marundeeswarar temple, Thiruvanmiyur and Ramana
                            Kendra, Mylapore
                          </TableCell>
                          <TableCell>Every Month</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell>Padi Vizha</TableCell>
                          <TableCell>Kunrathur temple</TableCell>
                          <TableCell>Second Sunday of January</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>Vaikuntha Ekadasi</TableCell>
                          <TableCell>
                            Ananthapadmanabhaswamy temple, Adyar
                          </TableCell>
                          <TableCell>December-January</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>Thaippoosam</TableCell>
                          <TableCell>
                            Rathnagiriswarar temple, Besant Nagar
                          </TableCell>
                          <TableCell>January-February</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>
                            Thai Amavasya– Abhirami Anthadi and Pathigam
                          </TableCell>
                          <TableCell>
                            Madhya Kailash Vinayaka Temple, Adyar
                          </TableCell>
                          <TableCell>January-February</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>
                            Thai-velli – Abhirami Anthadi and Pathigam
                          </TableCell>
                          <TableCell>Ramana Kendra, Mylapore</TableCell>
                          <TableCell>
                            One of the Fridays of Thai (January-February)
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>Panguni Uthiram</TableCell>
                          <TableCell>
                            Ganesha temple, Srinagar, Saidapet
                          </TableCell>
                          <TableCell>March-April</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10</TableCell>
                          <TableCell>Tamil New Year’s Day</TableCell>
                          <TableCell>
                            Sringeri Mandiram hall, Raja Annamalaipuram.
                          </TableCell>
                          <TableCell>April 13 or 14</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>11</TableCell>
                          <TableCell>Guruji’s Remembrance Day</TableCell>
                          <TableCell>(Location may vary)</TableCell>
                          <TableCell>May</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>12</TableCell>
                          <TableCell>Vaikasi Visakham</TableCell>
                          <TableCell>
                            Sachidananda Ashram Hall, Velachery
                          </TableCell>
                          <TableCell>May-June</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>13</TableCell>
                          <TableCell>Aani Moolam</TableCell>
                          <TableCell>Vadapalani Murugan temple</TableCell>
                          <TableCell>June-July</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>14</TableCell>
                          <TableCell>
                            Adi-velli - Abhirami Anthadi and Pathigam
                          </TableCell>
                          <TableCell>
                            Kamakshi Amman temple,Raja Annamalaipuram
                          </TableCell>
                          <TableCell>
                            One of the Fridays of Adi (July-August)
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>15</TableCell>
                          <TableCell>Arunagirinathar Day</TableCell>
                          <TableCell>
                            Sringeri Mandiram hall , Raja Annamalaipuram.
                          </TableCell>
                          <TableCell>August 15</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>16</TableCell>
                          <TableCell>Ganesha Chaturthi</TableCell>
                          <TableCell>Ramana Kendra, Mylapore</TableCell>
                          <TableCell>August-September</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>17</TableCell>
                          <TableCell>Guru Vandanam</TableCell>
                          <TableCell>
                            Rathnagiriswarar temple, Besant Nagar
                          </TableCell>
                          <TableCell>September</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>18</TableCell>
                          <TableCell>Skanda Shashti – Days 1-5</TableCell>
                          <TableCell>Various locations</TableCell>
                          <TableCell>October-November</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>19</TableCell>
                          <TableCell>Maha Skanda Shashti</TableCell>
                          <TableCell>
                            Sringeri Mandiram hall, Raja Annamalaipuram
                          </TableCell>
                          <TableCell>October-November</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <Typography paragraph>
                    All events are well attended.By the grace of Senthil andavan
                    the thiruppugazh wave started by Guruji in Delhi has spread
                    far and wide and taken Chenna,i the land of Tamilians by
                    storm.There are a team of teachers ,the Doyen among them is
                    Smt Alamelu Santanam
                  </Typography>
                  <br />
                  <ContactPersons
                    location="Chennai"
                    contacts={[
                      { name: "Sri Muthuswamy", number: "9444140101" },
                      { name: "Sri S. Arunachalam", number: "94449537335" },
                      { name: "Smt Alamelu Santhanam", number: "9962905136" },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Bombay</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Bombay" />
                  <Typography paragraph>
                    About 40 Classes under 20 teachers
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Vaikasi Visakam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Aadi Moolam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Adi Kruthigai Aadi Friday</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Abhirami Andadi and Padhigam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>
                            Arunagirinathar Vizha on aug 15th
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Padi Vizha 26 Jan at Chembur</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Skanda Sashti, Thai Poosam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>
                            Mumbai and Pune anbargal – Combined Padi Vizha at
                            Pune on 25 Dec
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Bombay"
                    contacts={[
                      {
                        name: "Smt Raja Lakshmi Balasubramanian",
                        number: "9967664594",
                      },
                      { name: "Sri A.S. Mani", number: "9820993406" },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Banglore</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Banglore" />
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>
                            Sashti, Krithigai, Moolam and Visakam
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Skanda Sashti</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Makhara Sankranthi</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Vaikasi Visakam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Aani Moolam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Aadi Krithigai</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Vinayaka Chathurthi</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Thirukarthigai</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Karthigai Moolam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Thai Poosam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Panguni Uthiram</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Guru Vandanam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Sri Ramanavami</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            Abirami Andadhi and Abirami Padigam
                          </TableCell>
                          <TableCell>
                            Fridays during the months of Aadi and Thai
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Thirppugazh Paamaalai</TableCell>
                          <TableCell>15th August</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Arunagiri Anjali</TableCell>
                          <TableCell>2nd October</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Padivizha</TableCell>
                          <TableCell>7th January</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <Typography paragraph>
                    Classes are conducted in several places throughout the week.
                  </Typography>
                  <ContactPersons
                    location="Banglore"
                    contacts={[
                      {
                        name: "Sri R.Nagesh",
                        number: "9448089383",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Hyderabad</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Hyderabad" />
                  <Typography paragraph>
                    Classes are held on all days of the week at various places
                    by several teachers for last 30 yrs
                  </Typography>
                  <Typography paragraph>Monthly TIVs</Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Sashti</TableCell>
                          <TableCell>Subramanya swami temple</TableCell>
                          <TableCell>Marredpally</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Krithikai</TableCell>
                          <TableCell>Ganesh temple</TableCell>
                          <TableCell>Marredpally</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1st Sunday</TableCell>
                          <TableCell>Skandagiri murugan temple</TableCell>
                          <TableCell>Padmarao nagar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Gurusamarpanam</TableCell>
                          <TableCell>Hanuman temple</TableCell>
                          <TableCell>Padmarao nagar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Visakam</TableCell>
                          <TableCell>temple</TableCell>
                          <TableCell>Malkajgiri</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography paragraph>Ashtothra Shatha TIV</Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Padi Vizha</TableCell>
                          <TableCell>Skandagiri temple</TableCell>
                          <TableCell>Padmarao nagar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Arunagirinathar Vizha</TableCell>
                          <TableCell>Skandagiri temple</TableCell>
                          <TableCell>Padmarao nagar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Vaikasi Visakam</TableCell>
                          <TableCell>Veda Bhavan</TableCell>
                          <TableCell>Malkajgiri</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography paragraph>Other Bhajans</Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>First Jan</TableCell>
                          <TableCell>Veda Bhavan</TableCell>
                          <TableCell>Malkajgiri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tamil New Year</TableCell>
                          <TableCell>Veda Bhavan</TableCell>
                          <TableCell>Malkajgiri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Guruvandanam</TableCell>
                          <TableCell>Hanuman temple</TableCell>
                          <TableCell>Padmarao nagar</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Vijayadashami</TableCell>
                          <TableCell>Residence</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Skanda Sashti, all 6 days</TableCell>
                          <TableCell>Various temples</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Thai poosam</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Panguni Uthiram</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography paragraph>
                    Abhirami Andadi and Pathikam
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>All Fridays</TableCell>
                          <TableCell>Thai month</TableCell>
                          <TableCell>various temples</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>All Fridays</TableCell>
                          <TableCell>Adi month</TableCell>
                          <TableCell>various temples</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Navratri all days</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>residences</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Hyderabad"
                    contacts={[
                      {
                        name: "Smt Lakshmi Venkatraman",
                        number: "9395528128",
                      },
                      {
                        name: "Dr Girija Krishnan",
                        number: "9848812301",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Pune</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Pune" />
                  <Typography paragraph>
                    Classes are conducted in different places by a team of
                    teachers.
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Padi vizha</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Venkataraman memory day</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Sivaratri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Arunigirinathar vizha</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Gurujis birthday</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Skanda Sashti tiv</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Pazhaiya adiyavar dinam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Thai poosam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>panguniuthiram</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Vaikasi visakam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Aadi kruthigai</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Every kruthigai</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography paragraph>
                    Every month we participate in the Laksha archanai.
                  </Typography>
                  <Typography paragraph>
                    Group efforts are taken for ‘kummi aattam’ in all functions
                  </Typography>
                  <br />
                  <ContactPersons
                    location="Pune"
                    contacts={[
                      {
                        name: "Smt Dharini Ganesh",
                        number: "8793685864",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Coimbatore</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Coimbatore" />
                  <Typography paragraph>
                    Classes are held at various places in the city.
                  </Typography>
                  <Typography paragraph>
                    Arunagirinathar vizha Aug 15 Bharatiya Vidya Bhavan
                  </Typography>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Vaikasi visakam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Panguni Uthiram</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Thai Poosam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Skanda Sashti</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Valli Kalyanam</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Coimbatore"
                    contacts={[
                      {
                        name: "Sri Vaidyanathan",
                        number: "9994158712",
                      },
                      {
                        name: "Sri VS Krishnan",
                        number: "6381606744",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Thiruvananthapuram</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Thiruvananthapuram" />
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Classes</TableCell>
                          <TableCell>Vinayaka Nagar</TableCell>
                          <TableCell>Sunday</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>Thaliyal</TableCell>
                          <TableCell>Monday</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>Karamana</TableCell>
                          <TableCell>Saturday</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Mangala Vinayaka Temple</TableCell>
                          <TableCell>Saturday</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Advaita Hall</TableCell>
                          <TableCell>Dec 25</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Various temples</TableCell>
                          <TableCell>Thai poosam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Shiva ratri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Vaikasi visakam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Skanda sashti</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Mandala pooja samapthi</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Temple</TableCell>
                          <TableCell>Monthly sashti</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Thiruvananthapuram"
                    contacts={[
                      {
                        name: "Sri Balu Iyer",
                        number: "9447092866",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Baroda</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Baroda" />
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Classes</TableCell>
                          <TableCell>Subhanpura</TableCell>
                          <TableCell>Thursdays</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sashti tiv</TableCell>
                          <TableCell>Residence</TableCell>
                          <TableCell>Monthly</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Krithikai tiv</TableCell>
                          <TableCell>Station jayambe temple</TableCell>
                          <TableCell>Monthly</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Visakam tiv</TableCell>
                          <TableCell>Thapovan temple</TableCell>
                          <TableCell>Monthly</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abhirami padikam</TableCell>
                          <TableCell>Sama temple</TableCell>
                          <TableCell>Adi pooram</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abhirami andadi</TableCell>
                          <TableCell>Jayambe temple</TableCell>
                          <TableCell>Navratri amavasya</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Sama temple</TableCell>
                          <TableCell>skanda sashti</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Bhagavatham songs</TableCell>
                          <TableCell>Koch Guruvayur temple</TableCell>
                          <TableCell>Gokulashtami</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Thiruppugazh</TableCell>
                          <TableCell>Temples</TableCell>
                          <TableCell>Panguni uthram</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>Thai poosam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Valli kalyanam</TableCell>
                          <TableCell>Thapovanam</TableCell>
                          <TableCell>Annually</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Baroda"
                    contacts={[
                      {
                        name: "Mrs Rama",
                        number: "9727766292",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Kolkata</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Kolkata" />
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Landmark</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Visakham and Krithigai</TableCell>
                          <TableCell>Sri Ganesh Murugan Temple</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Sashti</TableCell>
                          <TableCell>Veda Bhavan (Kanchi Mutt)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Saturday of every month</TableCell>
                          <TableCell>Anjaneya Temple</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Special bhajans</TableCell>
                          <TableCell>Skanda Sashti (7 days)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Thai Poosam, Aani Moolam</TableCell>
                          <TableCell>Veda Bhavan</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Kolkata"
                    contacts={[
                      {
                        name: "Mr Viji kumar",
                        number: "9874753777",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Toronto</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Toronto" />
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell component="th">Event</TableCell>
                          <TableCell component="th">Place</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Sashti, Vaikasi Visakam</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TIV</TableCell>
                          <TableCell>Skanda Sashti on day 6</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Abhirami Andadi,Padikam</TableCell>
                          <TableCell>During Navaratri</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>-</TableCell>
                          <TableCell>Adi velli</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Valli Kalyanam</TableCell>
                          <TableCell>
                            Sringeri mutt, Adi parasakthi temple
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <ContactPersons
                    location="Toronto"
                    contacts={[
                      {
                        name: "Smt Shanta Krishnamurthy",
                        number: "001 416 888 9169",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>New Jersey</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in New Jersey" />
                  <ContactPersons
                    location="New Jersey"
                    contacts={[
                      {
                        name: "Smt Subha Srinivasan",
                        number: "+1 609 902 4091",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Chicago</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Chicago" />
                  <ContactPersons
                    location="Chicago"
                    contacts={[
                      {
                        name: "Mrs Purna Sethuraman",
                        number: "+1 630 806 6500",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Boston</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Boston" />
                  <ContactPersons
                    location="Boston"
                    contacts={[
                      {
                        name: "Mala Ramakrishnan",
                        number: "-",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Dubai</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Dubai" />
                  <ContactPersons
                    location="Dubai"
                    contacts={[
                      {
                        name: "Sri Srirama",
                        number: "00971 501505631",
                      },
                      {
                        name: "Mrs Vidya Ram",
                        number: "00971 505518246",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<LocationOnIcon />}>
                  <Typography>Singapore</Typography>
                </AccordionSummary>
                <Box p={1}>
                  <SubHeading text="Thiruppugazh activities in Singapore" />
                  <ContactPersons
                    location="Singapore"
                    contacts={[
                      {
                        name: "Mrs Janaki Vishwanath",
                        number: "0065 967 099855",
                      },
                    ]}
                  />
                </Box>
              </Accordion>
            </Grid>
            <Grid item md={5} xs={12} className="overflow-auto">
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell component="th">Name</TableCell>
                      <TableCell component="th">Place</TableCell>
                      <TableCell component="th">Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.contacts.map(
                      ({
                        state,
                        number,
                        name,
                      }: {
                        state: string;
                        name: string;
                        number: string;
                      }) => {
                        return (
                          <TableRow key={name}>
                            <TableCell>{name}</TableCell>
                            <TableCell>{state}</TableCell>
                            <TableCell>{number}</TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SubHeading text="Outreach classes" />
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography paragraph>
                Kumbakonam Classes held two days in a month in Sankara mutt by
                Smt Chitra and Sri Murthy from Chennai
              </Typography>
              <Typography paragraph>Smt Chitra Murthy: 9962577577</Typography>
              <Typography paragraph>
                Trichy and Srirangam--Classes held weekly and on every Sashti by
                Smt Bhuvana from Tanjore.
              </Typography>
              <Typography paragraph>Smt Bhuvana: 9940274037</Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <Center>
                <Image src={image1} alt="guruji" />
              </Center>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SubHeading text="Skype and other techno classes" />
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography paragraph>
                1. Sri R.S. Balaji from Bangalore--students in Dubai and US
              </Typography>
              <Typography paragraph>Sri R.S.Balaji: 9686329900</Typography>

              <Typography paragraph>
                2. Smt Uma Balasubramanian from Chennai--Students in Delhi,A
                group of 15 students attend the class in Noida by Skype or
                Whatsapp video call. They use Bluetooth speaker for better
                clarity.
              </Typography>
              <Typography paragraph>
                Smt Uma Balasubramanian: 9884054757
              </Typography>
            </Grid>
            <Grid item md={5} xs={12}>
              <Center>
                <Image src={image2} alt="guruji" />
              </Center>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

function ContactPersons({
  location,
  contacts,
}: {
  location: string;
  contacts: { name: string; number: string }[];
}) {
  return (
    <>
      <Typography paragraph>Contact persons in {location}</Typography>
      <List>
        {contacts.map(({ name, number }) => {
          return (
            <ListItem key={name}>
              <ListItemText primary={name} secondary={number} />
              <ListItemSecondaryAction>
                <PhoneIcon />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export async function getStaticProps() {
  const collection = await firestore.collection("phoneNumbers").get();
  return {
    props: { contacts: collection.docs.map((doc) => doc.data()) },
    revalidate: IST,
  };
}
