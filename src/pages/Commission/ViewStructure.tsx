import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { Grid } from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import Table from "../../components/Table";
import CustomTextInput from "../../components/CustomInput";

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
      minWidth: 90,
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
      minWidth: 100,
      flex: 1,
    },
    {
      field: "duration",
      headerName: "Duration",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "commission",
      headerName: "Commission",
      minWidth: 50,
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

  const aquirerData: {type: string}[] = [
    { type: "Overall" },
    { type: "World Pay" },
    { type: "EVO" },
    { type: "FDMS" },
    { type: "ELAVO" },
  ];
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Commission Structure" />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12} sm={3}>
            {aquirerData.length > 0 &&
              aquirerData.map((data, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: "rgba(224, 224, 224, 1)",
                      borderRadius: "10px",
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      fontSize: "12px",
                      alignItems: "center",
                      padding: 1,
                      cursor: "pointer",
                      marginTop: "1rem"
                     
                    }}
                  >
                    {data.type}
                  </Box>
                );
              })}
          </Grid>
          <Grid item xs={12} sm={9}>
            <Table
              columns={columns}
              includeSlots={false}
              rows={rows}
              getRowId={(row: any) => row.id}
            />
          </Grid>
        </Grid>
      </CustomBox>
    </Box>
  );
};
