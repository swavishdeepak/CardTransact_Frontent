import React, { useState } from "react";
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

 const ViewCardRates = () => {
  const [selectedValue, setSelectedValue] = useState("aquirer");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

 
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

  

 
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Card Rates" />
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 4, md: 4 }}
          mt={1}
        >
          <ViewCommission/>
          <Grid item xs={12} sm={8}>
            <TableWithDatePic
              columns={columns}
              rows={rows}
              hideSearch={false}
              hideSelect={false}
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

export default ViewCardRates;
