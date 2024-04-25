import React, { useState } from "react";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";
import BasicSelect from "../BasicSelect";
import CustomFileInput from "../CustomFileInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface MerchantInformationProps {
  disableStyles?: boolean;
}

export const MerchantInformation: React.FC<MerchantInformationProps> = ({
  disableStyles = false,
}) => {
  const [selecteIdProof, setSelecteIdProof] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelecteIdProof(event.target.value);
  };

  const selectIDProof = [
    { value: "driving_license", label: "Driving License" },
    { value: "passport", label: "Passport" },
    { value: "National Id", label: "National ID" },
  ];
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
            placeholder="Enter Merchant`s Legal Name"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Legal Name"}
            placeholder="Enter Limited Company/Solo Trader Name"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Merchant Trading Name"}
            placeholder="Enter Merchant Trading Name"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Mobile Number"}
            placeholder="Enter Mobile Number"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Enter Email Address"}
            placeholder="Enter Email Address"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          
            <BasicSelect
              label="Select ID Proofs"
              placeholder="Select"
              sx={{
                width: "100%",
                position: "relative",
                border: "1px solid rgba(220, 220, 220, 1)",
                padding: "10px 6px 0px 8px",
              }}
              name={"selectedValue2"}
              value={selecteIdProof}
              handleChange={handleChange}
              size="small"
              items={selectIDProof}
            />
            {/* <AddCircleOutlineIcon /> */}
          
        </Grid>
        <Grid item xs={12} md={8}>
          <CustomFileInput label="" />
        </Grid>
      </Grid>
    </Box>
  );
};
