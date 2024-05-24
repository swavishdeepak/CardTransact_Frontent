import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ConfirmDialog from "../ConfirmDialog";
import { toast } from "react-toastify";
import { employeeAppRejById } from "../../pages/Users/apiFunc/userApiFunc";
import { LoadButton } from "../LoadButton";

const option = {
  approved: "Approve",
  rejected: "Reject",
};

const ApprvRejtEmp = ({ id, refetch }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpen = (status) => {
    setStatus(status);
    setOpen(true);
  };

  const handleClose = () => {
    setStatus("");
    setOpen(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await employeeAppRejById({ id, status });
      refetch();
      toast.success(data?.message);
      handleClose();
    } catch (err) {
      toast.error(err.response.data?.message);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Box>
      <Box sx={{display: "flex",  gap: 2 }}>
        <LoadButton
          hoverColor="#048519"
          style={{
            background: "#048519",
            
          }}
          onClick={() => handleOpen("approved")}
        >
          Approve
        </LoadButton>
        <LoadButton
          hoverColor="#C10404"
          style={{
            background: "#C10404",
            
          }}
          onClick={() => handleOpen("rejected")}
        >
          Reject
        </LoadButton>
      </Box>
      <ConfirmDialog
        handleClose={handleClose}
        open={open}
        title={`Are You sure you want to ${status ? option[status] : ""}`}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LoadButton
            hoverColor="#048519"
            style={{
              background: "#048519",
              width: "25%",
            }}
            onClick={handleSubmit}
            loading={loading}
          >
            Yes
          </LoadButton>
          <LoadButton
            hoverColor="#C10404"
            style={{
              background: "#C10404",
              width: "25%",
            }}
            onClick={handleClose}
          >
            No
          </LoadButton>
        </Box>
      </ConfirmDialog>
    </Box>
  );
};

export default ApprvRejtEmp;
