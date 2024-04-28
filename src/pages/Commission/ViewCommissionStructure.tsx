import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { Preview } from "../../components/Commission/Preview";
import { CommonHeader } from "../../components/CommonHeader";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import { Grid } from "@mui/material";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";

 const ViewCommissionStructure = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Details">
          <CustomButton
            label="Delete"
            hoverColor={Colors.deletebtnColor}
            style={{
              backgroundColor: Colors.deletebtnColor,
              color: "#ffffff",
            }}
          />
        </CommonHeader>
        <CustomBox>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={2}>
              <DetailsSubTitle title={"Acquirer"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"WorldPay"} />
            </Grid>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Tier"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"Tier 01"} />
            </Grid>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Date"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"13/02/2024"} />
            </Grid>
          </Grid>
        </CustomBox>
        <Preview />
        <Preview/>
        <Preview/>
      </CustomBox>
    </Box>
  );
};

export default ViewCommissionStructure;
