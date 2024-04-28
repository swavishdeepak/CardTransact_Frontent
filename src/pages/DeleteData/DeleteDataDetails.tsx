import React from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { Colors } from "../../utils/Colors";
import CustomButton from "../../components/CustomButton";
import UserDetails from "../../components/User/UserDetails";

 const DeleteDataDetails = () => {
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="EMPLOYEES DETAILS">
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              label={"Restore"}
              hoverColor={Colors.successColor}
              style={{
                backgroundColor: `${Colors.successColor}`,
                color: "#fff",
              }}
            />
            <CustomButton
              label={"Delete Permanently"}
              hoverColor={Colors.deletebtnColor}
              style={{
                backgroundColor: `${Colors.deletebtnColor}`,
                color: "#fff",
              }}
            />
          </Box>
        </CommonHeader>
        <UserDetails/>
      </CustomBox>
    </Box>
  );
};

export  default DeleteDataDetails;


