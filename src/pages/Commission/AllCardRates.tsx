import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import BasicSelect from "../../components/BasicSelect";
import CustomTextInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import { LoadButton } from "../../components/LoadButton";
// import DatePickerPicker from "../../components/MyCustom/DatePickerInput";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  aquirer: string;
  file_Name: string;
  last_Update: string;
  added_By: string;
  action: string;
}

 const AllCardRates = () => {
  const navigate = useNavigate()
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
      field: "aquirer",
      headerName: "Aquirer",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "file_Name",
      headerName: "File Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "last_Update",
      headerName: "Last Update",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "added_By",
      headerName: "Added by",
      minWidth: 50,
      flex: 1,
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
      aquirer: "Worl Pay",
      file_Name: "File 01",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 2,
      aquirer: "Worl Pay",
      file_Name: "File 02",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 3,
      aquirer: "Worl Pay",
      file_Name: "File 03",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 4,
      aquirer: "Worl Pay",
      file_Name: "File 04",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
  ];

  const handleRedirect = ()=>{
    navigate("/allCardRates/AddCardRateStructure")
  }



  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header>
      <LoadButton style={{height: "80%"}} onClick={handleRedirect}>Add Structure</LoadButton>
      </Header>
      <TableWithDatePic
          columns={columns}
          rows={rows}
          title="All Card Rates Structure"
          getRowId={(row: any) => row.id}
        />
    </Box>
  );
};

const More = (params: any) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Link
        to="/viewCardRates"
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
          Delete
        </Typography>
        <Box sx={{ borderBottom: `1px solid ${Colors.LinkColor}` }} />
      </Box>
    </Box>
  );
};

export default AllCardRates;
