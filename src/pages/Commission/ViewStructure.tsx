import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { Grid } from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { ViewCommission } from "../../components/Commission/ViewCommission";
import TableWithDatePic from "../../components/TableWithDatePic";

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
  date: string;
  rental: string;
  model: string;
  duration: string;
  commission: string;
}

export const ViewStructure = () => {
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
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
      field: "rental",
      headerName: "Rental",
      minWidth: 100,
      flex: 1,
      renderCell: () => (
        <>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
        </>
      ),
    },
    {
      field: "model",
      headerName: "Model",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "duration",
      headerName: "Duration",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "commission",
      headerName: "Commission",
      minWidth: 100,
      flex: 1,
      renderCell: () => (
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
      ),
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      date: "12/2/2024",
      rental: "",
      model: "A",
      duration: "Admin01",
      commission: "",
    },
    {
      id: 2,
      date: "12/2/2024",
      rental: "",
      model: "A",
      duration: "Admin01",
      commission: "",
    },
    {
      id: 3,
      date: "12/2/2024",
      rental: "",
      model: "B",
      duration: "Admin01",
      commission: "",
    },
  ];

  
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Commission Structure" />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 4, md: 4 }}
          mt={3}
        >
          <ViewCommission/>
          <Grid item xs={12} sm={8}>
            <TableWithDatePic
              columns={columns}
              hideSelect={false}
              hideSearch={false}
              rows={rows}
              getRowId={(row: any) => row.id}
            />
          </Grid>
        </Grid>
      </CustomBox>
    </Box>
  );
};
