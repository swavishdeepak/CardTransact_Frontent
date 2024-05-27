import { Box, Typography } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import React from 'react'
import CustomTextInput from '../../CustomInput';
import { LoadButton } from '../../LoadButton';

const ChangePassword = ({toggleModal}) => {
  return (
    <Box>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        sx={{
          color: "rgba(0, 0, 0, 1)",
          fontSize: "25px",
          fontWeight: "700",
          fontFamily: "serif",
        }}
      >
        Change Password
      </Typography>
      <CloseIcon
        onClick={() => toggleModal("changePass")}
        sx={{ cursor: "pointer" }}
      />
    </Box>
    <Typography
      sx={{
        color: "rgba(0, 0, 0, 1)",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "1rem",
        fontFamily: "enter",
      }}
    >
      Kindly confirm Your Registered Email Address to Received An{" "}
      <br></br>OTP For Verification
    </Typography>
    <CustomTextInput
      labelStyle={{ marginTop: "2rem" }}
      label="Registered Email Address"
      placeholder="Email Address"
    />
    <LoadButton style={{ marginTop: "1.5rem", width: "100%" }}>
      Confirm
    </LoadButton>
  </Box>
  )
}

export default ChangePassword
