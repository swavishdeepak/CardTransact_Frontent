import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import CustomText from "../../CustomText";
import saleIcon from "../../../assets/saleIcon.svg";
import BasicSelect from "../../BasicSelect";
import { CustomBox } from "../../MyCustom/CustomBox";

interface XAxisConfig {
  scaleType: "band";
  data: string[];
  categoryGapRatio: number;
  barGapRatio: number;
}

export const Sales = () => {
  const [selectedValue, setSelectedValue] = useState("weekly");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const application = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const xAxisConfig: XAxisConfig[] = [
    {
      scaleType: "band",
      data: ["Target", "Last Week", "Last Month"],
      categoryGapRatio: 0.5,
      barGapRatio: 0.4,
    },
  ];

  return (
    <CustomBox
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
          >
            Sales
          </Typography>
          <BasicSelect
            sx={{
              borderRadius: 1,
              position: "relative",
              backgroundColor: "#FCFAFA",
              border: "1px solid #898989",
              fontSize: 12,
              padding: "0px 6px 0px 8px",
            }}
            name={"selectedValue"}
            value={selectedValue}
            handleChange={handleChange}
            size="small"
            items={application}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "500px" }}>
          <BarChart
            xAxis={xAxisConfig}
            series={[
              { data: [4, 3, 5], color: "#775DA6" },
              { data: [1, 6, 3], color: "#775DA6" },
              { data: [2, 5, 6], color: "#775DA6" },
            ]}
            //width={350}
            height={280}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "10px 2rem",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img src={saleIcon} alt="" />
              <CustomText
                style={{ color: "#70B6C1", fontSize: "10px" }}
                text="234"
              ></CustomText>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img src={saleIcon} alt="" />
              <CustomText
                style={{ color: "#70B6C1", fontSize: "10px" }}
                text="234"
              ></CustomText>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <img src={saleIcon} alt="" />
              <CustomText
                style={{ color: "#70B6C1", fontSize: "10px" }}
                text="234"
              ></CustomText>
            </Box>
          </Box>
        </Box>
      </Box>
    </CustomBox>
  );
};
