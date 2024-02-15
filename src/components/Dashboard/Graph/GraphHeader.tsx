import React, { useState,ChangeEvent } from "react";
import { Box, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BasicDialog from "../../BasicDialog";
import BasicSelect from "../../BasicSelect";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface GraphHeaderProps {
  title: string;
  date?: string;
  style?: React.CSSProperties;
}

const GraphHeader: React.FC<GraphHeaderProps> = ({ style, title, date }) => {
  const [selectedValue, setSelectedValue] = useState("weekly");

  

  const booking = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const handleChange = (event: SelectChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };
  return (
    <Box sx={{ ...style }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
        >
          {title}
        </Typography>
        <BasicSelect
          sx={{borderRadius: "10px", width: "100%", height: "50%"}}
          name={"selectedValue"}
          label={"Booking"}
          value={selectedValue}
          // handleChange={handleChange}
          size="small"
          items={booking}
        />
      </Box>
      <Typography
        sx={{
          color: "#898989",
          fontSize: "12px",
          fontWeight: 400,
          marginTop: "10px",
          ...style,
        }}
      >
        {date}
      </Typography>
    </Box>
  );
};

export default GraphHeader;
