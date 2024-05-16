import React from "react";
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
import CustomTextInput from "../../components/CustomInput";
import { LoadButton } from "../../components/LoadButton";
import { Label } from "recharts";
import fileIcons from "../../assets/fileIcon.svg";
import { useNavigate, useParams } from "react-router-dom";

let linkColor = Colors.LinkColor || "#000";

const EmployeesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    navigate(`/addEmployee?type=employees&id=${id}`);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header={"EMPLOYEE DETAILS"}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              label={"Delete"}
              hoverColor={linkColor}
              style={{
                backgroundColor: `${linkColor}`,
                color: "#fff",
              }}
            />
            <CustomButton
              label={"Edit"}
              style={{
                backgroundColor: "#fff",
                color: `${linkColor}`,
                border: `1px solid ${linkColor}`,
              }}
              onClick={handleEdit}
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
          rowSpacing={2}
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
          rowSpacing={2}
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
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Attachment"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Address Proof"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name="">
              <img src={fileIcons} alt=""></img>
            </DetailsSubTitleName>
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Bank Statement"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name="">
              <img src={fileIcons} alt=""></img>
            </DetailsSubTitleName>
          </Grid>
          <Grid item xs={12} mt={2}>
            <CustomTextInput
              label="Add Special Remarks"
              rows={4}
              multiline={true}
              placeholder="Type Here..."
            />
          </Grid>
        </Grid>
        <LoadButton
          type="submit"
          style={{
            marginTop: 3,
            width: "20%",
          }}
        >
          Save Remark
        </LoadButton>
        <Grid></Grid>
      </CustomBox>
    </Box>
  );
};

export default EmployeesDetails;
