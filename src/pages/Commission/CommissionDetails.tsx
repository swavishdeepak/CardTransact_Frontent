import React from "react";
import { Box, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Grid } from "@mui/material";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import { Colors } from "../../utils/Colors";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import UserDetails from "../../components/User/UserDetails";
import { AllCommissionComp } from "../../components/Commission/AllCommissionComp";

const CommissionDetails = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Details" />
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
          }}
        >
          <CommonHeader header="AGENT INFORMATION">
            <FilterAltIcon
              sx={{
                color: " rgba(191, 191, 191, 1)",
                boxShadow: "0.9375px 0.9375px 2.8125px 0px rgba(0, 0, 0, 0.15)",
                cursor: "pointer",
              }}
            />
          </CommonHeader>
          <UserDetails/>
          <AllCommissionComp/>
        </CustomBox>
      </CustomBox>
    </Box>
  );
};

export default CommissionDetails;
