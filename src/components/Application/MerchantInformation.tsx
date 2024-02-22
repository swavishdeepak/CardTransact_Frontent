import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";

interface MerchantInformationProps {
  disableStyles?: boolean;
}

export const MerchantInformation: React.FC<MerchantInformationProps> = ({disableStyles = false}) => {
  return (
    <Box
      sx={
        !disableStyles
          ? {
              p: 3,
              marginTop: "2rem",
              boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000002E",
              backgroundColor: "#FFFFFF",
              bgcolor: "#FFFFFF",
              borderRadius: "7.5px",
              border: `0.5px solid ${Colors.LinkColor}`,
            }
          : undefined
      }
    >
      {!disableStyles && (
        <CommonHeader header="Merchant Information">
          <img src={NavIcon} alt=""></img>
        </CommonHeader>
      )}
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
        mt={disableStyles ? "none" : 2}
      >
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Merchant Name"}
            palceholder="Enter Merchant`s Legal Name"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Legal Name"}
            palceholder="Enter Limited Company/Solo Trader Name"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Merchant Trading Name"}
            palceholder="Enter Merchant Trading Name"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Mobile Number"}
            palceholder="Enter Mobile Number"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Enter Email Address"}
            palceholder="Enter Email Address"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
