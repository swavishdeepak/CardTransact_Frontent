import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { GraphCustomBox } from "../../GraphCustomBox";
import { CustomGraph } from "../../Reports/Graph/CustomGraph";

interface DataItem {
  value: number;
  label: string;
}

const data: DataItem[] = [
  { value: 5, label: "Approved" },
  { value: 10, label: "Review" },
  { value: 15, label: "Pending" },
  { value: 20, label: "Rejected" },
];

const size = {
  width: 300,
  height: 150,
};

const Application: React.FC = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  return (
    <GraphCustomBox style={{padding: 2}}>
      <CustomGraph
        header="Application"
        showPoundIcon={false}
        year="January 2024"
      >
      
        <PieChart
          colors={["#775DA6", "#70B6C1", "#FFB1B7", "#589E58"]}
          series={[
            {
              arcLabel: (item: DefaultizedPieValueType) =>
                `${((item.value / total) * 100).toFixed(0)}%`,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: "10px",
              textAlign: "center",
              fontWeight: "400",
            },
          }}
          {...size}
        />
       
      </CustomGraph>
    </GraphCustomBox>
  );
};

export default Application;
