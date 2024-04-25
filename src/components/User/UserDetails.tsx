import React from 'react';
import { Box, Grid } from '@mui/material';
import DetailsHeader from '../MyCustom/DetailsHeader';
import DetailsSubTitle from '../MyCustom/DetailsSubTitle';
import DetailsSubTitleName from '../MyCustom/DetailsSubTitleName';

const UserDetails: React.FC = () => {
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
        <Grid item xs={2}>
          <DetailsSubTitle title={"Manager"} />
        </Grid>
        <Grid item xs={10}>
          <DetailsSubTitleName name={"Shyamal Modak"} />
        </Grid>
        <Grid item xs={2}>
          <DetailsSubTitle title={"Reporting Agent"} />
        </Grid>
        <Grid item xs={10}>
          <DetailsSubTitleName name={"Agent01"} />
        </Grid>
        <Grid item xs={2}>
          <DetailsSubTitle title={"Tier"} />
        </Grid>
        <Grid item xs={10}>
          <DetailsSubTitleName name={"Tier01"} />
        </Grid>
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
    </Box>
  );
};

export default UserDetails;
