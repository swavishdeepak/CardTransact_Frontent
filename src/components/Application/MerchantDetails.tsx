import React, { useState } from "react";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";
import CustomFileInput from "../CustomFileInput";

interface MerchantDetailsProps {
  disableStyles?: boolean;
}

export const MerchantDetails: React.FC<MerchantDetailsProps> = ({
  disableStyles = false,
}) => {
  const [addressProof, setAddressProof] = useState([]);
  const [siteProof, setSiteProof] = useState([]);

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
        <CommonHeader header="Merchant Trading Address">
          <img src={NavIcon} alt=""></img>
        </CommonHeader>
      )}
      <Grid container rowSpacing={4} columnSpacing={2} mt={disableStyles? "none": 2}>
        <Grid item xs={12} md={8}>
          <CustomTextInput
            label={"House No./Flat No."}
            placeholder="Enter House No./Flat No"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CustomTextInput
            label={"Street Name/Building Name"}
            placeholder="Enter Street Name/Building Name"
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={4}>
          <CustomTextInput label={"City"} placeholder="Enter Your City" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomTextInput label={"County"} placeholder="Enter Your County" />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={4}>
          <CustomTextInput label={"Country"} placeholder="Enter Your Country" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomTextInput
            label={"Post Code"}
            placeholder="Enter Your Post Code"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CustomFileInput
            label="Upload Picture of Premises(Outdoors)"
            placeholder="Upload Any Utility Document"
            onFileChange={(e: any) => {
              setAddressProof(e.target.files[0]);
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CustomFileInput
            label="Upload Picture of Premises(Indoors)"
            placeholder="Upload Any Utility Document"
            onFileChange={(e: any) => {
              setSiteProof(e.target.files[0]);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
