import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputBase from '@mui/material/InputBase';
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface BasicSelectProps {
  value: string;
  label?: string;
  handleChange?: (event: SelectChangeEvent<string>) => void;
  handleBlur?: () => void;
  items?: { value: string; label: string }[];
  sx?: React.CSSProperties;
  name?: string;
  [key: string]: any; 
}

const BasicSelect: React.FC<BasicSelectProps> = ({
  value,
  label,
  handleChange,
  handleBlur,
  items,
  sx,
  name,
  ...props
}) => {
  return (
    <Box sx={{ minWidth: 100, sx }}>
      <FormControl fullWidth {...props}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={handleChange}
          onBlur={handleBlur}
          input={
            <InputBase
              sx={{
               ...sx
               
              }}
            />
          }
        >
          {items?.map((item) => (
            <MenuItem value={item.value} key={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
