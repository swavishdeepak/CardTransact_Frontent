import React from "react";

import { BarChart, CartesianGrid, Bar, AreaChart, Area } from "recharts";
import { GraphCustomBox } from "../../GraphCustomBox";
import { CustomGraph } from "../../Reports/Graph/CustomGraph";
import { Colors } from "../../../utils/Colors";

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
export const Revenue = () => {
  return (
    <GraphCustomBox
      style={{padding: 2, height: "100%"}}
     >
      <CustomGraph
        header="Revenue"
       

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
  );
};
