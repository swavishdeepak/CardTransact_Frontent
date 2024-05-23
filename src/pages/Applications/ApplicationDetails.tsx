import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import CustomButton from "../../components/CustomButton";
import { LoadButton } from "../../components/LoadButton";
import { Colors } from "../../utils/Colors";
import { Grid } from "@mui/material";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import ProofIcons from "../../assets/ProofIcon.svg";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Label } from "recharts";
import { useGetAppDetailById } from "./getQuery/getQuery";
import { useAppSelector } from "../../redux/hooks";
import { statusObj } from "../../utils/menuItems/MenuItems";
import ApplicationAttachDetails from "../../components/Application/ApplicationAttachDetails";

const customBoxStyle = {
  border: "1px solid #77D177",
  marginTop: 4,
};

const headerStyle = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "24px",
};

const ApplicationDetails = () => {
  const { verifiedUser } = useAppSelector((state) => state.verifiedUser);
  const isAgent = verifiedUser?.data?.role === "agent";
  const { id } = useParams();
  const navigate = useNavigate();
  //const { state, pathname } = useLocation();
  //const { data: appDetail } = useGetAppDetailById(state?._id)
  const { data: appDetail } = useGetAppDetailById(id);

  const [openApprove, setOpenApprove] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  //console.log('verifiedUser@ ', verifiedUser?.data?.role);

  const handleOpenApprove = () => {
    setOpenApprove(true);
  };

  const handleCloseApprove = () => {
    setOpenApprove(false);
  };

  const handleOpenReview = () => {
    setOpenReview(true);
  };

  const handleCloseRiview = () => {
    setOpenReview(false);
  };

  const handleRedirect = () => {
    navigate("/Re-evaluation", { state: appDetail });
  };

  //javed
  const navToUpdateApp = () => {
    navigate("/addApplication", { state: appDetail });
  };

  

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header={"Applications Details"}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              label={"Delete"}
              hoverColor={Colors.LinkColor}
              style={{
                backgroundColor: `${Colors.LinkColor}`,
                color: "#fff",
              }}
            />
            {verifiedUser?.data?.role !== "admin" && (
              <CustomButton
                label={"Edit"}
                style={{
                  backgroundColor: "#fff",
                  color: `${Colors.editColor}`,
                  border: `1px solid ${Colors.editColor}`,
                }}
                onClick={navToUpdateApp}
              />
            )}
          </Box>
        </CommonHeader>
        <CustomBox style={customBoxStyle}>
          <Grid item xs={12}>
            <CommonHeader
              style={{ width: "100%" }}
              headerStyle={headerStyle}
              header="SELECTED ACQUIRER"
            ></CommonHeader>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={3}>
              <DetailsSubTitle title={"Acquirer"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={appDetail?.acquirer?.name ?? "--"} />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox style={customBoxStyle}>
          <Grid item xs={12}>
            <CommonHeader
              style={{ width: "100%" }}
              headerStyle={headerStyle}
              header="STATUS"
            ></CommonHeader>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={3}>
              <DetailsSubTitle title={"Status"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={statusObj[appDetail?.status ?? "--"]}
              />
            </Grid>

            <Grid item xs={3}>
              <DetailsSubTitle title={"Remarks"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantTradingAdd?.remark ?? "--"}
              />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox style={customBoxStyle}>
          <Grid item xs={12}>
            <CommonHeader
              style={{ width: "100%" }}
              headerStyle={headerStyle}
              header="MERCHANT INFORMATION"
            ></CommonHeader>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Name"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantInfo?.name || "NA"}
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Legal Name"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantInfo?.legalName || "NA"}
              />
            </Grid>

            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Trading Name"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantInfo?.tradingName || "NA"}
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Mobile Number"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantInfo?.phoneNumber || "NA"}
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Email Address"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantInfo?.email || "NA"}
              />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox style={customBoxStyle}>
          <Grid item xs={12}>
            <CommonHeader
              style={{ width: "100%" }}
              headerStyle={headerStyle}
              header="MERCHNAT TRADING ADDRESS INFORMATION"
            ></CommonHeader>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"House/Flat Address"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantTradingAdd?.address1 || "NA"}
              />
            </Grid>

            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"City"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantTradingAdd?.city || "NA"}
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"County"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantTradingAdd?.county || "NA"}
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Country"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantTradingAdd?.country || "NA"}
              />
            </Grid>
            <Grid item xs={5} md={3}>
              <DetailsSubTitle title={"Post Code"} />
            </Grid>
            <Grid item xs={7} md={9}>
              <DetailsSubTitleName
                name={appDetail?.merchantTradingAdd?.postalCode || "NA"}
              />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox style={customBoxStyle}>
          <Grid item xs={12}>
            <CommonHeader
              style={{ width: "100%" }}
              headerStyle={headerStyle}
              header="MERCHNAT BANK INFORMATION"
            ></CommonHeader>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={3}>
              <DetailsSubTitle title={"Name of Bank"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={appDetail?.bankInfo?.bankName || "NA"}
              />
            </Grid>

            <Grid item xs={3}>
              <DetailsSubTitle title={"Name on Bank Ac."} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={appDetail?.bankInfo?.nameOnBankAcc || "NA"}
              />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Account No"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={appDetail?.bankInfo?.accountNumber || "NA"}
              />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Sort Code"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={appDetail?.bankInfo?.sourceCode || "NA"}
              />
            </Grid>
          </Grid>
        </CustomBox>
        <CustomBox style={customBoxStyle}>
          <Grid item xs={12}>
            <CommonHeader
              style={{ width: "100%" }}
              headerStyle={headerStyle}
              header="SALESPERSON INFORMATION"
            ></CommonHeader>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={3}
          >
            <Grid item xs={3}>
              <DetailsSubTitle title={"Name"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName
                name={appDetail?.salesPerson?.name || "NA"}
              />
            </Grid>

            <Grid item xs={6} md={3}>
              <DetailsSubTitle title={"Company/Individual"} />
            </Grid>
            <Grid item xs={6} md={9}>
              <DetailsSubTitleName name={ "NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Model"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Rental"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Contract Duration"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Total Commission"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"NA"} />
            </Grid>
          </Grid>
        </CustomBox>
       
        {/* All Attachment Image component */}
        <ApplicationAttachDetails  appDetail={appDetail}/>
        {!isAgent && (
          <Box sx={{ display: "flex", marginTop: "2rem", gap: 2 }}>
            <CustomButton
              type="submit"
              label="Approve"
              hoverColor={Colors.successColor}
              onClick={handleOpenApprove}
              style={{
                width: "20%",
                height: "2.3rem",
                fontSize: "15px",
                backgroundColor: Colors.successColor,
                color: "#fff",
              }}
            ></CustomButton>
            <CustomButton
              onClick={handleOpenReview}
              label="Review"
              hoverColor={Colors.deletebtnColor}
              style={{
                width: "20%",
                height: "2.3rem",
                fontSize: "15px",
                backgroundColor: Colors.deletebtnColor,
                color: "#fff",
              }}
            ></CustomButton>
          </Box>
        )}
      </CustomBox>
      <ConfirmDialog
        open={openApprove}
        title={"Confirmation"}
        desc={"Are You Sure want You want to"}
      >
        <Typography
          sx={{ fontSize: "12px", color: "#048519", fontWeight: "700" }}
        >
          Approved this Application?
        </Typography>
        <Box sx={{ display: "flex", marginTop: "1rem", gap: 2 }}>
          <CustomButton
            onClick={handleCloseApprove}
            label=" No, Not Now"
            hoverColor={Colors.editColor}
            style={{
              backgroundColor: Colors.editColor,
              color: "#fff",
              fontSize: "10px",
            }}
          />
          <CustomButton
            label=" Yes, Confirm"
            hoverColor={Colors.successColor}
            style={{
              backgroundColor: Colors.successColor,
              color: "#fff",
              fontSize: "10px",
            }}
          />
        </Box>
      </ConfirmDialog>
      <ConfirmDialog
        open={openReview}
        title={"Confirmation"}
        desc={"Are You Sure want You want to"}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: Colors.deletebtnColor,
              fontWeight: "700",
            }}
          >
            Review
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: Colors.blackColor,
              fontWeight: "700",
            }}
          >
            This Application and send it to re-evaluation?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "1rem",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <CustomButton
            onClick={handleCloseRiview}
            label=" No, Not Now"
            hoverColor={Colors.editColor}
            style={{
              backgroundColor: Colors.editColor,
              color: "#fff",
              fontSize: "10px",
            }}
          />
          <CustomButton
            label=" Yes, Confirm"
            onClick={handleRedirect}
            hoverColor={Colors.successColor}
            style={{
              backgroundColor: Colors.successColor,
              color: "#fff",
              fontSize: "10px",
            }}
          />
        </Box>
      </ConfirmDialog>
    </Box>
  );
};

export default ApplicationDetails;
