import React from "react";
import { Box, Grid } from "@mui/material";
import DetailsHeader from "../MyCustom/DetailsHeader";
import DetailsSubTitle from "../MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../MyCustom/DetailsSubTitleName";

const EmpDetails = ({ employee }) => {
  return (
    <Box>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mt={3}
      >
        <Grid item xs={12}>
          <DetailsHeader heading={"Personal Details"} />
        </Grid>
        {employee?.name && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Name"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.name || ""} />
            </Grid>
          </>
        )}
        {employee?.phoneNumber && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Mobile Number"} />
            </Grid>
            <Grid item xs={10}>
            <DetailsSubTitleName
                name={`${employee?.countryCode || ""} ${employee?.phoneNumber || ""}`}
              />
            </Grid>
          </>
        )}
        {employee?.email && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Email Address"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.email || "NA"} />
            </Grid>
          </>
        )}
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
        {employee?.address?.address1 && (
          <>
            {" "}
            <Grid item xs={2}>
              <DetailsSubTitle title={"House/Flat Address"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.address?.address1 || "NA"} />
            </Grid>
          </>
        )}
        {employee?.address?.city && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"City"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.address?.city || "NA"} />
            </Grid>
          </>
        )}
        {employee?.address?.county && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"County"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.address?.county || "NA"} />
            </Grid>
          </>
        )}

        {employee?.address?.country && (
          <>
            {" "}
            <Grid item xs={2}>
              <DetailsSubTitle title={"Country"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.address?.country || "NA"} />
            </Grid>
          </>
        )}
        {employee?.address?.postalCode && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Post Code"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName
                name={employee?.address?.postalCode || "Na"}
              />
            </Grid>
          </>
        )}
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
        {employee?.bankInfo?.bankName && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Bank Name"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName
                name={employee?.bankInfo?.bankName || "NA"}
              />
            </Grid>
          </>
        )}
        {employee?.bankInfo?.nameOnBankAcc && (
          <>
            {" "}
            <Grid item xs={2}>
              <DetailsSubTitle title={"Name on Bank A/c"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName
                name={employee?.bankInfo?.nameOnBankAcc || "NA"}
              />
            </Grid>
          </>
        )}

        {employee?.bankInfo?.sortCode && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Sort Code"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName
                name={employee?.bankInfo?.sortCode || "NA"}
              />
            </Grid>
          </>
        )}
        {employee?.bankInfo?.AccNumb && (
          <>
            {" "}
            <Grid item xs={2}>
              <DetailsSubTitle title={"Account Number"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={employee?.bankInfo?.AccNumb || "NA"} />
            </Grid>
          </>
        )}
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
        {employee?.addressProofDoc?.length > 0 && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Address Proof"} />
            </Grid>
            <Grid item xs={10}>
              {employee?.addressProofDoc?.map((item) => {
                return (
                  <DetailsSubTitleName name="">
                    <img
                      src={item}
                      alt=""
                      style={{ width: "2rem", height: "2rem" }}
                    ></img>
                  </DetailsSubTitleName>
                );
              })}
            </Grid>
          </>
        )}
        {employee?.bankStatements?.length > 0 && (
          <>
            {" "}
            <Grid item xs={2}>
              <DetailsSubTitle title={"Bank Statement"} />
            </Grid>
            <Grid item xs={10}>
              {employee?.bankStatements?.map((item) => {
                return (
                  <DetailsSubTitleName name="">
                    <img
                      src={item}
                      alt=""
                      style={{ width: "2rem", height: "2rem" }}
                    ></img>
                  </DetailsSubTitleName>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>

      <Grid></Grid>
    </Box>
  );
};

export default EmpDetails;
