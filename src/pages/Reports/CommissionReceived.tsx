
import React from "react";
import { Box, Typography } from "@mui/material";
import Table1 from "../../components/TableWithDatePic";
import { Header } from "../../components/Dashboard/Header";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

interface Column {
  field: string;
  headerName: string;
  minWidth: number;
  flex: number;
  sortable?: boolean;
  renderCell?: (params: any) => React.ReactNode;
}

interface Row {
  id: number;
  aquirer: string;
  mid: number | null;
  tid: number | null;
  tradingName: string;
  legalName: string;
  duration: string;
  terminalType: number;
  rent: number;
  commissionReceived: number;
  monthReceived: string;

 
}


const CommissionReceived = () => {
  const columns: Column[] = [
   
    {
      field: "aquirer",
      headerName: "Aquirer",
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
      field: "tradingName",
      headerName: "Trading Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "legalName",
      headerName: "Legal Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "duration",
      headerName: "Duration",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "terminalType",
      headerName: "Terminal Type",
      minWidth: 100,
      flex: 1,
      renderCell: () => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
      ),
    },
    {
      field: "rent",
      headerName: "Rent",
      minWidth: 100,
      flex: 1,
      renderCell: () => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
      ),
    },
    {
      field: "commissionReceived",
      headerName: "Commission Received",
      minWidth: 100,
      flex: 1,
      renderCell: () => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
      ),
    },
    {
      field: "monthReceived",
      headerName: "Month Received",
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      aquirer: "World Pay",
      mid: 3232,
      tid: 140,
      tradingName: "Star MAx",
      legalName: "Ray",
      duration: "12 Months",
      terminalType: 235,
      rent: 2388,
      commissionReceived: 2500,
      monthReceived: "February"
    },
    {
      id: 2,
      aquirer: "World Pay",
      mid: 3232,
      tid: 140,
      tradingName: "Star MAx",
      legalName: "Ray",
      duration: "12 Months",
      terminalType: 235,
      rent: 2388,
      commissionReceived: 2500,
      monthReceived: "February"
    },
    {
      id: 3,
      aquirer: "World Pay",
      mid: 3232,
      tid: 140,
      tradingName: "Star MAx",
      legalName: "Ray",
      duration: "12 Months",
      terminalType: 235,
      rent: 2388,
      commissionReceived: 2500,
      monthReceived: "February"
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: "2rem", width: "100%" }}>
        <Header />
        <Table1
          columns={columns}
          rows={rows}
          title="Commission Recieved Details"
          getRowId={(row: any) => row.id}
        />
      </Box>
    </>
  );
};

export default CommissionReceived;

