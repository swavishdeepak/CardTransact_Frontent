import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import { Colors } from "../../utils/Colors";
import { Grid } from "@mui/material";

export const ViewDetails = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox
        style={{
          border: `1px solid ${Colors.LinkColor}`,
        }}
      >
        <CommonHeader header="NOTIFICATION DETAILS" />
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={2}
        >
          <Grid item xs={3}>
            <DetailsSubTitle title={"Title Of Notification"} />
          </Grid>
          <Grid item xs={9}>
            <DetailsSubTitleName
              name={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </Grid>
          <Grid item xs={3} >
            <DetailsSubTitle title={"Message"} />
          </Grid>
          <Grid item xs={9} >
            <DetailsSubTitleName
              name={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </Grid>
          <Grid item xs={3} >
            <DetailsSubTitle title={"People"} />
          </Grid>
          <Grid item xs={9} >
            <DetailsSubTitleName name={"All View All"} />
          </Grid>
        </Grid>
      </CustomBox>
    </Box>
  );
};
