import React, { useState } from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Box } from "@mui/material";
import { Colors } from "../../utils/Colors";
import SingleCheckBox from "../MyCustom/SingleCheckBox";
import BasicSelect from "../BasicSelect";


interface ApplicationInfoProps {
  disableStyles?: boolean;
}

export const ApplicationInformation: React.FC<ApplicationInfoProps> = ({disableStyles = false}) => {
  const [bankStatement, setBankStatement] = useState([]);
  const [selectedValue, setSelectedValue] = useState<string>("Select Model");
  const [selectedValue1, setSelectedValue1] = useState<string>("Select Rental");
  const [selectedValue2, setSelectedValue2] = useState<string>("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeRental = (event: any) => {
    setSelectedValue1(event.target.value);
  };
  const handleChangeduration = (event: any) => {
    setSelectedValue2(event.target.value);
  };



  const Modeldata = [
    { value: "Select Model", label: "Select Model" },
    { value: "Select Model1", label: "Select Model1" },
    { value: "Select Model2", label: "Select Model2" },
  ];
  const Rentaldata = [
    { value: "Select Rental", label: "Select Model" },
    { value: "Select Model1", label: "Select Model1" },
    { value: "Select Model2", label: "Select Model2" },
  ];
  const Durationdata = [
    { value: "Select Model", label: "Select Model" },
    { value: "Select Model1", label: "Select Model1" },
    { value: "Select Model2", label: "Select Model2" },
  ];

  return (
    <Box
    sx={
      !disableStyles
        ? {
            p: 3,
            marginTop: "2rem",
            boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000002E",
            backgroundColor: "#FFFFFF",
            bgcolor: "#FFFFFF",
            borderRadius: "7.5px",
            border: `0.5px solid ${Colors.LinkColor}`,
          }
        : undefined
    }
      
    >
     {!disableStyles && <CommonHeader header="Application Information">
        <img src={NavIcon} alt=""></img>
      </CommonHeader>}

      <Grid container rowSpacing={4} columnSpacing={2} mt={disableStyles? "none": 2}>
        <Grid item xs={12} md={4.5}>
          <CustomTextInput
            label={"Salesperson Name"}
            placeholder="Enter Salesperson Name"
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <SingleCheckBox />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={4.5}>
          <CustomTextInput
            label={"Company Name"}
            placeholder="Enter Company Name"
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={4.5}>
        <BasicSelect
         label="Model"
          sx={{
            position: "relative",
            border: "1px solid rgba(220, 220, 220, 1)",
            padding: "10px 6px 0px 8px",
          }}
          name={"selectedValue"}
          value={selectedValue}
          handleChange={handleChange}
          size="small"
          items={Modeldata}
        />
         
        </Grid>
        <Grid item xs={12} md={4.5}>
        <BasicSelect
         label="Rental"
         
          sx={{
            position: "relative",
            border: "1px solid rgba(220, 220, 220, 1)",
            padding: "10px 6px 0px 8px",
          }}
          name={"selectedValue1"}
          value={selectedValue1}
          handleChange={handleChangeRental}
          size="small"
          items={Rentaldata}
        />
         
        </Grid>
        <Grid item xs={12} md={4.5}>
        <BasicSelect
         label="Contract Duration"
         placeholder="abdab"
          sx={{
            position: "relative",
            border: "1px solid rgba(220, 220, 220, 1)",
            padding: "10px 6px 0px 8px",
          }}
          name={"selectedValue2"}
          value={selectedValue2}
          handleChange={handleChangeduration}
          size="small"
          items={Durationdata}
        />
         
        </Grid>
      </Grid>
    </Box>
  );
};
