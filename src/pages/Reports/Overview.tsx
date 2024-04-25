import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import {
  AreaChart,
  Area,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { Grid } from "@mui/material";
import { CustomGraph } from "../../components/Reports/Graph/CustomGraph";
import { GraphCustomBox } from "../../components/GraphCustomBox";
import { Colors } from "../../utils/Colors";
import CustomText from "../../components/CustomText";
import saleIcon from "../../assets/saleIcon.svg";
import { Link } from "react-router-dom";
import Application from "../../components/Dashboard/Graph/Application";
import { SalesPerson } from "../../components/Reports/TopSalesPersonList/SalesPerson";

export const Overview = () => {
  const data = [
    {
      name: "Page A",
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page H",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page I",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page j",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page k",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Grid container rowSpacing={4} columnSpacing={6}>
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
              header="Sales"
              viewDetails={
                <Link to="/report/overview/salesDetails" style={{ color: Colors.LinkColor }}>
                  ViewDetails
                </Link>
              }
              year="2024"
              pound="23,3453"
            >
              <BarChart
                width={730}
                height={250}
                data={data1}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
               
              >
                <CartesianGrid strokeDasharray="" style={{ display: "none" }} />
                <Bar dataKey="uv" fill="rgba(119, 93, 166, 1)" />
                
           
              </BarChart>
            
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        {/* For Revenue */}
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
              header="Revenue"
              viewDetails={
                <Link to="/revenueDetails" style={{ color: Colors.LinkColor }}>
                  ViewDetails
                </Link>
              }
              year="January 2024"
              pound="23,3453"
            >
              <AreaChart
                width={400}
                height={210}
                data={data}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
              >
                <Area
                  type="bump"
                  dataKey="uv"
                  stroke={Colors.LinkColor}
                  fill="rgba(225, 243, 255, 1)"
                />
              </AreaChart>
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
              header="Commission Recieved"
              viewDetails={
                <Link to="/commissionReceivedDetails" style={{ color: Colors.LinkColor }}>
                  ViewDetails
                </Link>
              }
              year="2024"
              pound="23,3453"
              
            >
              <BarChart
                width={730}
                height={250}
                data={data1}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="" style={{ display: "none" }} />
                <Bar dataKey="uv" fill="#069FFF" />
              </BarChart>
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
           
              header="Commission Shared"
              viewDetails={
                <Link to="/commissionSharedDetails" style={{ color: Colors.LinkColor }}>
                  ViewDetails
                </Link>
              }
              year="2024"
              pound="23,3453"
            >
              <BarChart
                width={730}
                height={250}
                data={data1}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
               
              >
                <CartesianGrid strokeDasharray="" style={{ display: "none" }} />
                <Bar dataKey="uv" fill="#FFC700" />
                
           
              </BarChart>
            
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
              header="Residual Received"
              viewDetails={
                <Link to="/residualReceivedDetails" style={{ color: Colors.LinkColor }}>
                  ViewDetails
                </Link>
              }
              year="January 2024"
              pound="23,3453"
            >
              <AreaChart
                width={400}
                height={210}
                data={data}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
              >
                <Area
                  type="bump"
                  dataKey="uv"
                  stroke="rgba(255, 199, 0, 1)"

                  fill="#FFF8E0"
                />
              </AreaChart>
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
              header="Residual Shared"
              viewDetails="ViewDetails"
              year="January 2024"
              pound="23,3453"
            >
              <AreaChart
                width={400}
                height={210}
                data={data}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
              >
                <Area
                  type="bump"
                  dataKey="uv"
                  stroke="rgba(119, 93, 166, 1)"
                  fill="#EEEBF4"
                />
              </AreaChart>
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        <Grid item xs={12} md={6}>
        <Application/>
        </Grid>
        <Grid item xs={12} md={6}>
          <GraphCustomBox>
            <CustomGraph
              header="Clawback"
              viewDetails="ViewDetails"
              year="2024"
              pound="23,3453"
            >
              <BarChart
                width={730}
                height={250}
                data={data1}
                margin={{
                  top: 5,
                  bottom: 20,
                }}
               
              >
                <CartesianGrid strokeDasharray="" style={{ display: "none" }} />
                <Bar dataKey="uv" fill="#FFC700" />
                
           
              </BarChart>
            
            </CustomGraph>
          </GraphCustomBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <SalesPerson/>
        </Grid>
      </Grid>
    </Box>
  );
};
