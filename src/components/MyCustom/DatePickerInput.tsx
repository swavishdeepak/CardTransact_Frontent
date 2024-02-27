import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@mui/material";

interface DatePickerPickerProps {
  onChange?: (date?: Date | null) => void;
  value?: Date | null;
  placeholder?: string;
  inputStyle?: React.CSSProperties;
  borderColor?: string; // Add borderColor prop
}

const DatePickerPicker: React.FC<DatePickerPickerProps> = ({
  onChange,
  placeholder = "Select Date",
  borderColor = "#ced4da", // Default border color if not provided
}) => {
  const CustomInput = React.forwardRef<HTMLInputElement, { onClick: () => void }>(
    ({ onClick }, ref) => (
      <TextField
        variant="outlined"
        margin="normal"
        onClick={onClick}
        placeholder={placeholder}
        InputProps={{
          style: { border: "1px solid red" }, // Apply border color
        }}
        inputRef={ref}
      />
    )
  );

  return (
    <DatePicker
      onChange={onChange}
      placeholderText={placeholder}
      customInput={<CustomInput />}
    />
  );
};

export default DatePickerPicker;
