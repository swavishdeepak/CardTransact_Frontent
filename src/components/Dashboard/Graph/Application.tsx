import React, { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";
import BasicSelect from "../../BasicSelect";
import { CustomBox } from "../../MyCustom/CustomBox";

export default function Application() {
  const [selectedValue, setSelectedValue] = useState("weekly");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const application = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];
  return (
    <CustomBox
    >
      <Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
            >
              Applications
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
          <Typography
            sx={{
              color: "#898989",
              fontSize: "12px",
              fontWeight: 400,
              marginTop: "10px",
            }}
          >
            January 2024
          </Typography>
        </Box>
        <Box sx={{ width: "100%", maxWidth: "500px" }}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 30,
                data: [
                  { id: 0, value: 10, label: "", color: "#70B6C1" },
                  { id: 1, value: 15, label: "", color: "#FFB1B7" },
                  { id: 2, value: 20, label: "", color: "#775DA6" },
                  { id: 3, value: 20, label: "" },
                ],
              },
            ]}
            // width={300}
            height={300}
          />
        </Box>
      </Box>
    </CustomBox>
  );
}
