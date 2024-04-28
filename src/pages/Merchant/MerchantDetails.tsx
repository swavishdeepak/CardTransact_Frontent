import React, { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { CommonHeader } from "../../components/CommonHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import { Colors } from "../../utils/Colors";


 const MerchantDetail = () => {
  const [openDelete, setOpenDelete] = useState(false);

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header={"Merchant Details"}>
          <CustomButton
            onClick={handleDeleteOpen}
            label={"Delete"}
            hoverColor={`${Colors.LinkColor}`}
            style={{
              backgroundColor: `${Colors.LinkColor}`,
              color: "#fff",
            }}
          />
        </CommonHeader>
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <CommonHeader
                header="MERCHANT INFORMATION"
                headerStyle={{
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
                style={{
                  marginBottom: "1rem",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Legal Name"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Merchant01"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Trading Name"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Merchant01"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Mobile Number"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"+44 7300912119"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Email Address"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"merchant12@gmail.com"} />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
            marginTop: "2rem"
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <CommonHeader
                header="MERCHANT ADDRESS INFORMATION"
                headerStyle={{
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
                style={{
                  marginBottom: "1rem",
                  width: "100%"
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"House/Flat Address"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"1 Charter Way"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"City"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Liskeared"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"county"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Devon"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Country"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"United Kingdom"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Post Code"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"PI24 4HX"} />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
            marginTop: "2rem"
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <CommonHeader
                header="MERCHANT BANK INFORMATION"
                headerStyle={{
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
                style={{
                  marginBottom: "1rem",
                  
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Name of Bank"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Lloyds"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Name on Bank Ac."} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Merchant No"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Account No"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"123456789"} />
            </Grid>
           
            <Grid item xs={3}>
              <DetailsSubTitle title={"Sort Code"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"01-02-03"} />
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
    </Box>
  );
};
export default MerchantDetail;
