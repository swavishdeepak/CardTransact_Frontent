

import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import Table from "../../../components/Table";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
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
  agents: string;
  aquirer: string;
  residual: string | null;
  one_time: string;
  clawBack: number;
  totalamount: number;
}

export const SalesPerson: React.FC = () => {
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "agents",
      headerName: "Agents",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "aquirer",
      headerName: "Aquirer",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "residual",
      headerName: "Residual",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}> {params.value}</Typography>
        </Typography>
        
      ),
    },
    {
      field: "one_time",
      headerName: "One Time",
      minWidth: 50,
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}> {params.value}</Typography>
        </Typography>
        
      ),
    },
    {
      field: "clawBack",
      headerName: "ClawBack",
      minWidth: 50,
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ display: "flex", alignItems: "center", color: "#C10404" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}> {params.value}</Typography>
        </Typography>
        
      ),
    },
    {
      field: "totalamount",
      headerName: "TotalAmount",
      minWidth: 20,
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{ display: "flex", alignItems: "center"}}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}> {params.value}</Typography>
        </Typography>
        
      ),
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      agents: "WorlPay",
      aquirer: "WorlPay",
      residual: "2345",
      one_time: "2746",
      clawBack: 234,
      totalamount: 364738,
      
    },
    {
      id: 2,
      agents: "WorlPay",
      aquirer: "WorlPay",
      residual: "2345",
      one_time: "2746",
      clawBack: 2364,
      totalamount: 834282,
    },
    {
      id: 3,
      agents: "WorlPay",
      aquirer: "WorlPay",
      residual: "2345",
      one_time: "2746",
      clawBack: 234,
      totalamount: 25473,
    },
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Table
        columns={columns}
        rows={rows}
        title="Top 10 SalesPerson"
      />
    </Box>
  );
};




