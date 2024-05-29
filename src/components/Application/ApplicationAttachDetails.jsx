import React, { useCallback, useState } from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import { Box, Grid, Typography } from "@mui/material";
import { CommonHeader } from "../CommonHeader";
import DetailsSubTitle from "../MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../MyCustom/DetailsSubTitleName";
import ConfirmDialog from "../ConfirmDialog";

const customBoxStyle = {
  border: "1px solid #77D177",
  marginTop: 4,
};

const headerStyle = {
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "24px",
};



const ApplicationAttachDetails = ({ appDetail }) => {
  const [openImage, setOpenImage] = useState(false);
  const [url, setUrl] = useState("");

  const handleReviewOpen = useCallback((url) => {
    setUrl(url);
    setOpenImage(true);
  }, []);

  const handleReviewClose = useCallback(() => {
    setOpenImage(false);
    setUrl("");
  }, []);

  const ImageShow = ({ images }) => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: 1,
          marginTop: "5px",
        }}
      >
        {images?.map((url, index) => (
          <img
           key={index}
            src={url}
            alt=""
            style={{
              width: 50,
              height: 50,
              cursor: "pointer",
              borderRadius: "5px",
            }}
            onClick={() => handleReviewOpen(url)}
          />
        ))}
      </Box>
    );
  };

  return (
    <CustomBox style={customBoxStyle}>
      <Grid item xs={12}>
        <CommonHeader
          style={{ width: "100%" }}
          headerStyle={headerStyle}
          header="ATTACHMENT"
        ></CommonHeader>
      </Grid>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mt={3}
      >
        <Grid item xs={3}>
          <DetailsSubTitle title={"ID Proof"} />
        </Grid>
        <Grid item xs={9}>
          <Box sx={{}}>
            <DetailsSubTitleName style={{ alignItems: "start" }}>
              <Box>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "15",
                    fontWeight: "300",
                  }}
                >
                  Driving License
                </Typography>
                <ImageShow  images={appDetail?.drivingLicense} />
              </Box>
            </DetailsSubTitleName>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <DetailsSubTitle title={"Premises Pictures"} />
        </Grid>
        <Grid item xs={9}>
          <DetailsSubTitleName style={{ alignItems: "start" }}>
            <Box>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "15",
                  fontWeight: "300",
                }}
              >
                Outdoors
              </Typography>
              <ImageShow  images={appDetail?.outDoorPremisesPic} />
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "15",
                  fontWeight: "300",
                  marginTop: "10px",
                }}
              >
                Indoors
              </Typography>
             
               <ImageShow  images={appDetail?.inDoorPremisesPic} />
            </Box>
          </DetailsSubTitleName>
        </Grid>
        <Grid item xs={3}>
          <DetailsSubTitle title={"Business Address Proof"} />
        </Grid>
        <Grid item xs={9}>
          <DetailsSubTitleName style={{ alignItems: "start" }}>
            <Box>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "15",
                  fontWeight: "300",
                }}
              >
                Utility Bills
              </Typography>

              <ImageShow  images={appDetail?.utilityBillPic} />
              
            </Box>
          </DetailsSubTitleName>
        </Grid>
        <Grid item xs={3}>
          <DetailsSubTitle title={"Home Address Proof"} />
        </Grid>
        <Grid item xs={9}>
          <DetailsSubTitleName style={{ alignItems: "start" }}>
            <Box>
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "15",
                  fontWeight: "300",
                }}
              >
                Domestice Utility Bills
              </Typography>
              
              <ImageShow  images={appDetail?.homeUtilityBillPic} />
            </Box>
          </DetailsSubTitleName>
        </Grid>
        <Grid item xs={3}>
          <DetailsSubTitle title={"Bank Statement"} />
        </Grid>
        <Grid item xs={9}>
          <DetailsSubTitleName>
            
             <ImageShow  images={appDetail?.bankStatement} />
          </DetailsSubTitleName>
        </Grid>
        <Grid item xs={3}>
          <DetailsSubTitle title={"Remarks"} />
        </Grid>
        <Grid item xs={9}>
          <DetailsSubTitleName name="Lorem Ipsum has been the Industry" />
        </Grid>
        <Grid item xs={3}>
          <DetailsSubTitle title={"Alternatives"} />
        </Grid>
        <Grid item xs={9}>
          <DetailsSubTitleName>
            <ImageShow  images={appDetail?.alternativeDoc} />
          </DetailsSubTitleName>
        </Grid>
      </Grid>
      <ConfirmDialog open={openImage} handleClose={handleReviewClose} style={{padding: "0px 0px"}}>
        <img
          src={url}
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
          loading="lazy"
        />
      </ConfirmDialog>
    </CustomBox>
  );
};

export default ApplicationAttachDetails;