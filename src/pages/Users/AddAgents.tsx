import React, { useState } from "react";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomTextInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomAccordion from "../../components/MyCustom/CustomAccordian";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { LoadButton } from "../../components/LoadButton";
import { useSearchParams} from "react-router-dom";
import CheckBox from "../../components/MyCustom/CheckBox";
import { SalesPerson } from "../../components/Reports/TopSalesPersonList/SalesPerson";
import BasicSelect from "../../components/BasicSelect";

export const AddAgents = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(false);

  const [selectedTier, setSelectedTier] = useState<string>("");
  const [selectedManger, setSelectedManger] = useState<string>("");
  const [selectedReporting, setSelectedReporting] = useState<string>("");

  const handleChangeTier = (event: SelectChangeEvent<string>) => {
    setSelectedTier(event.target.value);
  };

  const handleChangeManger = (event: SelectChangeEvent<string>) => {
    setSelectedManger(event.target.value);
  };
  const handleChangeReporting = (event: SelectChangeEvent<string>) => {
    setSelectedReporting(event.target.value);
  };

  const selectTier = [
    { value: "Tier", label: "tier1" },
    { value: "Tier2", label: "Tier2" },
    
  ];
  const selectManger = [
    { value: "manager", label: "Manager1" },
   
    
  ];
  const selectReportingAgent = [
    { value: "reporting1", label: "reporting1" },
    
    
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox style={{ marginTop: "1.5rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
            >
             {id ? "Edit Agent": "Add Agent"}
            </Typography>
            <Divider sx={{ border: "1px solid #77D177" }} />
          </Box>
          <CustomButton
            label={"Back"}
            hoverColor="#898989"
            style={{
              backgroundColor: "#898989",
              color: "#fff",
              textTransform: "none",
              height: "1.6rem",
              fontWeight: "500",
            }}
          />
        </Box>
        <CustomAccordion summary="CONTACT INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={0}>
            <Grid item xs={12} md={5}>
              <CustomTextInput label={"Name"} placeholder="Enter Your Name" />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Phone Number"}
                placeholder="Enter your Phone"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Email Address"}
                placeholder="Enter Your Email"
              />
            </Grid>
          </Grid>
          <Grid container rowSpacing={2} columnSpacing={2} mt={0}>
            <Grid item xs={12} md={6}>
              <Typography>
                Is SalesPerson From a Company or Individual
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CheckBox label="From a Company" />
                <CheckBox label="Is An Individual" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextInput
                label={"Company Name"}
                placeholder="Enter Company Name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicSelect
                label="Select Tier"
                placeholder="Select"
                sx={{
                  width: "100%",
                  position: "relative",
                  border: "1px solid rgba(220, 220, 220, 1)",
                  padding: "10px 6px 0px 8px",
                }}
                name={"selectedValue2"}
                value={selectedTier}
                handleChange={handleChangeTier}
                size="small"
                items={selectTier}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicSelect
                label="Select Manager"
                placeholder="Select"
                sx={{
                  width: "100%",
                  position: "relative",
                  border: "1px solid rgba(220, 220, 220, 1)",
                  padding: "10px 6px 0px 8px",
                }}
                name={"selectedValue2"}
                value={selectedManger}
                handleChange={handleChangeManger}
                size="small"
                items={selectManger}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BasicSelect
                label="Select Reporting Agent"
                placeholder="Select"
                sx={{
                  width: "100%",
                  position: "relative",
                  border: "1px solid rgba(220, 220, 220, 1)",
                  padding: "10px 6px 0px 8px",
                }}
                name={"selectedValue2"}
                value={selectedReporting}
                handleChange={handleChangeReporting}
                size="small"
                items={selectReportingAgent}
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion summary="ADDRESS INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={0}>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"House.no/Flat.no/Bulding Name"}
                placeholder="Enter Your Email"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Address Line 2"}
                placeholder="Enter your Email"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput label={"City"} placeholder="Enter Your City" />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput label={"County"} placeholder="Enter Your County" />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Country"}
                placeholder="Enter Your Country"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Postal Code"}
                placeholder="Enter Your Postal Code"
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion summary="BANK INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={0}>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Bank Name"}
                placeholder="Enter Your Bank"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Name on Bank Account"}
                placeholder="Enter the Name on Bank Acount"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Sort Code"}
                placeholder="Enter Your Sort Code"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Account Number"}
                placeholder="Enter Your Account Number"
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <LoadButton
          type="submit"
          loading={loading}
          style={{
            marginTop: 3,
            width: "20%"
          }}
        >
          {id ? "Save": "Add"}
        </LoadButton>
      </CustomBox>
    </Box>
  );
};
