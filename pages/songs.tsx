import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import ExcelJS from "exceljs";
var FileSaver = require("file-saver");
import Layout from "../components/Layout";
import { firestore } from "../lib/firebase";
import { Copyright, Heading, IST, Metatags } from "../components/common";

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

function getWorkbook(selected: any[], songs: any[]) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Selected Songs");
  const selectedSongs: any[] = songs.filter((song) => {
    return selected.includes(song.newNumber);
  });
  let width = 30;
  worksheet.columns = [
    { header: "Song Name", key: "songName", width },
    { header: "New Number", key: "newNumber", width: 20 },
    { header: "Old Number", key: "oldNumber", width: 20 },
    { header: "Ragam", key: "ragam", width },
    { header: "Thalam", key: "thalam", width },
    { header: "Tamil Meaning", key: "tamilMeaning", width },
    { header: "Meaning", key: "meaning", width },
    { header: "Classify 1", key: "classify1", width },
    { header: "Classify 2", key: "classify2", width },
    { header: "Classify 3", key: "classify3", width },
  ];
  for (let i = 0; i < selectedSongs.length; i++) {
    const row = worksheet.getRow(i + 2);
    const song = selectedSongs[i];
    for (let j = 0; j < worksheet.columns.length; j++) {
      const column = worksheet.columns[j];
      const cell = row.getCell(j + 1);
      switch (column.key) {
        case "songName":
          cell.value = {
            text: song.songName,
            hyperlink: song.songUrl,
          };
          cell.font = {
            color: { argb: "2B00FF" },
          };
          break;
        case "thalam":
          if (song.thalamUrl === "NOLINK") {
            cell.value = song.thalam ?? `-`;
          } else {
            cell.value = {
              text: song.thalam,
              hyperlink: song.thalamUrl,
            };
            cell.font = {
              color: { argb: "2B00FF" },
            };
          }
          break;
        case "tamilMeaning":
          cell.value = {
            text: song.tamilMeaning,
            hyperlink: song.tamilMeaningUrl,
          };
          cell.font = {
            color: { argb: "2B00FF" },
          };
          break;
        default:
          cell.value = column.key ? song[column.key] : ``;
      }
    }
  }
  return workbook;
}

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
    <>
      <Layout>
        <Metatags title="Songs With Script And Audio" />
        <Card>
          <CardContent>
            <Heading text="Songs With Script And Audio" />
            <Grid container>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!select.length}
                  onClick={exportToExcel}
                >
                  Export
                </Button>
              </Grid>
            </Grid>
            <br />
            <Grid container>
              <Grid item md={12}>
                <div style={{ height: 500 }}>
                  <DataGrid
                    onSelectionModelChange={(newSelection) => {
                      setSelection(newSelection);
                    }}
                    rows={props?.songs}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                  />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Copyright />
      </Layout>
    </>
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
