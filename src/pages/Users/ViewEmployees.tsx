import React, { useState } from "react";
import { Box,Menu, MenuItem, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomButton from "../../components/CustomButton";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { LoadButton } from "../../components/LoadButton";
import CustomTextInput from "../../components/CustomInput";
import DeleteRequest from "../../components/User/DeleteRequest";

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
  userName: string;
  id_no: number | null;
  email: string | null;
  banks: string;
  action: string;
}

 const ViewEmployees: React.FC = () => {
 
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "userName",
      headerName: "User Name",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "id_no",
      headerName: "ID No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "banks",
      headerName: "Banks",
      minWidth: 50,
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
      userName: "Snow",
      email: "XXXXX12@gmail.com",
      id_no: 14,
      banks: "HSBS",
      action: "Edit",
    },
    {
      id: 2,
      userName: "Lannister",
      email: "XXXXX12@gmail.com",
      id_no: 31,
      banks: "Monzo",
      action: "Edit",
    },
    {
      id: 3,
      userName: "Lannister",
      email: "XXXXX12@gmail.com",
      id_no: 31,
      banks: "Monzo",
      action: "Edit",
    },
    {
      id: 4,
      userName: "Lannister",
      email: "XXXXX12@gmail.com",
      id_no: 31,
      banks: "Monzo",
      action: "Edit",
    },
    {
      id: 5,
      userName: "Lannister",
      email: "XXXXX12@gmail.com",
      id_no: 31,
      banks: "Monzo",
      action: "Edit",
    },
  ];

  

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="All Employees"
        getRowId={(row: any) => row.id}
        // customButtons={
        //   <CustomButton label="delete" onClick={handleOpenDelete} />
        // }
      />
    </Box>
  );
};

const More = (params: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDelete, setOpenDelete] = useState(false);
  

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };


  return (
    <>
      <MoreVert sx={{ cursor: "pointer" }} onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          to={
            params && params.row && params.row.id
              ? `/viewEmployee/viewDetails/${params.row.id}`
              : ""
          }
          style={{
            textDecoration: "none",
            color: "#000000",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          <MenuItem>View Details</MenuItem>
        </Link>
        <Link
          to={`/addEmployee?type=employees&id=${params.row && params.row.id}`}
          style={{
            textDecoration: "none",
            color: "#000000",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          <MenuItem>Edit</MenuItem>
        </Link>
        <MenuItem onClick={handleDeleteOpen}>Delete</MenuItem>
        {/* delete Request */}
        <ConfirmDialog
          open={openDelete}
          title={"Confirmation"}
          desc="Are you Sure want to Delete this User?"
          handleClose={() => setOpenDelete(false)}
        >
          <DeleteRequest  setOpenDelete={setOpenDelete} />
        </ConfirmDialog>
      </Menu>
      
    </>
  );
};

export default ViewEmployees
