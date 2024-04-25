import React from "react";

import { BarChart, CartesianGrid, Bar, XAxis,Label } from "recharts";
import { GraphCustomBox } from "../../GraphCustomBox";
import { CustomGraph } from "../../Reports/Graph/CustomGraph";
import { Typography } from "@mui/material";

const data1 = [
  {
    name: "Target",
    uv: 9000,
    pv: 6000,
    pt: 5000,
    pw: 8000
  },
  {
    name: "Last Week",
    uv: 9000,
    pv: 6000,
    pt: 5000,
    pw: 8000
  },
  {
    name: "Last Month",
    uv: 9000,
    pv: 6000,
    pt: 5000,
    pw: 8000
  },
  

 
 
];

export const Sales = () => {
  return (
    <GraphCustomBox
      style={{
        padding: 2,
        height: "100%"

      }}
    >
      <CustomGraph header="Sales" showPoundIcon={false}>
        <BarChart
          width={730}
          height={250}
          data={data1}
          margin={{
            top: 5,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{
              fill: "#202020",
              fontSize: "11px",
              fontWeight: "400",
            }}
            
          >
             
           
          </XAxis>
          <CartesianGrid strokeDasharray="" style={{ display: "none" }} />
          <Bar dataKey="uv" fill="rgba(119, 93, 166, 1)" />
          <Bar dataKey="pv" fill="rgba(119, 93, 166, 1)" />
          <Bar dataKey="pt" fill="rgba(119, 93, 166, 1)" />
          <Bar dataKey="pw" fill="rgba(119, 93, 166, 1)" />
          
        </BarChart>
       
      </CustomGraph>
    </GraphCustomBox>
  );
};
