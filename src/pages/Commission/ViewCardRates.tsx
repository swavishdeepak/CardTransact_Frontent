import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { Grid } from "@mui/material";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import Table from "../../components/Table";
import BasicSelect from "../../components/BasicSelect";
import CustomTextInput from "../../components/CustomInput";
import { LoadButton } from "../../components/LoadButton";
import Table1 from "../../components/Table1";

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

export const ViewCardRates = () => {
  const [selectedValue, setSelectedValue] = useState("aquirer");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const aquirer = [
    { value: "aquirer", label: "aquirer" },
    { value: "aquirer1", label: "aquirer1" },
    { value: "aquirer2", label: "aquirer2" },
  ];
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
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <CurrencyPoundIcon sx={{ width: "13px", height: "13px" }} />
          <Typography sx={{ fontSize: "13px" }}>235.45</Typography>
        </Typography>
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

  const aquirerData: { type: string }[] = [
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
        <CommonHeader header="Card Rates" />
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
                      marginTop: "1rem",
                    }}
                  >
                    {data.type}
                  </Box>
                );
              })}
          </Grid>
          <Grid item xs={12} sm={9}>
            <Table1
              columns={columns}
              includeSlots={false}
              rows={rows}
              getRowId={(row: any) => row.id}
            />
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                  width: "50%",
                  gap: 1,
                  justifyItems: "right",
                  marginBottom: "2rem",
                  justifyContent: "end",
                }}
              >
                <BasicSelect
                  sx={{
                    borderRadius: 1,
                    backgroundColor: "#FCFAFA",
                    border: "1px solid #898989",
                    height: "2rem",
                    padding: 2,
                    width: "100%",
                    fontSize: 12,
                  }}
                  placeholder="Select Aquirer"
                  name={"selectedValue"}
                  value={selectedValue}
                  handleChange={handleChange}
                  size="small"
                  items={aquirer}
                />
                <CustomTextInput/>
                
                <LoadButton
                  style={{
                    height: "2rem",
                    fontSize: "12px",
                  }}
                >
                  Apply
                </LoadButton>
              </Box> */}
            {/* </Table1> */}
          </Grid>
        </Grid>
      </CustomBox>
    </Box>
  );
};
