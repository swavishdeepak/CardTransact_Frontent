import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { Colors } from "../../utils/Colors";
import { Grid } from "@mui/material";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import CustomButton from "../../components/CustomButton";

export const DeleteDataDetails = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="EMPLOYEES DETAILS">
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              label={"Restore"}
              hoverColor={Colors.successColor}
              style={{
                backgroundColor: `${Colors.successColor}`,
                color: "#fff",
              }}
            />
            <CustomButton
              label={"Delete Permanently"}
              hoverColor={Colors.deletebtnColor}
              style={{
                backgroundColor: `${Colors.deletebtnColor}`,
                color: "#fff",
              }}
            />
          </Box>
        </CommonHeader>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Personal Details"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Name"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"Hena"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Mobile Number"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"+44 734505432"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Email Address"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"heena123@gmail.com"} />
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Address Details"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"House/Flat Address"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"1 charter Way"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"City"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"Liskeared"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"County"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"Devcon"} />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Country"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"United Kingdom"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Post Code"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"P12 4Hk"} />
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Bank Details"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Bank Name"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"Lloyds"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Name on Bank A/c"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"Heena"} />
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Sort Code"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"01-02-3"} />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <DetailsSubTitle title={"Account Number"} />
          </Grid>
          <Grid item xs={6} sm={8} md={9}>
            <DetailsSubTitleName name={"12345678"} />
          </Grid>
        </Grid>
      </CustomBox>
    </Box>
  );
};
