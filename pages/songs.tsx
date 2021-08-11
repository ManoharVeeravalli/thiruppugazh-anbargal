import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
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
  const [select, setSelection] = React.useState<any[]>([]);
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
            <Grid item xs={12}>
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
                  rows={props?.songs}
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
  const collection = await firestore.collection("songs").get();
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
  { field: "newNumber", headerName: "New Number", width: 180 },
  { field: "oldNumber", headerName: "Old Number", width: 180 },
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
