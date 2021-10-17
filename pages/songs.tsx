import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import TextField from "@material-ui/core/TextField";
import Image from "next/image";
var FileSaver = require("file-saver");
import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";
import {
  Center,
  getWorkbook,
  Heading,
  IST,
  Metatags,
} from "../components/common";
import guru1 from "../public/images/other/6-min.jpg";

export default function Songs(props: any) {
  const [songs, setSongs] = React.useState<any[]>(props.songs);
  const [select, setSelection] = React.useState<any[]>([]);
  const [filter, setFilter] = React.useState<string>("");
  React.useEffect(() => {
    if (filter) {
      setSongs(
        props.songs.filter((song: any) => {
          return Object.keys(song)
            .map((key) => {
              return `${song[key]}`.toLowerCase().startsWith(filter.toLowerCase());
            })
            .reduce((a, b) => a || b);
        })
      );
    } else {
      setSongs(props.songs);
    }
  }, [filter, props.songs]);
  const exportToExcel = async () => {
    const workbook = getWorkbook(select, props?.songs);
    workbook.xlsx.writeBuffer().then(function (data: any) {
      var blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      FileSaver.saveAs(blob, `songs_${Date.now()}.xlsx`);
    });
  };
  return (
    <Layout>
      <Metatags title="Songs With Script And Audio" />
      <Card>
        <CardContent>
          <Heading text="Songs With Script And Audio" />
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="Search here..."
                variant="standard"
                fullWidth
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Button
                variant="contained"
                color="primary"
                disabled={!select.length}
                onClick={exportToExcel}
              >
                Export
              </Button>
            </Grid>
            <Grid item xs={12}>
              <div style={{ height: 500 }}>
                <DataGrid
                  onSelectionModelChange={(newSelection) => {
                    setSelection(newSelection);
                  }}
                  rows={songs}
                  columns={columns}
                  density="compact"
                  pageSize={10}
                  checkboxSelection
                  disableSelectionOnClick
                />
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={3}>
            <Grid item md={5} xs={12}>
              <Center>
                <Image src={guru1} alt="guruji" width={250} height={350} />
              </Center>
            </Grid>
            <Grid item md={7} xs={12}>
              <Typography paragraph>
                All 503 songs have audio with script with ragas meanings in
                English and classified based on songs on vinayakar, guru,
                shivan, ramayana, ambal, bhagwatam, yaman, lotus feet, murugan &
                peruvazhvu. All these lists can be obtained by the click of a
                button.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  );
}

export async function getStaticProps() {
  const collection = await firestore
    .collection("songs")
    .orderBy("newNumber", "asc")
    .get();
  return {
    props: {
      songs: collection.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.data().newNumber,
        };
      }),
    },
    revalidate: IST,
  };
}

const HyperLink = (value: string, url: string) => {
  if (!value) {
    return <span>-</span>;
  }
  if (!url || url === "NOLINK") {
    return <span>{value}</span>;
  }
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        {value}
      </a>
    </>
  );
};

const columns: GridColDef[] = [
  {
    field: "songName",
    headerName: "Song Name",
    width: 180,
    renderCell: ({ row }) => HyperLink(row.songName, row.songUrl),
  },
  { field: "newNumber", headerName: "New Number", width: 90 },
  { field: "oldNumber", headerName: "Old Number", width: 90 },
  { field: "ragam", headerName: "ragam", width: 180 },
  {
    field: "thalam",
    headerName: "thalam",
    width: 180,
    renderCell: ({ row }) => HyperLink(row.thalam, row.thalamUrl),
  },
  {
    field: "tamilMeaning",
    headerName: "Tamil Meaning",
    width: 180,
    renderCell: ({ row }) => HyperLink(row.tamilMeaning, row.tamilMeaningUrl),
  },
  { field: "meaning", headerName: "Meaning", width: 180 },
  { field: "classify1", headerName: "Classify 1", width: 180 },
  { field: "classify2", headerName: "Classify 2", width: 180 },
  { field: "classify3", headerName: "Classify 3", width: 180 },
];
