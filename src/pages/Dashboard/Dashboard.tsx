import { Box } from "@mui/material";
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
import Shape1 from "../../assets/Shape1.svg"

 const Dashboard: React.FC = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header /> 
      <Box sx={{marginTop: "1rem"}}>
        <Grid container rowSpacing={{ xs: 2, md: 4 }} columnSpacing={2} mt={2}>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card
              value={228.12}
              iconLeft={<img src={Vector} alt="" />}
              iconRight={<img src={Vector2} alt="" />}
              description="Total Residual Received"
              percent={67}
              linearProgressColor={"#775DA6"}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card
              value={1096.30}
              iconLeft={<img src={Vector} alt="" />}
              iconRight={<img src={Vector1} alt="" />}
              description="Total Residual Paid"
              linearProgressColor="#F9837C"
              percent={18}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card
              value={1096.30}
              iconLeft={<img src={Vector} alt="" />}
              iconRight={<img src={Vector3} alt="" />}
              description="Commission Paid"
              percent={78}
              linearProgressColor={"#70B6C1"}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card
              value={1247}
              iconRight={<img src={Shape1} alt="" />}
              description="Total Application"
              linearProgressColor={"#F3CC5C"}
              percent={80}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={2.4}>
            <Card
              value={300}
              iconRight={<img src={Shape1} alt="" />}
              description="Total Employees"
              linearProgressColor={"#F3CC5C"}
              percent={80}
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

export default Dashboard;
