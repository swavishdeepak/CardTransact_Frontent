


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
  date: string | null;
  mid: number | null;
  tid: number;
  totalEarning: number;
  residual: number;
  oneTime: number
 
}

export const ResidualReceived = () => {
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "aquirer",
      headerName: "Aquirer",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
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
      field: "totalEarning",
      headerName: "Total Earning",
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
      field: "residual",
      headerName: "Residual",
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
      field: "oneTime",
      headerName: "One Time",
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      aquirer: "World Pay",
      date: "12/2/2024",
      mid: 140,
      tid: 123,
      totalEarning: 346453,
      residual:3635,
      oneTime: 234
    },
    {
      id: 2,
      aquirer: "World Pay",
      date: "12/2/2024",
      mid: 140,
      tid: 123,
      totalEarning: 346453,
      residual:3635,
      oneTime: 234
    },
    {
      id: 3,
      aquirer: "World Pay",
      date: "12/2/2024",
      mid: 140,
      tid: 123,
      totalEarning: 346453,
      residual:3635,
      oneTime: 234
    },
    {
      id: 4,
      aquirer: "World Pay",
      date: "12/2/2024",
      mid: 140,
      tid: 123,
      totalEarning: 346453,
      residual:3635,
      oneTime: 234
    },
   
    
  ];

  return (
    <>
      <Box sx={{ marginTop: "2rem", width: "100%" }}>
        <Header />
        <Table1
          columns={columns}
          rows={rows}
          title="Commission Shared Details"
          getRowId={(row: any) => row.id}
        />
      </Box>
    </>
  );
};

