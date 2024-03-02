import { Box, Typography } from "@mui/material";
import React from "react";
import { Header } from "../../components/Dashboard/Header";
import Card from "../../components/Dashboard/Card";
import Grid from "@mui/material/Grid"; // Correct import
import Vector from "../../assets/Vector.svg";
import Vector1 from "../../assets/balancewalletIcon.svg";
import Vector2 from "../../assets/dealsIcons.svg";
import Vector3 from "../../assets/Shape.svg";
//import { Application,SeriesData } from "../../components/Graph/Application";
import Application from "../../components/Dashboard/Graph/Application";
import { Sales } from "../../components/Dashboard/Graph/Sales";
import { Revenue } from "../../components/Dashboard/Graph/Revenue";
import { MessageList } from "../../components/Dashboard/MessageList";
import TopPerformance from "../../components/Dashboard/TopPerformance";
import { CustomBox } from "../../components/MyCustom/CustomBox";

export const Dashboard = () => {
  // const seriesData: SeriesData[] = [
  //   { id: 1, value: 20, label: "Series A" },
  //   { id: 2, value: 30, label: "Series B" },
  //   { id: 3, value: 50, label: "Series C" },
  // ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Box>
      <Grid
        container
        rowSpacing={{ xs: 2, md: 4 }}
        columnSpacing={2}
      >
        <Grid item xs={6}sm={4} md={2.4}>
          <Card
            value={22880.12}
            iconLeft={<img src={Vector} alt="" />}
            iconRight={<img src={Vector2} alt="" />}
            description="Total Residual Received"
            percent={57}
            linearProgressColor={"#775DA6"}
          />
        </Grid>
        <Grid item xs={6}sm={4} md={2.4}>
          <Card
            value={22880.12}
            iconLeft={<img src={Vector} alt="" />}
            iconRight={<img src={Vector1} alt="" />}
            description="Total Residual Paid"
            percent={70}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={22880.12}
            iconLeft={<img src={Vector} alt="" />}
            iconRight={<img src={Vector3} alt="" />}
            description="Commission Paid"
            percent={30}
            linearProgressColor={"red"}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Card
            value={1247}
            iconRight={<img src={Vector1} alt="" />}
            description="Total Application"
            percent={90}
          />
        </Grid>
        <Grid item xs={6}sm={4} md={2.4}>
          <Card
            value={300}
            iconRight={<img src={Vector1} alt="" />}
            description="Total Employees"
            percent={100}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Application />
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Sales />
        </Grid>
        <Grid item xs={12} md={3.5}>
          <Revenue />
        </Grid>
        <Grid item xs={12} md={8} mt={2}>
          <TopPerformance />
        </Grid>
        <Grid item xs={12} md={4} mt={2}>
          <MessageList />
        </Grid>
      </Grid>
      </Box>
     
    </Box>
  );
};
