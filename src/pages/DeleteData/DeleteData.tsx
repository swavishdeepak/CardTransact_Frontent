import React from "react";
import { Box} from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
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
  delete_by: string;
  Id: number | null;
  date_deleted: string;
  data_type: string;
  action: string;
}

const DeleteData: React.FC = () => {
  const columns: Column[] = [
    {
      field: "delete_by",
      headerName: "Deleted By",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "Id",
      headerName: "Id",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "date_deleted",
      headerName: "Date Deleted",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "data_type",
      headerName: "Data Type",
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
      delete_by: "Admin01",
      Id: 1,
      date_deleted: "12/2/2024",
      data_type: "application",
      action: "Edit",
    },
    {
      id: 2,
      delete_by: "Admin02",
      Id: 2,
      date_deleted: "12/2/2024",
      data_type: "application",
      action: "Edit",
    },
    {
      id: 3,
      delete_by: "Admin03",
      Id: 3,
      date_deleted: "12/2/2024",
      data_type: "application",
      action: "Edit",
    },
    {
      id: 4,
      delete_by: "Admin05",
      Id: 4,
      date_deleted: "12/2/2024",
      data_type: "application",
      action: "Edit",
    },
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="All Delete Data"
        getRowId={(row: any) => row.id}
       
      />
    </Box>
  );
};

const More = (params: any) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Link
        to="/deleteDataDetails"
        style={{
          color: Colors.LinkColor,
          fontSize: "13.13px",
          fontWeight: "500",
        }}
      >
        View
      </Link>
      <Link
        to=""
        style={{
          color: Colors.LinkColor,
          fontSize: "13.13px",
          fontWeight: "500",
        }}
      >
        Restore
      </Link>
    
    </Box>
  );
};

export default DeleteData;
