import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomText from "../../CustomText";
import { LineChart } from "@mui/x-charts/LineChart";
import Vector from "../../../assets/Vector.svg";
import BasicSelect from "../../BasicSelect";
import { CustomBox } from "../../MyCustom/CustomBox";

export const Revenue = () => {
  const [selectedValue, setSelectedValue] = useState("weekly");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const revenue = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  return (
    <CustomBox
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between",alignItems: "end" }}>
          <Typography
            sx={{ color: "#202020", fontWeight: "600", fontSize: { xs: "14px", md: "18px" },  }}
           
          > Revenue</Typography>
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
            items={revenue}
          />
        </Box>
        <Box sx={{ display: "flex", marginTop: "1rem" }}>
          <img src={Vector} alt="" />
          <CustomText
            text="157,346.34"
            style={{ color: "#202020", fontSize: "20px", fontWeight: "700" }}
          ></CustomText>
        </Box>
        <Box>
          <CustomText
            text="January 2024"
            style={{ color: "#898989", fontSize: "12px", fontWeight: 400 }}
          ></CustomText>
          <Box sx={{ width: "100%", maxWidth: "500px" }}>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              // width={500}
              height={265}
            />
          </Box>
        </Box>
      </Box>
    </CustomBox>
  );
};
