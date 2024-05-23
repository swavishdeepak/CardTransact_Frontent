import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomButton from "../../components/CustomButton";
import { useGetApplications } from "./getQuery/getQuery";
import { statusObj } from "../../utils/menuItems/MenuItems";
import { statusObjColor } from "../../utils/menuItems/MenuItems";
import { restrcitEdit } from "../../utils/menuItems/MenuItems";

interface Column {
  field: string;
  headerName: string;
  minWidth: number;
  flex: number;
  sortable?: boolean;
  renderCell?: (params: any) => React.ReactNode;
  valueGetter?: (params: any) => string;
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

const ViewApplication: React.FC = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const columns: Column[] = [
    // {
    //   field: "_id",
    //   headerName: "Sr.No",
    //   minWidth: 50,
    //   flex: 1,
    // },
    // {
    //   field: "app_Id",
    //   headerName: "App ID",
    //   minWidth: 20,
    //   flex: 1,
    // },
    {
      field: "salesPerson",
      headerName: "SalesPerson",
      minWidth: 200,
      valueGetter: (params) => {
        const { salesPerson } = params.row;
        return `${salesPerson?.name || ""}`;
      },
      flex: 1,
    },
    // {
    //   field: "company_Individuals",
    //   headerName: "Company/Individuals",
    //   minWidth: 100,
    //   flex: 1,
    // },
    {
      field: "acquirer",
      headerName: "Acquirer",
      minWidth:200,
      valueGetter: (params) => {
        const { acquirer } = params.row;
        return `${acquirer?.name || ""}`;
      },
      flex: 1,
    },
    {
      field: "merchnatName",
      headerName: "Trading Name",
      valueGetter: (params) => {
        const { merchantInfo } = params.row;
        return `${merchantInfo?.tradingName || ""}`;
      },
      minWidth: 200,
      flex: 1,
    },
    // {
    //   field: "mid",
    //   headerName: "MID",
    //   minWidth: 20,
    //   flex: 1,
    // },
    // {
    //   field: "tid",
    //   headerName: "TID",
    //   minWidth: 20,
    //   flex: 1,
    // },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Typography sx={{ color: statusObjColor[params.row.status] }}>
          {statusObj[params.row.status]}
        </Typography>
      ),
      minWidth: 200,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: any) => <More {...params} navToEdit={navToEdit} />,
      minWidth: 50,
      flex: 1,
    },
  ];

  const navigate = useNavigate();
  const { data, isLoading } = useGetApplications();
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  // const navToDetail = (item: any) => {
  //   // navigate("/appicationDetails/1")
  //   navigate(`/appicationDetails/${item?._id}`, { state: item });
  // };
  const navToEdit = (item: any) => {
    // navigate("/appicationDetails/1")
    navigate(`/addApplication`, { state: item });
  };
  
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Table
        columns={columns}
        rows={data}
        title="All Applications"
        getRowId={(row: any) => row._id}
      />

      {/* <div
        style={{ display: "flex", gap: 10, marginBottom: 10 }}
      >
        <p style={{ width: 30 }}>SN.</p>
        <p style={{ width: 100 }}>salesPerson</p>
        <p style={{ width: 100 }}>Acquirer</p>
        <p style={{ width: 100 }}>Trading name</p>
        <p style={{ width: 100 }}>Status</p>
        <button>Edit</button>
        <button>View</button>
        <button>delete</button>
      </div>
      {data?.map((el, i) => {
        return <div
          style={{ display: "flex", gap: 10, marginBottom: 10 }}
          key={el?._id}
        >
          <p style={{ width: 30 }}>{++i}.</p>
          <p style={{ width: 100 }}>{el?.salesPerson?.name ?? '--'}</p>
          <p style={{ width: 100 }}>{el?.acquirer?.name ?? '--'}</p>
          <p style={{ width: 100 }}>{el?.merchantInfo?.tradingName ?? '--'}</p>
          <p style={{ width: 100 }}>{el?.status ?? '--'}</p>
          <button onClick={() => navToEdit(el)}>Edit</button>
          <button onClick={() => navToDetail(el)}>View</button>
          <button>delete</button>
        </div>
      })} */}
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
            params && params.row && params.row._id
              ? `/appicationDetails/${params.row._id}`
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
        {!restrcitEdit.includes(params.row.status) && (
          <div
            // to={
            //   params && params.row && params.row._id
            //     ? `/viewApplications/editApplication/${params.row._id}`
            //     : ""
            // }
            onClick={() => {
              params.navToEdit(params.row);
            }}
            style={{
              textDecoration: "none",
              color: "#000000",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >
            <MenuItem>Edit</MenuItem>
          </div>
        )}
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

export default ViewApplication;
