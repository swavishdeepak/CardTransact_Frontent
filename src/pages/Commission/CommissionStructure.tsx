import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomTextInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import { LoadButton } from '../../components/LoadButton';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import TableWithDatePic from "../../components/TableWithDatePic";

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
  tier: string;
  file_Name: string;
  last_Update: string;
  added_By: string;
  action: string;
}

export const CommissionStructure = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("aquirer");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const aquirer = [
    { value: "aquirer", label: "aquirer" },
    { value: "aquirer1", label: "aquirer1" },
    { value: "aquirer2", label: "aquirer2" },
  ];

  const columns: Column[] = [
   
    {
      field: "aquirer",
      headerName: "Aquirer",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "tier",
      headerName: "Tier",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "file_Name",
      headerName: "File Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "last_Update",
      headerName: "Last Update",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "added_By",
      headerName: "Added by",
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
      aquirer: "Worl Pay",
      tier: "Tier01",
      file_Name: "File 01",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 2,
      aquirer: "Worl Pay",
      tier: "Tier01",
      file_Name: "File 01",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 3,
      aquirer: "Worl Pay",
      tier: "Tier01",
      file_Name: "File 01",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 4,
      aquirer: "Worl Pay",
      tier: "Tier01",
      file_Name: "File 01",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
    {
      id: 5,
      aquirer: "Worl Pay",
      tier: "Tier01",
      file_Name: "File 01",
      last_Update: "12/02/2024",
      added_By: "Admin01",
      action: "Edit",
    },
   
    
  ];

  const handleRedirect = () => {
    navigate("/commission/addCommissionStructure");
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header>
         <LoadButton style={{height: "80%", width: "fit-content"}} onClick={handleRedirect}>Add Structure</LoadButton>
      </Header>
        <TableWithDatePic
          columns={columns}
          rows={rows}
          title="Commission Structure"
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
    <Box sx={{ display: "flex", gap: 1 }}>
      <Link
        to="/viewStructure"
        style={{
          textDecoration: "none",
          color: Colors.LinkColor,
          fontWeight: "400",
          fontSize: "13.13px",
        }}
      >
        View
        <Box sx={{ borderBottom: `0.4px solid ${Colors.LinkColor}` }} />
      </Link>
      <Box onClick={handleDeleteOpen}>
        <Typography
          sx={{
            color: Colors.LinkColor,
            fontSize: "13.13px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Delete
        </Typography>
        <Box sx={{ borderBottom: `1px solid ${Colors.LinkColor}` }} />
      </Box>
      <ConfirmDialog
        title={"Confirmation"}
        desc="Are You Sure Want "
        open={deleteOpen}
      >
        <Box sx={{ display: "flex", gap:"3px" }}>
          <Typography>To</Typography>
          <Typography  sx={{ color: "#202020", fontSize: "15px", fontWeight: "600" }}>Delete This Commission Structure</Typography>
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
            Send Request To Delete Structure
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
    </Box>
  );
};

export default More;
