import React from "react";
import { Box, Typography } from "@mui/material";
import Table1 from "../../components/TableWithDatePic";
import { Header } from "../../components/Dashboard/Header";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { Link } from "react-router-dom";
import { Colors } from "../../utils/Colors";

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
  agentName: string;
  mid: number | null;
  tid: number;
  acquirer: string;
  totalEarning: number;
  residual: number;
  oneTime: number;
  action: string;
}

 const ResidualShared = () => {
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "agentName",
      headerName: "Agent Name",
      minWidth: 50,
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
      field: "acquirer",
      headerName: "Acquirer",
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
      renderCell: () => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
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
      agentName: "Sam",
      mid: 140,
      tid: 123,
      acquirer: "WoldPay",
      totalEarning: 346453,
      residual: 3635,
      oneTime: 234,
      action: "Action",
    },
    {
      id: 2,
      agentName: "Sam",
      mid: 140,
      tid: 123,
      acquirer: "WoldPay",
      totalEarning: 346453,
      residual: 3635,
      oneTime: 234,
      action: "Action",
    },
    {
      id: 3,
      agentName: "Sam",
      mid: 140,
      tid: 123,
      acquirer: "WoldPay",
      totalEarning: 346453,
      residual: 3635,
      oneTime: 234,
      action: "Action",
    },
    {
      id: 4,
      agentName: "Sam",
      mid: 140,
      tid: 123,
      acquirer: "WoldPay",
      totalEarning: 346453,
      residual: 3635,
      oneTime: 234,
      action: "Action",
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

const More = (params: any) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Link
        to={""}
        // to={
        //   params && params.row && params.row.id
        //     ? `/commissionDetails/${params.row.id}`
        //     : ""
        // }
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

export default ResidualShared;
