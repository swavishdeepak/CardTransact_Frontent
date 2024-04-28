import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import { Colors } from "../../utils/Colors";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";

 const NotificationDetails = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="EMPLOYEE DETAILS">
          <Box sx={{ display: "flex", gap: 2 }}>
            <CustomButton
              label="No, Keep"
              hoverColor={Colors.successColor}
              style={{
                backgroundColor: Colors.successColor,
              }}
            />
            <CustomButton
              label="Yes, Delete"
              hoverColor={Colors.deletebtnColor}
              style={{
                backgroundColor: Colors.deletebtnColor,
              }}
            />
          </Box>
        </CommonHeader>
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
          }}
        >
          <CommonHeader header="REMARKS" />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={2}
          >
            <Grid item xs={3}>
              <DetailsSubTitle title={"Remarks"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={"Lorem Ipsum is simply dummy text of the printing."}
              />
            </Grid>
          </Grid>
        </CustomBox>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={3}>
          <Grid item xs={12}>
              <DetailsHeader heading={"personal Details"}/>
          </Grid>
          <Grid item xs={2}>
             <DetailsSubTitle title={"Name"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"Hena"}/>
          </Grid>
          <Grid item xs={2}>
          <DetailsSubTitle title={"Mobile Number"}/>
          </Grid>
          <Grid item xs={10}
           
          >
           <DetailsSubTitleName name={"2756845382"}/>
          </Grid>
          <Grid item xs={2} >
            <DetailsSubTitle title={"Email Address"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"heena123@gmail.com"}/>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={3}>
          <Grid item xs={12}>
              <DetailsHeader heading={"Address Details"}/>
          </Grid>
          <Grid item xs={2}>
             <DetailsSubTitle title={"House/Flat Address"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"1 charter Way"}/>
          </Grid>
          <Grid item xs={2}>
          <DetailsSubTitle title={"City"}/>
          </Grid>
          <Grid item xs={10}
           
          >
           <DetailsSubTitleName name={"Liskeared"}/>
          </Grid>
          <Grid item xs={2} >
            <DetailsSubTitle title={"County"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"Devcon"}/>
          </Grid>
        
          <Grid item xs={2} >
            <DetailsSubTitle title={"Country"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"United Kingdom"}/>
          </Grid>
          <Grid item xs={2} >
            <DetailsSubTitle title={"Post Code"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"P12 4Hk"}/>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={3}>
          <Grid item xs={12}>
              <DetailsHeader heading={"Bank Details"}/>
          </Grid>
          <Grid item xs={2}>
             <DetailsSubTitle title={"Bank Name"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"Lloyds"}/>
          </Grid>
          <Grid item xs={2}>
          <DetailsSubTitle title={"Name on Bank A/c"}/>
          </Grid>
          <Grid item xs={10}
           
          >
           <DetailsSubTitleName name={"Heena"}/>
          </Grid>
        
          <Grid item xs={2} >
            <DetailsSubTitle title={"Sort Code"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"01-02-3"}/>
          </Grid>
          <Grid item xs={2} >
            <DetailsSubTitle title={"Account Number"}/>
          </Grid>
          <Grid item xs={10} >
             <DetailsSubTitleName name={"12345678"}/>
          </Grid>
        </Grid>
      </CustomBox>
    </Box>
  );
};

export default NotificationDetails;
