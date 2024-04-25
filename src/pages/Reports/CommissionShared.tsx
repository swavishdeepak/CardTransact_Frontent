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
  sellerName: string | null;
  manager: string | null;
  mid: number;
  tid: number;
  tradingName: string;
  legalName: string;
  amountPaid: number;
  paidDate: string;
}

export const CommissionShared = () => {
  const columns: Column[] = [
    {
      field: "aquirer",
      headerName: "Aquirer",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "sellerName",
      headerName: "Seller Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "manager",
      headerName: "Manager",
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
      headerName: "Leagal Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "amountPaid",
      headerName: "Amount Paid",
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
      field: "paidDate",
      headerName: "Paid Date",
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      aquirer: "122",
      sellerName: "agent01",
      manager: "Shyamal",
      mid: 123,
      tid: 364,
      tradingName: "Star Max",
      legalName: "Ray",
      amountPaid: 5600,
      paidDate: "12/3/204",
    },
    {
      id: 2,
      aquirer: "122",
      sellerName: "agent01",
      manager: "Shyamal",
      mid: 123,
      tid: 364,
      tradingName: "Star Max",
      legalName: "Ray",
      amountPaid: 5600,
      paidDate: "12/3/204",
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
