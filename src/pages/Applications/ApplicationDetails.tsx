
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
import axios from "axios";
import Apis from "../../utils/apis";
import { API_AXIOS } from "../../http/interceptor";
import { useQueryClient } from "react-query";

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
  const queryClient = useQueryClient();
  //const { state, pathname } = useLocation();
  //const { data: appDetail } = useGetAppDetailById(state?._id)
  const { data: appDetail, refetch } = useGetAppDetailById(id);

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

  const handleAppForward = async () => {
    try {
      let data = await API_AXIOS.post(`${Apis.forwardedAppById}/${id}`)
      console.log('dataHandleAppForward', data?.data);
      refetch();
      queryClient.invalidateQueries({
        queryKey: ['application'],
      });
      setOpenApprove(false);
    }
    catch {

    }
  }

  let { models } = JSON.parse(appDetail?.options || "{}")
  console.log('modelInfo', models)
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
              <DetailsSubTitleName name={"Individual"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Model"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.model ?? "NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Commission"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.options?.commission ?? "NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Contract Duration"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.options?.duration ?? "NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Revenue Share %"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.options?.revenuePerc ?? "NA"} />
            </Grid>

            <Grid item xs={3}>
              <DetailsSubTitle title={"1st 12 Months Rental"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.options?.yearly ?? "NA"} />
            </Grid>

            <Grid item xs={3}>
              <DetailsSubTitle title={"6 Months Rental"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.options?.halfYearly ?? "NA"} />
            </Grid>

            <Grid item xs={3}>
              <DetailsSubTitle title={"Cancelled Before 6 Months (Claw back)"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={models?.options?.cancelledBefore6 ?? "NA"} />
            </Grid>
          </Grid>
        </CustomBox>

        {/* All Attachment Image component */}
        <ApplicationAttachDetails appDetail={appDetail} />
        {!isAgent && (
          <Box sx={{ display: "flex", marginTop: "2rem", gap: 2 }}>
            <CustomButton
              type="submit"
              label="Forward"
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
            onClick={handleAppForward}
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
