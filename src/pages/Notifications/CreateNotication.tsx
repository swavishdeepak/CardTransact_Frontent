import React, { useState } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import { Grid } from "@mui/material";
import BasicSelect from "../../components/BasicSelect";
import CustomTextInput from "../../components/CustomInput";
import { LoadButton } from "../../components/LoadButton";

export const CreateNotification: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("aquirer");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const aquirer = [
    { value: "aquirer", label: "aquirer" },
    { value: "aquirer1", label: "aquirer1" },
    { value: "aquirer2", label: "aquirer2" },
  ];

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Create Notification">
          <CustomButton
            label="Cancel"
            hoverColor={Colors.deletebtnColor}
            style={{ backgroundColor: Colors.deletebtnColor, color: "#fff" }}
          />
        </CommonHeader>
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
            marginTop: "1.5rem",
          }}
        >
          <CommonHeader header="Notification Information" />
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            mt={1}
          >
            <Grid item xs={12} sm={4}>
              <BasicSelect
                sx={{
                  backgroundColor: "#FCFAFA",
                  border: "1px solid #898989",
                  padding: 1,
                  width: "100%",
                  fontSize: 12,
                }}
                placeholder="Select Aquirer"
                label="Select Aquirer"
                name={"selectedValue"}
                value={selectedValue}
                handleChange={handleChange}
                size="small"
                items={aquirer}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextInput
                label="Title of Notification"
                placeholder="Enter Title Of Notification"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomTextInput
                label="Message"
                rows={4}
                multiline={true}
                placeholder="Enter Title Of Notification"
              />
            </Grid>
          </Grid>
        </CustomBox>
        <LoadButton style={{ marginTop: "1.5rem" }}>Send</LoadButton>
      </CustomBox>
    </Box>
  );
};
