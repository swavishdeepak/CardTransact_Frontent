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
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={12} sm={6}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <DetailsHeader heading="Personal Details" />
                </Grid>
                <Grid item xs={5}>
                  <DetailsSubTitle title={"Name"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"Agent01"} />
                </Grid>

                <Grid item xs={5}>
                  <DetailsSubTitle title={"Mobile Number"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"+91 43637882"} />
                </Grid>
                <Grid item xs={5}>
                  <DetailsSubTitle title={"Email Address"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"agent21@gmail.com"} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <DetailsHeader heading="Banks Details" />
                </Grid>
                <Grid item xs={5}>
                  <DetailsSubTitle title={" Bank Name"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"Monza"} />
                </Grid>

                <Grid item xs={5}>
                  <DetailsSubTitle title={"Name on Bank A/C"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"Agent01"} />
                </Grid>
                <Grid item xs={5}>
                  <DetailsSubTitle title={"Sort Code"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"04-00-04"} />
                </Grid>
                <Grid item xs={5}>
                  <DetailsSubTitle title={"Account Number"} />
                </Grid>
                <Grid item xs={7}>
                  <DetailsSubTitleName name={"123456789"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
    </Box>
  );
};

export default CommissionDetails;
