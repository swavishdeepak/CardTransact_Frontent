import React, { useEffect, useState } from "react";
import { Box, Menu, MenuItem} from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
// import ConfirmDialog from "../../components/ConfirmDialog";
// import CustomButton from "../../components/CustomButton";
// import { CustomBox } from "../../components/MyCustom/CustomBox";
// import { LoadButton } from "../../components/LoadButton";
// import CustomTextInput from "../../components/CustomInput";
// import DeleteRequest from "../../components/User/DeleteRequest";
// import { useAppSelector } from "../../redux/hooks";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
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



const ViewEmployees: React.FC = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const [rowCountState, setRowCountState] = useState(0);

  

  const columns: Column[] = [
    // {
    //   field: "id",
    //   headerName: "",
    //   minWidth: 50,
    //   flex: 1,
    // },
    {
      field: "name",
      headerName: "User Name",
      minWidth: 150,
      flex: 1,
    },
    // {
    //   field: "id_no",
    //   headerName: "ID No",
    //   minWidth: 100,
    //   flex: 1,
    // },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "bankName",
      headerName: "Banks",
      valueGetter: (params) => {
        const { bankInfo } = params.row;
        return `${bankInfo?.bankName || ""}`;
      },
      
      minWidth: 200,
      flex: 1,
    },
    {
      field: "addedBy",
      headerName: "Added By",
      minWidth: 200,
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

  const getEmployees = async () => {
    setLoading(true);
    try {
      const { data } = await API_AXIOS.get(`${Apis.getEmployee}`, {
        params: {
          page: paginationModel?.page + 1,
        },
      });
      setRows(data?.data);
      setRowCountState((prev) => data?.pagination?.totalItem ?? prev);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getEmployees();
  }, [paginationModel?.page]);

  

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <TableServer
        columns={columns}
        rows={rows || []}
        title="All Employees"
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

  // const [openDelete, setOpenDelete] = useState(false);
  // const [openDeleteReq, setOpenDeleteReq] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleDeleteOpen = () => {
  //   setOpenDelete(true);
  // };

  
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
              ? `/viewEmployee/viewDetails/${params.row._id}`
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
          to={`/addEmployee?type=employees&id=${params.row && params.row._id}`}
          style={{
            textDecoration: "none",
            color: "#000000",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          <MenuItem>Edit</MenuItem>
        </Link>
        {/* <MenuItem onClick={handleDeleteOpen}>Delete</MenuItem>
      
        <ConfirmDialog
          open={openDelete}
          title={"Confirmation"}
          desc="Are you Sure want to Delete this User?"
          handleClose={() => setOpenDelete(false)}
        >
          <DeleteRequest setOpenDelete={setOpenDelete} />
        </ConfirmDialog> */}
      </Menu>
    </>
  );
};

export default ViewEmployees;
