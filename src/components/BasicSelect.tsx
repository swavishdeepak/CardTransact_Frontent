import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { Colors } from "../utils/Colors";
import { SelectChangeEvent } from "@mui/material";

interface BasicSelectProps {
  value: string;
  label?: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
  handleBlur?: () => void;
  items: { value: string; label: string }[];
  sx?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  name?: string;
  [key: string]: any;
  placeholder?: string; // Add placeholder prop
  placeholderStyle?: React.CSSProperties;
  valueKey?: string;
  labelKey?: string;
}

const BasicSelect: React.FC<BasicSelectProps> = ({
  value,
  label,
  handleChange,
  handleBlur,
  items,
  labelStyle,
  sx,
  placeholder,
  placeholderStyle = {
    color: "#898989",
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "7.5px",
  },
  name,
  valueKey = 'value',
  labelKey = 'label',
  ...props
}) => {
  return (
    <Box sx={{ minWidth: 100, sx }}>
      <Typography
        style={{
          marginTop: "1rem",
          color: "#000000",
          fontWeight: "600",
          fontSize: "15px",
          ...labelStyle,
        }}
      >
        {label}
      </Typography>
      <FormControl fullWidth {...props}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          input={
            <InputBase
              sx={{
                marginTop: "4px",
                borderRadius: 1,
                borderColor: "1px solid #DCDCDC",
                ...sx,
                ...placeholderStyle,
              }}
              placeholder={placeholder}
            />
          }
        >
          {items.map((item) => (
            <MenuItem value={item[valueKey]} key={item[labelKey]}>
              {item[labelKey]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
