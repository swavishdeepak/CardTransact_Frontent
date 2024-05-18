import React, { useEffect, useState } from "react";
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
import DeleteRequest from "../../components/User/DeleteRequest";
import Apis from "../../utils/apis";
import { API_AXIOS } from "../../http/interceptor";
import { salesType } from "../../utils/menuItems/MenuItems";
import TableServer from "../../components/TableServer";

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
  agentName: string;
  id_no: number | null;
  company_Individuals: string | null;
  banks: string;
  action: string;
}

//const rows: Row[] = [
//   {
//     id: 1,
//     agentName: "Snow",
//     company_Individuals: "Individual",
//     id_no: 147,
//     banks: "HSBS",
//     action: "Edit",
//   },
//   {
//     id: 2,
//     agentName: "Lannister",
//     company_Individuals: "Individual",
//     id_no: 312,
//     banks: "Monzo",
//     action: "Edit",
//   },
//   {
//     id: 3,
//     agentName: "Lannister",
//     company_Individuals: "Individual",
//     id_no: 311,
//     banks: "Monzo",
//     action: "Edit",
//   },
// ];

const ViewAgents: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [rowCountState, setRowCountState] = useState(0);

  const getAgents = async () => {
    setLoading(true);
    try {
      const { data } = await API_AXIOS.get(Apis.agent, {
        params: {
          page: paginationModel?.page + 1,
        },
      });
      setData(data?.data);
      setRowCountState((prev) => data?.pagination?.totalItem ?? prev);
    } catch (err) {
      console.log("agent", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAgents();
  }, [paginationModel?.page]);

  const columns: Column[] = [
    // {
    //   field: "_id",
    //   headerName: "Sr.No",
    //   minWidth: 25,
    //   flex: 1,
    // },
    {
      field: "name",
      headerName: "Agent Name",
      minWidth: 200,
      flex: 1,
    },

    {
      field: "salesType",
      headerName: "Company/Individuals",
      valueGetter: (params) => salesType[params.row.salesType],
      minWidth: 200,
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Mobile",
      valueGetter: (params) => {
        const { countryCode, phoneNumber } = params.row;
        return `${countryCode || ""} ${phoneNumber || ""}`;
      },
      minWidth: 200,
      flex: 1,
    },
    {
      field: "manager",
      headerName: "Manager",
      minWidth: 150,
      flex: 1,
    },
    // {
    //   field: "banks",
    //   headerName: "Banks",
    //   minWidth: 200,
    //   flex: 1,
    // },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: any) => <More {...params} />,
      minWidth: 50,
      flex: 1,
    },
  ];

  console.log(data);
  return (
    <Box
      sx={{
        marginTop: "2rem",
        width: "100%",
      }}
    >
      <Header />
      <TableServer
        columns={columns}
        rows={data || []}
        title="All Agents"
        getRowId={(row: any) => row._id}
        rowCountState={rowCountState}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        loading={loading}
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
          to={`/viewAgents/viewDetails/${params.row._id}`}
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
          to={`/addAgent?type=agent&id=${params.row && params.row._id}`}
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
          <DeleteRequest setOpenDelete={setOpenDelete} />
        </ConfirmDialog>
      </Menu>
    </>
  );
};

export default ViewAgents;
