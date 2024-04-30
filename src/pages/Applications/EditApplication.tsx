import React from "react";
import { Box } from "@mui/material";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import { Header } from "../../components/Dashboard/Header";
import CustomAccordion from "../../components/MyCustom/CustomAccordian";
import { MerchantInformation } from "../../components/Application/MerchantInformation";
import { MerchantDetails } from "../../components/Application/MerchantDetails";
import { BankInformation } from "../../components/Application/BankInformation";
import { ApplicationInformation } from "../../components/Application/ApplicationInformation";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";

const EditApplication = () => {
  const navigate = useNavigate()

  const handleBack = ()=>{
    navigate("/viewApplications")
  }

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Edit Applications">
          <CustomButton
            label="Back"
            hoverColor= {Colors.editColor}
            onClick={handleBack}
            style={{
              backgroundColor: Colors.editColor,
              color: "#fff",
            }}
          />
        </CommonHeader>
        <CustomAccordion
          summary={"MERCHNAT INFORMATION"}
        
        >
            <MerchantInformation  disableStyles/>

        </CustomAccordion>
        <CustomAccordion
          summary={"MERCHANT ADDRESS INFORMATION"}
        >
            <MerchantDetails disableStyles/>

        </CustomAccordion>
        <CustomAccordion
           summary={"MERCHANT BANK INFORMATION"}
        >
            <BankInformation  disableStyles/>

        </CustomAccordion>
        <CustomAccordion 
          summary={"SALESPERSON INFORMATION"}
        >
            <ApplicationInformation  disableStyles/>

        </CustomAccordion>

        <LoadButton
           style={{
            marginTop: "1.5rem",
            backgroundColor: Colors.successColor
           }}
        >
            Save
        </LoadButton>
        
      </CustomBox>

      
    </Box>
  );
};

export default EditApplication;
