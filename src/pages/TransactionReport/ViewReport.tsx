import React from "react";
import { Box, Tab } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { LoadButton } from "../../components/LoadButton";
import { Colors } from "../../utils/Colors";
import CustomButton from "../../components/CustomButton";
import { Grid } from "@mui/material";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import { Preview } from "../../components/Commission/Preview";
import { strict } from "assert";
import Table from "../../components/Table";

interface Column {
  field: string;
  headerName: string;
  minWidth: number;
  flex: number;
}

interface Row {
  id: number;
  processing_Date: string;
  transaction_Date: string | null;
  outletName: string | null;
  mid: string;
  tid: string;
  transaction: string;
  turnover: string;
}

 const ViewReport = () => {
  const columns: Column[] = [
    {
      field: "processing_Date",
      headerName: "Processing_date",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "transaction_Date",
      headerName: "Transaction_Date",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "outletName",
      headerName: "OutletName",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "mid",
      headerName: "MID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "tid",
      headerName: "TID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "turnover",
      headerName: "Turnover",
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      processing_Date: "11/3/2024",
      transaction_Date: "11/3/2024",
      outletName: "Star Gase",
      mid: "234533..",
      tid: "2364378",
      transaction: "2500",
      turnover: "2500",
    },
    {
      id: 2,
      processing_Date: "11/3/2024",
      transaction_Date: "11/3/2024",
      outletName: "Star Gase",
      mid: "234533..",
      tid: "2364378",
      transaction: "2500",
      turnover: "2500",
    },
    {
      id: 3,
      processing_Date: "11/3/2024",
      transaction_Date: "11/3/2024",
      outletName: "Star Gase",
      mid: "234533..",
      tid: "2364378",
      transaction: "2500",
      turnover: "2500",
    },
    {
      id: 4,
      processing_Date: "11/3/2024",
      transaction_Date: "11/3/2024",
      outletName: "Star Gase",
      mid: "234533..",
      tid: "2364378",
      transaction: "2500",
      turnover: "2500",
    },
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Details">
          <CustomButton
            hoverColor={Colors.deletebtnColor}
            style={{
              backgroundColor: Colors.deletebtnColor,
              color: "#fff",
            }}
            label="Delete"
          />
        </CommonHeader>
        <CustomBox
          style={{
            boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000000D",
            border: `1px solid ${Colors.LinkColor}`,
          }}
        >
          <Grid container rowSpacing={2} columnSpacing={4}>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Aquirer"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Worldpay"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Date"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"11/3/2024"} />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox style={{
          border: `1px solid ${Colors.LinkColor}`
        }}>
        <Table
          columns={columns}
          rows={rows}
          includesPagination={false}
          includeSearch={false}
           title="Preview"
        />
        </CustomBox>
        <Box sx={{display: "flex", marginTop: "2rem", gap: 2}}>
          <LoadButton 
          hoverColor={Colors.deletebtnColor}
          style={{
            background: Colors.deletebtnColor
          }}>
            Cancel
          </LoadButton>
          <LoadButton 
          hoverColor={Colors.successColor}
          style={{
            background: Colors.successColor,
           
          
          }}>
           Confirm
          </LoadButton>
        </Box>
      </CustomBox>
    </Box>
  );
};
export default ViewReport;
