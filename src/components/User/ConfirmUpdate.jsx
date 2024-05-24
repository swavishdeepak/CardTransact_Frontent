import React, { useState } from "react";
import { confirmUpdate } from "../../pages/Users/apiFunc/userApiFunc";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import { Colors } from "../../utils/Colors";
import ConfirmDialog from "../ConfirmDialog";
import { Box } from "@mui/material";
import { LoadButton } from "../LoadButton";
import { useAgentQuery } from "../../pages/Users/getQuery/useAgentQuery";
import { toast } from "react-toastify";

const ConfirmUpdate = ({ id }) => {
  const [open, setOpen] = useState(false);
  const {  refetch } = useAgentQuery(id);
  const [confirmLoad, setConfirmLoad] = useState(false);
  const [rejectLoad, setRejectLoad] = useState(false);
  // const navigate = useNavigate();
  const handleConfirmUpdate = async (status) => {
    status === "approved" ? setConfirmLoad(true) : setRejectLoad(true);
    try {
      const { data } = await confirmUpdate({ status, id });
      refetch();
      handleToggleOpen();
      toast.success(data?.message);
      // navigate("/viewAgents");
    } catch (err) {
      console.log(err);
      toast.success(err?.response?.data?.message);
    }
    setConfirmLoad(false);
    setRejectLoad(false);
  };

  const handleToggleOpen = () => {
    setOpen((state) => !state);
  };
  return (
    <>
      <CustomButton
        onClick={handleToggleOpen}
        label={"Update"}
        hoverColor={`${Colors.LinkColor}`}
        style={{
          backgroundColor: `${Colors.LinkColor}`,
          color: "#fff",
        }}
      />
      <ConfirmDialog
        open={open}
        handleClose={handleToggleOpen}
        title={"Conformation"}
        desc="Are You Sure you want to Update Employee"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <LoadButton
            hoverColor="#048519"
            style={{ background: "#048519" }}
            loading={confirmLoad}
            onClick={() => handleConfirmUpdate("approved")}
          >
            Approved
          </LoadButton>
          <LoadButton
            hoverColor="#C10404"
            style={{ background: "#C10404" }}
            onClick={() => handleConfirmUpdate("rejected")}
            loading={rejectLoad}
          >
            Reject
          </LoadButton>
        </Box>
      </ConfirmDialog>
    </>
  );
};

export default ConfirmUpdate;
