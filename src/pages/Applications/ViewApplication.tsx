
import React, { useState } from "react";
import { Box,Menu, MenuItem} from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomButton from "../../components/CustomButton";


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
  app_Id: number;
  salesPerson: string;
  company_Individuals: string | null;
  acquirer: string;
  merchnatName: string;
  mid: number;
  tid: number;
  status: string;
  action: string;
}

export const ViewApplication: React.FC = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "app_Id",
      headerName: "App ID",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "salesPerson",
      headerName: "SalesPerson",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "company_Individuals",
      headerName: "Company/Individuals",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "acquirer",
      headerName: "Acquirer",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "merchnatName",
      headerName: "MerchantName",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "mid",
      headerName: "MID",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "tid",
      headerName: "TID",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
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
      app_Id: 1,
      salesPerson: "Sam",
      company_Individuals: "Individual",
      acquirer: "WorldPay",
      merchnatName: "Enna",
      mid: 1,
      tid: 1,
      status: "Approved",
      action: "Edit"


    },
    {
      id: 2,
      app_Id: 2,
      salesPerson: "Tom",
      company_Individuals: "Individual",
      acquirer: "EVO",
      merchnatName: "Paul",
      mid: 2,
      tid: 2,
      status: "Pending",
      action: "Edit"


    },
    {
      id: 3,
      app_Id: 3,
      salesPerson: "Tom",
      company_Individuals: "Individual",
      acquirer: "EVO",
      merchnatName: "Paul",
      mid: 3,
      tid: 3,
      status: "Rejected",
      action: "Edit"
    },
    {
      id: 4,
      app_Id: 4,
      salesPerson: "Tom",
      company_Individuals: "Individual",
      acquirer: "EVO",
      merchnatName: "Paul",
      mid: 4,
      tid: 4,
      status: "Rejected",
      action: "Edit"
    },
   
  
  ];

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="All Applications"
        getRowId={(row: any) => row.id}
       
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

  const handleCloseDelete = () => {
    setOpenDelete(false);
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
              ? `/appicationDetails/${params.row.id}`
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
        to={
          params && params.row && params.row.id
            ? `/viewApplications/editApplication/${params.row.id}`
            : ""
        }
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
        {/* delete popup open */}
        <ConfirmDialog
          open={openDelete}
          title={"Confirmation"}
          desc="Are you Sure want to Delete this User?"
          handleClose={() => setOpenDelete(false)}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <CustomButton
              label="cancel"
              onClick={handleCloseDelete}
              hoverColor="#898989"
              style={{
                backgroundColor: "#898989",
                color: "#fff",
                borderRadius: "10px",
              }}
            />
            <CustomButton
              label="Delete"
              
              hoverColor="#C10404"
              style={{
                backgroundColor: "#C10404",
                color: "#fff",
                borderRadius: "10px",
              }}
            />
          </Box>
        </ConfirmDialog>
      </Menu>
    
    </>
  );
};

export default More;




