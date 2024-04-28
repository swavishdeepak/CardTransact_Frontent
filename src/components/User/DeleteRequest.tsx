import React, { useState } from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import CustomTextInput from "../CustomInput";
import { LoadButton } from "../LoadButton";
import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton";
import ConfirmDialog from "../ConfirmDialog";

interface DeleteRequestProps {
    setOpenDelete: React.Dispatch<boolean>;
  }

const DeleteRequest: React.FC<DeleteRequestProps> = ({setOpenDelete}) => {
  const [openRequest, setOpenRequest] = useState(false);

  const handleOpenRequest = () => {
    setOpenRequest(true);
  };
  const handleCloseRequest = () => {
    setOpenRequest(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  

  
  return (
    <>
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
         onClick={handleCloseDelete}
          hoverColor="#898989"
          style={{
            backgroundColor: "#898989",
            color: "#fff",
            borderRadius: "10px",
          }}
        />
        <CustomButton
          label="Delete"
          onClick={handleOpenRequest}
          hoverColor="#C10404"
          style={{
            backgroundColor: "#C10404",
            color: "#fff",
            borderRadius: "10px",
          }}
        />
      </Box>
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
            Send Request To Delete User
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
    </>
  );
};
export default DeleteRequest;
