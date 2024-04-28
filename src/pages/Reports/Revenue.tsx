import React from "react";
import { Box } from "@mui/material";
import Table1 from "../../components/TableWithDatePic";
import { Header } from "../../components/Dashboard/Header";

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
  model: string | null;
  target: number | null;
  achieved: number;
 
}

 const Revenue = () => {
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "aquirer",
      headerName: "Aquirer",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "target",
      headerName: "Target",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "achieved",
      headerName: "Achieved",
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      aquirer: "World Pay",
      model: "A01",
      target: 140,
      achieved: 123,
     
    },
    {
      id: 2,
      aquirer: "World Pay",
      model: "A01",
      target: 140,
      achieved: 123,
     
    },
    {
      id: 3,
      aquirer: "World Pay",
      model: "A01",
      target: 140,
      achieved: 123,
     
    },
    {
      id: 4,
      aquirer: "World Pay",
      model: "A01",
      target: 140,
      achieved: 123,
     
    },
    {
      id: 5,
      aquirer: "World Pay",
      model: "A01",
      target: 140,
      achieved: 123,
     
    },
    
  ];

  return (
    <>
      <Box sx={{ marginTop: "2rem", width: "100%" }}>
        <Header />
        <Table1
          columns={columns}
          rows={rows}
          title="Sales Details"
          getRowId={(row: any) => row.id}
        />
      </Box>
    </>
  );
};

export default Revenue;


