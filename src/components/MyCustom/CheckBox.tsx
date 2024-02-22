import * as React from "react";
import { styled } from "@mui/material/styles";
import { FormControlLabel, Checkbox } from "@mui/material";
import { CheckboxProps } from "@mui/material/Checkbox";

interface BpCheckboxProps extends CheckboxProps {
  label?: string;
  iconStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}


const BpIcon = styled("span")(({ theme, iconStyle,labelStyle }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  border: "1px solid #DCDCDC",
  backgroundColor: theme.palette.mode === "dark" ? "" : "#fff",
  ...iconStyle,
  ...labelStyle

}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#77D177",

});

const CheckBox = (props: BpCheckboxProps) => {
  const { label, iconStyle,labelStyle, ...checkboxProps} = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...checkboxProps}
        //   sx={{
        //     "&:hover": { bgcolor: "transparent" },
        //   }}
          disableRipple
          color="default"
          checkedIcon={<BpCheckedIcon iconStyle={iconStyle} />}
          icon={<BpIcon iconStyle={iconStyle} />}
          inputProps={{ "aria-label": "Checkbox demo" }}
        />
      }
      label={<span style={labelStyle}>{label}</span>}
    />
  );
};

export default CheckBox;
