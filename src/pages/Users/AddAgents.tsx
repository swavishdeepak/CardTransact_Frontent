import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomTextInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomAccordion from "../../components/MyCustom/CustomAccordian";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { LoadButton } from "../../components/LoadButton";

export const AddAgents = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox style={{ marginTop: "1.5rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
            >
              Add Agent
            </Typography>
            <Divider sx={{ border: "1px solid #77D177" }} />
          </Box>
          <CustomButton
            label={"Back"}
            style={{
              backgroundColor: "#898989",
              color: "#fff",
              textTransform: "none",
              height: "1.6rem",
              fontWeight: "500",
            }}
          />
        </Box>
        <CustomAccordion
          summary="CONTACT INFORMATION"
         
        >
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={5}>
              <CustomTextInput label={"Name"} palceholder="Enter Your Name" />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Phone Number"}
                palceholder="Enter your Phone"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Email Address"}
                palceholder="Enter Your Email"
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion
          summary="ADDRESS INFORMATION"
          
        >
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"House.no/Flat.no/Bulding Name"}
                palceholder="Enter Your Email"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Address Line 2"}
                palceholder="Enter your Email"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput label={"City"} palceholder="Enter Your City" />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Country"}
                palceholder="Enter Your Country"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Postal Code"}
                palceholder="Enter Your Postal Code"
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion
          summary="BANK INFORMATION"
          
        >
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Bank Name"}
                palceholder="Enter Your Bank"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Name on Bank Account"}
                palceholder="Enter the Name on Bank Acount"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Sort Code"}
                palceholder="Enter Your Sort Code"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Account Number"}
                palceholder="Enter Your Account Number"
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <LoadButton
          type="submit"
          loading={loading}
          style={{
            width: "25%",
            marginTop: 3,
          }}
        >
          Add
        </LoadButton>
      </CustomBox>
    </Box>
  );
};
