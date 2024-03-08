import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomButton from "../../components/CustomButton";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { LoadButton } from "../../components/LoadButton";
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
  agentName: string;
  id_no: number | null;
  company_Individuals: string | null;
  banks: string;
  action: string;
}

export const ViewAgents: React.FC = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "agentName",
      headerName: "agent Name",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "id_no",
      headerName: "ID No",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "company_Individuals",
      headerName: "Company/Individuals",
      minWidth: 50,
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
      agentName: "Snow",
      company_Individuals: "Individual",
      id_no: 147,
      banks: "HSBS",
      action: "Edit",
    },
    {
      id: 2,
      agentName: "Lannister",
      company_Individuals: "Individual",
      id_no: 312,
      banks: "Monzo",
      action: "Edit",
    },
    {
      id: 3,
      agentName: "Lannister",
      company_Individuals: "Individual",
      id_no: 311,
      banks: "Monzo",
      action: "Edit",
    },
  ];

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  return (
    <Box
      sx={{
        marginTop: "2rem",
        width: "100%",
      }}
    >
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="All Agents"
        getRowId={(row: any) => row.id}
      />
    </Box>
  );
};

const More = (params: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDelete, setOpenDelete] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);

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

  const handleOpenRequest = () => {
    setOpenRequest(true);
  };
  const handleCloseRequest = () => {
    setOpenRequest(false);
  };

  const handleDelete = () => {
    setOpenRequest(true);
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
              ? `/agentDetails/${params.row.id}`
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
          to={`/addAgents?type=agent&id=${params.row && params.row.id}`}
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
          handleConfirm={handleDelete}
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
              onClick={handleOpenRequest}
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
      {/* send to request popup */}
      <ConfirmDialog
        open={openRequest}
        handleClose={() => setOpenRequest(false)}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ color: "#202020", fontSize: "15px", fontWeight: "600" }}
          >
            Send Request To Delete User
          </Typography>
          <CustomButton
            label="Cancel"
            onClick={handleCloseRequest}
            hoverColor="#C10404"
            style={{
              backgroundColor: "#C10404",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
        </Box>
        <CustomBox style={{ marginTop: "2rem", border: "1px solid #77D177" }}>
          <CustomTextInput
            label="Remarks"
            rows={4}
            placeholder="Tyle Here..."
            multiline={true}
          />
        </CustomBox>
        <LoadButton
          style={{
            marginTop: "2rem",
            width: "60%",
          }}
        >
          Submit
        </LoadButton>
      </ConfirmDialog>
    </>
  );
};

export default More;
