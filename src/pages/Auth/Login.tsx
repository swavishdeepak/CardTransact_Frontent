import React, { useState } from "react";
import { Box} from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";
import AuthCustomBox from "../../components/AuthCustomBox";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const pageRedirect = () => {
    navigate("/auth/ForgetPassword");
  };

  return (
    <AuthCustomBox header="Login">
      <Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
           
            gap: 10,
          }}
        >
          <CustomTextInput
            labelStyle={{
              color: "#000000",
              fontWeight: "600",
              fontSize: "15px",
              marginBottom: "2px",
            }}
            label={"User Name"}
            palceholder="Enter Your Email Address"
          />

          <CustomTextInput
            labelStyle={{
              color: "#000000",
              fontWeight: "600",
              fontSize: "15px",
              marginBottom: "2px",
            }}
            label={"Password"}
            palceholder={"Enter your Password"}
          />

          <CustomText
            onClick={pageRedirect}
            text="Forgot Password?"
            style={{
              color: "#589E58",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              textAlign: "left",
              width: "40%",
            }}
          ></CustomText>

          <LoadButton
            type="submit"
            loading={loading}
            variant="contained"
            style={{
              width: "100%",
              marginTop: 5,
              textTransform: "none",
            }}
          >
            Login
          </LoadButton>
        </form>
      </Box>
    </AuthCustomBox>
  );
};
