import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Table from "../Table";
import { Colors } from "../../utils/Colors";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
  agent_Name: string;
  MID: number | null;
  TID: number;
  Acquirer: string;
  Total_Earning: string;
  Residual: string;
  One_Time: string;
  Claw_Back: string;
  action: string;
}

export const AllCommissionComp: React.FC = () => {
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 90,
      flex: 1,
    },
    {
      field: "agent_Name",
      headerName: "agent_Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "MID",
      headerName: "MID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "TID",
      headerName: "TID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "Acquirer",
      headerName: "Acquirer",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "Total_Earning",
      headerName: "Total_Earning",
      minWidth: 150,
      flex: 1,
      renderCell: () => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
      ),
    },
    {
      field: "Residual",
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
      field: "One_Time",
      headerName: "One_Time",
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
      field: "Claw_Back",
      headerName: "Claw_Back",
      minWidth: 100,
      flex: 1,
      renderCell: () => (
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "rgba(193, 4, 4, 1)",
          }}
        >
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: any) => <More {...params} />,
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      agent_Name: "Sam",
      MID: 1,
      TID: 1,
      Acquirer: "WorldPay",
      Total_Earning: "",
      Residual: "",
      One_Time: "",
      Claw_Back: "$e",
      action: "Edit",
    },
    {
      id: 2,
      agent_Name: "Sam",
      MID: 2,
      TID: 2,
      Acquirer: "Pay",
      Total_Earning: "Enna",
      Residual: "",
      One_Time: "",
      Claw_Back: "$e",
      action: "Edit",
    },
    {
      id: 3,
      agent_Name: "Sam",
      MID: 3,
      TID: 3,
      Acquirer: "WorldPay",
      Total_Earning: "Enna",
      Residual: "",
      One_Time: "",
      Claw_Back: "$e",
      action: "Edit",
    },
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Table
        columns={columns}
        rows={rows}
        title="All Commission"
        getRowId={(row: any) => row.id}
      />
    </Box>
  );
};

const More = (params: any) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Link
        to={
          params && params.row && params.row.id
            ? `/commissionDetails/${params.row.id}`
            : ""
        }
        style={{
          textDecoration: "none",
          color: Colors.LinkColor,
          fontWeight: "400",
          fontSize: "13.13px",
        }}
      >
          View
        <Box sx={{ borderBottom: `0.4px solid ${Colors.LinkColor}` }} />
      </Link>
      <Box>
        <Typography
          sx={{
            color: Colors.LinkColor,
            fontSize: "13.13px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Notify
        </Typography>
        <Box sx={{ borderBottom: `1px solid ${Colors.LinkColor}` }} />
      </Box>
    </Box>
  );
};

export default More;
