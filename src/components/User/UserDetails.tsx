import React from "react";
import { Box, Grid } from "@mui/material";
import DetailsHeader from "../MyCustom/DetailsHeader";
import DetailsSubTitle from "../MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../MyCustom/DetailsSubTitleName";
import { srManagersObj } from "../../utils/menuItems/MenuItems";

const UserDetails = ({ user, tierObj = {} }: { user?: any; tierObj?: any }) => {
  return (
    <Box>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mt={3}
      >
        <Grid item xs={12}>
          <DetailsHeader heading={"Organisation Details"} />
        </Grid>
        {user?.manager && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Manager"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={srManagersObj[user?.manager]} />
            </Grid>
          </>
        )}

        {/* <Grid item xs={2}>
          <DetailsSubTitle title={"Reporting Agent"} />
        </Grid>
        <Grid item xs={10}>
          <DetailsSubTitleName name={"Agent01"} />
        </Grid> */}

        {user?.tier && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Tier"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={tierObj[user?.tier]} />
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
          <DetailsHeader heading={"personal Details"} />
        </Grid>

        {user?.name && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Name"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.name} />
            </Grid>
          </>
        )}

        {user?.phoneNumber && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Mobile Number"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName
                name={`${user?.countryCode || ""} ${user?.phoneNumber || ""}`}
              />
            </Grid>
          </>
        )}
        {user?.email && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Email Address"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.email} />
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

        {(user?.address?.address1 || user?.address?.address2) && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"House/Flat Address"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName
                name={`${user?.address?.address1}, ${user?.address?.address2}`}
              />
            </Grid>
          </>
        )}

        {user?.address?.city && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"City"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.address?.city} />
            </Grid>
          </>
        )}

        {/* <Grid item xs={2}>
          <DetailsSubTitle title={"County"} />
        </Grid>
        <Grid item xs={10}>
          <DetailsSubTitleName name={"Devcon"} />
        </Grid> */}

        {user?.address?.country && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Country"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.address?.country} />
            </Grid>
          </>
        )}

        {user?.address?.postalCode && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Post Code"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.address?.postalCode} />
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

        {user?.bankInfo?.bankName && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Bank Name"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.bankInfo?.bankName} />
            </Grid>
          </>
        )}

        {user?.bankInfo?.nameOnBankAcc && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Name on Bank A/c"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.bankInfo?.nameOnBankAcc} />
            </Grid>
          </>
        )}

        {user?.bankInfo?.sortCode && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Sort Code"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.bankInfo?.sortCode} />
            </Grid>
          </>
        )}

        {user?.bankInfo?.AccNumb && (
          <>
            <Grid item xs={2}>
              <DetailsSubTitle title={"Account Number"} />
            </Grid>
            <Grid item xs={10}>
              <DetailsSubTitleName name={user?.bankInfo?.AccNumb} />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default UserDetails;
