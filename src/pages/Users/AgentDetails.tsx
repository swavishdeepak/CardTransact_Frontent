import React, { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { CommonHeader } from "../../components/CommonHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";
import { Colors } from "../../utils/Colors";
import ConfirmDialog from "../../components/ConfirmDialog";

export const AgentDetails = () => {
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
        <CommonHeader header={"View Agent"}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              onClick={handleDeleteOpen}
              label={"Delete"}
              hoverColor={`${Colors.LinkColor}`}
              style={{
                backgroundColor: `${Colors.LinkColor}`,
                color: "#fff",
              }}
            />
            <CustomButton
              label={"Edit"}
              style={{
                backgroundColor: "#fff",
                color: `${Colors.LinkColor}`,
                border: `1px solid ${Colors.LinkColor}`,
              }}
            />
          </Box>
        </CommonHeader>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"personal Details"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Name"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"Hena"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Mobile Number"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"2756845382"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Email Address"} />
          </Grid>
          <Grid item xs={10}>
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
          <Grid item xs={2}>
            <DetailsSubTitle title={"House/Flat Address"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"1 charter Way"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"City"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"Liskeared"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"County"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"Devcon"} />
          </Grid>

          <Grid item xs={2}>
            <DetailsSubTitle title={"Country"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"United Kingdom"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Post Code"} />
          </Grid>
          <Grid item xs={10}>
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
            <Grid item xs={2}>
              <DetailsSubTitle title={"Bank Name"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"Lloyds"} />
            </Grid>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Name on Bank A/c"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"Heena"} />
            </Grid>

            <Grid item xs={2}>
              <DetailsSubTitle title={"Sort Code"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"01-02-3"} />
            </Grid>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Account Number"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={"12345678"} />
            </Grid>
          </Grid>

        <Grid></Grid>
      </CustomBox>
      <ConfirmDialog
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        title={"Conformation"}
        desc="Are You Sure want You Want to Delete This User"
      >
        <Box sx={{display: "flex", gap: 2, justifyContent: "center", marginTop: "1rem"}}>
          <CustomButton
            label="Cancel"
            onClick={handleDeleteClose}
            hoverColor="#898989"
            style={{
              backgroundColor: "#898989",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
          <CustomButton
            label="Delete"
            onClick={handleDeleteClose}
            hoverColor="#C10404"
            style={{
              backgroundColor: "#C10404",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
        </Box>
      </ConfirmDialog>
    </Box>
  );
};
