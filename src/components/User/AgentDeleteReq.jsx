import React, { useState } from "react";
import CustomTextInput from "../CustomInput";
import { Box, Button } from "@mui/material";
import LoadingButton from "../LoadingButton";
import { toast } from "react-toastify";
import { deleteAgentRequestById } from "../../pages/Users/apiFunc/userApiFunc";

const AgentDeleteReq = ({ handleClose, id, refetch }) => {
  const [deleteRequestRemark, setDeleteRequestRemark] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await deleteAgentRequestById({
        id,
        deleteRequestRemark,
      });
      toast.success(data.message);
      refetch();
      handleClose();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Box sx={{ my: 1 }}>
        <CustomTextInput
          label="Remarks"
          rows={4}
          placeholder="Tyle Here..."
          multiline={true}
          value={deleteRequestRemark}
          onChange={(e) => setDeleteRequestRemark(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LoadingButton onClick={handleSubmit} loading={loading}>Submit</LoadingButton>
        <LoadingButton onClick={handleClose} color={"error"}>
          cancel
        </LoadingButton>
      </Box>
    </>
  );
};

export default AgentDeleteReq;
