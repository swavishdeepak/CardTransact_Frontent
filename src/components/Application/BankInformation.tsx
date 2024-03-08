import React, {useState} from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";
import CustomFileInput from "../CustomFileInput";

interface BankInformationProps {
  disableStyles?: boolean;
}


export const BankInformation: React.FC<BankInformationProps> = ({disableStyles = false}) => {
    const [bankStatement, setBankStatement] = useState([]);
  
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
      {!disableStyles &&<CommonHeader header="Bank Information">
        <img src={NavIcon} alt=""></img>
      </CommonHeader>}
      
      <Grid container rowSpacing={4} columnSpacing={2} mt={disableStyles? "none": 2}>
        <Grid item xs={12} md={5}>
          <CustomTextInput label={"Name Of Bank"} placeholder="Enter Name Of Bank" />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput label={"Name On Bank Account"} placeholder="Enter Name of Bank Account" />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput label={"Account Number"} placeholder="Enter Account Number" />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput label={"Sort Code"} placeholder="Enter Sort Code " />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Bank Statement"
            placeholder="Upload Any Utility Document"
            onFileChange={(e:any) => {
              setBankStatement(e.target.files[0]);
              }}
          />
        </Grid>
      </Grid>
    
    </Box>
  );
};
