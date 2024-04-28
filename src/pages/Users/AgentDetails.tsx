import React, { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { CommonHeader } from "../../components/CommonHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";
import { Colors } from "../../utils/Colors";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useNavigate } from "react-router-dom";
import UserDetails from "../../components/User/UserDetails";

 const AgentDetails = () => {
  const  navigate = useNavigate()
  const [openDelete, setOpenDelete] = useState(false);

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handelEdit = ()=>{
      navigate("user/addAgents")
  }

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header={"AGENT DETAILS"}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              onClick={handleDeleteOpen}
              label={"Delete"}
              hoverColor={`${Colors.LinkColor}`}
              style={{
                backgroundColor: `${Colors.LinkColor}`,
                color: "#fff",
              }}
            />
            <CustomButton
              label={"Edit"}
              style={{
                backgroundColor: "#fff",
                color: `${Colors.LinkColor}`,
                border: `1px solid ${Colors.LinkColor}`,
              }}
              onClick={handelEdit}
            />
          </Box>
        </CommonHeader>
         <UserDetails/>

        <Grid></Grid>
      </CustomBox>
      <ConfirmDialog
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        title={"Conformation"}
        desc="Are You Sure want You Want to Delete This User"
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <CustomButton
            label="Cancel"
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
            onClick={handleDeleteClose}
            hoverColor="#C10404"
            style={{
              backgroundColor: "#C10404",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
        </Box>
      </ConfirmDialog>
    </Box>
  );
};

export default AgentDetails;
