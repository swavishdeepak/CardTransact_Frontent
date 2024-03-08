import React, { useState } from "react";
import { Box, Typography} from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import { Colors } from "../../utils/Colors";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomButton from "../../components/CustomButton";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomTextInput from "../../components/CustomInput";
import { LoadButton } from "../../components/LoadButton";




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
  title: string;
  message: string | null;
  date: string;
  time: string;
  action: string;
}

export const ReceivedNotification: React.FC = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "message",
      headerName: "Message",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
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
      title: "Delete Request User",
      message: "Lorem Ipsum is simply dummy text of the printing and ",
      date: "12/12/2023",
      time: "12:00 pm",
      action: "View",
    },
    {
      id: 2,
      title: "Add Application",
      message: "Lorem Ipsum is simply dummy text of the printing and ",
      date: "12/12/2023",
      time: "12:00 pm",
      action: "View",
    },
    {
      id: 3,
      title: "Delete Merchant",
      message: "Lorem Ipsum is simply dummy text of the printing and ",
      date: "12/12/2023",
      time: "12:00 pm",
      action: "",
    },
    {
      id: 3,
      title: "Edit Agent",
      message: "Lorem Ipsum is simply dummy text of the printing and ",
      date: "12/12/2023",
      time: "12:00 pm",
      action: "",
    },
   
  ];

  
  return (
    <Box sx={{ marginTop: "2rem", width: "100%"}} >
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="Recieved Notifications"
        getRowId={(row: any) => row.id}
       
      />
    </Box>
  );
};

const More = (params: any) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };
  const handleCloseRequest = () => {
    setOpenRequest(false);
  };

  const handleDeleteClose = ()=>{
    setDeleteOpen(false)
  }
  const handleDelete = () => {
    setOpenRequest(true);
  };
 
  return (
    <Box sx={{display: "flex", gap: 1}}>
      <Link to="/notificationList/ViewDetails" style={{color: Colors.LinkColor, fontSize: "13.13px", fontWeight: "500"}}>View</Link>
      <Link to="" onClick={handleDeleteOpen} style={{color: Colors.LinkColor, fontSize: "13.13px", fontWeight: "500"}}>Delete</Link>
      <ConfirmDialog
        title={"Confirmation"}
        desc="Are You Sure Want "
        open={deleteOpen}
      >
        <Box sx={{ display: "flex", gap:"3px" }}>
          <Typography>To</Typography>
          <Typography  sx={{ color: "#202020", fontSize: "15px", fontWeight: "600" }}>Delete Received Notifications?</Typography>
        </Box>
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
              onClick={handleDeleteClose}
              hoverColor="#898989"
              style={{
                backgroundColor: "#898989",
                color: "#fff",
                borderRadius: "10px",
              }}
            />
            <CustomButton
              label="Delete"
             onClick={handleDelete}
              hoverColor="#C10404"
              style={{
                backgroundColor: "#C10404",
                color: "#fff",
                borderRadius: "10px",
              }}
            />
          </Box>
        
      </ConfirmDialog>
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
            Send Request To Delete Recieved Notification
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
            width: "40%",
          }}
        >
          Submit
        </LoadButton>
      </ConfirmDialog>
    </Box>
  );
};

export default More;
