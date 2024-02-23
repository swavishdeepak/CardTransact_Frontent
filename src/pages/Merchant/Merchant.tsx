import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import { Colors } from "../../utils/Colors";
import { useNavigate } from "react-router-dom";

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
  Id: number;
  merchant_Name: string | null;
  email_Address: string | null;
  contact_Number: string;
  action: string;
}

export const Merchant: React.FC = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "Id",
      headerName: "Id",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "merchant_Name",
      headerName: "Merchant Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "email_Address",
      headerName: "Email Address",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "contact_Number",
      headerName: "Contact Number",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: any) => <More {...params} />,
      minWidth: 50,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      Id: 1,
      merchant_Name: "Sam",
      email_Address: "sam@xyz.com",
      contact_Number: "+44 7300912119",
      action: "View",
    },
    {
      id: 2,
      Id: 2,
      merchant_Name: "Sam",
      email_Address: "sam@xyz.com",
      contact_Number: "+44 7300912119",
      action: "View",
    },
    {
      id: 3,
      Id: 3,
      merchant_Name: "Sam",
      email_Address: "sam@xyz.com",
      contact_Number: "+44 7300912119",
      action: "View",
    },
   
  
  ];

  

  return (
    <Box sx={{ marginTop: "2rem", width: "100%"}}>
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="All Merchants"
        getRowId={(row: any) => row.id}
       
      />
    </Box>
  );
};

const More = (params: any) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/merchantDetail")
  };


  return (
    <Box>
      <Typography onClick={handleClick} sx={{color: Colors.LinkColor, fontSize: "13.13px", fontWeight: "500", cursor: "pointer"}}>View</Typography>
      <Box sx={{borderBottom: `0.4px solid ${Colors.LinkColor}`}}/>
      
    </Box>
  );
};

export default More;
