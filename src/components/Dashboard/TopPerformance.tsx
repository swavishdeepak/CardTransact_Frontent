import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import BasicSelect from "../BasicSelect";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import messageIcon from "../../assets/messageIcon.svg";
import Vector from "../../assets/Vector.svg";
import { CustomBox } from "../MyCustom/CustomBox";
import CircularProgress from "@mui/material/CircularProgress";

interface Employee {
  serialNo: string;
  image: string;
  name: string;
  icon: string;
  message: string;
  sale: string;
  company: string;
  successRate: string;
}

interface TopPerformanceProps {}

const TopPerformance: React.FC<TopPerformanceProps> = () => {
  const [selectedValue, setSelectedValue] = useState<string>("weekly");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const application = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const performanceData: Employee[] = [
    {
      serialNo: "1",
      image: messageIcon,
      name: "Deepak",
      icon: Vector,
      message: "message",
      sale: "39",
      company: "company",
      successRate: "96",
    },
    {
      serialNo: "2",
      image: messageIcon,
      name: "Deepak",
      icon: Vector,
      message: "message",
      sale: "39",
      company: "company",
      successRate: "50",
    },
    {
      serialNo: "3",
      image: messageIcon,
      name: "Deepak",
      icon: Vector,
      message: "message",
      sale: "39",
      company: "company",
      successRate: "70",
    },
    {
      serialNo: "4",
      image: messageIcon,
      name: "Deepak",
      icon: Vector,
      message: "message",
      sale: "39",
      company: "company",
      successRate: "90",
    },
    {
      serialNo: "5",
      image: messageIcon,
      name: "Deepak",
      icon: Vector,
      message: "message",
      sale: "39",
      company: "company",
      successRate: "90",
    },
  ];

  return (
    <CustomBox>
      <Box sx={{ display: "flex", justifyContent: "space-between",alignItems: "end" }}>
        <Box>
          <Typography
            sx={{ color: "#202020", fontWeight: "600",fontSize: { xs: "14px", md: "18px" }, }}
          >
            Top Performance
          </Typography>
          <Typography
            sx={{ color: "#898989", fontWeight: "400", fontSize: "10px" }}
          >
            January
          </Typography>
        </Box>
        <BasicSelect
          sx={{
            borderRadius: 1,
            backgroundColor: "#FCFAFA",
            border: "1px solid #898989",
            padding: "0px 6px 0px 8px",
          }}
          name={"selectedValue"}
          value={selectedValue}
          handleChange={handleChange}
          size="small"
          items={application}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#202020",
          marginTop: "1.2rem",

        }}
      >
        <Box sx={{ display: "flex", gap: {xs:2, md:4} }}>
          <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
            No
          </Typography>
          <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
            Employees Name
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
          Sale
        </Typography>
        <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
          Company/Individual
        </Typography>
        <Typography sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500" }}>
          Success Rate
        </Typography>
      </Box>
      <Divider sx={{ marginTop: "8px", color: "#DCDCDC" }} />
      {performanceData.length > 0 &&
        performanceData.map((item) => {
          return (
            <Box
              key={item.serialNo}
              sx={{
                display: "flex",
                marginTop: "10px",
                backgroundColor: "#F9F9F9",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: {xs:2, md:4} }}>
                <Typography
                  sx={{
                    color: "#202020",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  {item.serialNo}
                </Typography>
                <Box sx={{ display: "flex", gap: 0 }}>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={item.image} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <Box>
                    <Typography
                      sx={{
                        color: "#202020",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <img
                        src={item.icon}
                        alt=""
                        style={{
                          width: "12%",
                          height: "12%",
                         
                          color: "#898989",
                          marginTop: "2px",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#898989",
                          fontWeight: "400",
                          fontSize: "10px",
                        }}
                      >
                        {item.message}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "#898989",
                  fontWeight: "400",
                  fontSize: "10px",
                  display: "flex",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
              >
                {item.sale}
              </Typography>
              <Typography
                sx={{ color: "#898989", fontWeight: "400", fontSize: "10px", marginTop: "10px", }}
              >
                {item.company}
              </Typography>
              <Box sx={{display:"flex", gap:1, marginTop: "10px",}}>
                <CircularProgress
                  style={{width: "14px", height: "14px"}}
                  variant="determinate"
                  value={parseInt(item.successRate)}
                />
                <Typography
                  sx={{ color: "#898989", fontWeight: "400", fontSize: "10px" }}
                >
                  {/* {item?.successRate} */}
                  {`${Math.round(parseInt(item.successRate))}%`}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </CustomBox>
  );
};

export default TopPerformance;
