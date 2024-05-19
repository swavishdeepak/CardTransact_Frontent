import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ConfirmDialog from "../ConfirmDialog";
import { toast } from "react-toastify";
import { employeeAppRejById } from "../../pages/Users/apiFunc/userApiFunc";

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
    <div>
      <Button
        onClick={() => handleOpen("approved")}
        color="success"
        variant="contained"
        size="small"
      >
        Approve
      </Button>
      <Button
        onClick={() => handleOpen("rejected")}
        color="error"
        variant="contained"
        size="small"
        sx={{ ml: 1 }}
      >
        Reject
      </Button>
      <ConfirmDialog handleClose={handleClose} open={open}>
        <div>
          <h3>Are You sure you want to {option[status]}</h3>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={handleSubmit}
            color="success"
            variant="contained"
            size="small"
            disabled={loading}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            color="error"
            variant="contained"
            size="small"
          >
            No
          </Button>
        </Box>
      </ConfirmDialog>
    </div>
  );
};

export default ApprvRejtEmp;
