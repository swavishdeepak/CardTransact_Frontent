import { Box, Typography } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import CheckBox from '../../MyCustom/CheckBox';
import CustomTextInput from '../../CustomInput';

import React, { useState } from 'react'
import { LoadButton } from '../../LoadButton';

const SendRequestPass = ({toggleModal}) => {
    const [inputVisibility, setInputVisibility] = useState({
        email: false,
        mobile: false,
      });
      const handleCheckboxChange = (
        event,
        type
      ) => {
        setInputVisibility({
          ...inputVisibility,
          [type]: event.target.checked,
        });
      };
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
        Send Request
      </Typography>
      <CloseIcon
        onClick={() => toggleModal("sendRequest")}
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
      To Change Your Email Address or Mobile number you have to <br></br>
      Send a request to the Super Admin
    </Typography>
    <Box
      sx={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
    >
      <CheckBox
        label="Email Address"
        labelStyle={{ fontSize: "0.8rem" }}
        onChange={(event) => handleCheckboxChange(event, "email")}
      />
      <CheckBox
        label="Mobile Number"
        labelStyle={{ fontSize: "0.8rem" }}
        onChange={(event) => handleCheckboxChange(event, "mobile")}
      />
    </Box>
    {inputVisibility.email && (
      <>
        <CustomTextInput
          labelStyle={{
            fontSize: "12px",
            fontWeight: "600",
            marginTop: "1rem",
          }}
          label="Old Email Address"
        />
        <CustomTextInput
          labelStyle={{
            fontSize: "12px",
            fontWeight: "600",
            marginTop: "1rem",
          }}
          label="New Email Address"
        />
      </>
    )}
    {inputVisibility.mobile && (
      <>
        <CustomTextInput
          labelStyle={{
            fontSize: "12px",
            fontWeight: "600",
            marginTop: "1rem",
          }}
          label="Old Mobile Number"
        />
        <CustomTextInput
          labelStyle={{
            fontSize: "12px",
            fontWeight: "600",
            marginTop: "1rem",
          }}
          label="New Mobile Number"
        />
      </>
    )}
    <LoadButton style={{ marginTop: "1.5rem", width: "100%" }}>
      Confirm
    </LoadButton>
  </Box>
  )
}

export default SendRequestPass
