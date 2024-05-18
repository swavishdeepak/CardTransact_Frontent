import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "../../components/User/UserDetails";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import ConfirmUpdate from "../../components/User/ConfirmUpdate";
import { confirmUpdate } from "./apiFunc/userApiFunc";
import { useAgentQuery } from "./getQuery/useAgentQuery";

const AgentDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [openDelete, setOpenDelete] = useState(false);
  const { data } = useAgentQuery(id);
  let updatingData = JSON.parse(data?.updatingData || "{}");

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handelEdit = () => {
    navigate(`/addAgent?id=${id}`);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      {Object.keys(updatingData)?.length > 0 && (
        <CustomBox>
          <CommonHeader header={"Updating Details"}>
            <ConfirmUpdate id={id} />
          </CommonHeader>

          <UserDetails user={updatingData} />
        </CustomBox>
      )}
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
        <UserDetails user={data} />

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