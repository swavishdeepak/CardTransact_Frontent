import React, { useState } from "react";
import { Box} from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomText from "../../components/CustomText";
import OtpInput from "react-otp-input";
import Divider from "@mui/material/Divider";
import AuthCustomBox from "../../components/AuthCustomBox";

export const GoogleAuthentication = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/auth/login");
  };

  const redirectforgetPassword = () => {
    navigate("/auth/ForgetPassword");
  };

  return (
    <>
      <AuthCustomBox header="google">
        <Box sx={{textAlign: "center"}}>
          <CustomText
            style={{
              color: "#04609A",
              fontWeight: "700",
              fontFamily: "sans-serif",
              fontSize: "2rem",
            }}
            text="Authentications"
          ></CustomText>
          <CustomText
            style={{ color: "#000000", fontWeight: "600" }}
            text="OTP"
          ></CustomText>
          <CustomText
            style={{ color: "#000000", fontSize: "0.8rem", fontWeight: "500" }}
            text=" Kindly Enter The Varification code Sent to your Registered
                  Email Id"
          ></CustomText>
          <OtpInput
            containerStyle={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              marginTop: 6,
            }}
            inputStyle={{
              width: "30px",
              height: "30px",
              fontSize: "15px",
              border: "0.9px solid #DCDCDC",
              borderRadius: "7.5px",
            }}
            value={otp}
            onChange={setOtp}
            numInputs={6}
            // onChange={(otp) =>
            //   handleChange({ target: { name: "otp", value: otp } })
            // }
            renderInput={(props) => <input {...props} />}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <CustomText
              text="Resend"
              style={{
                color: "#589E58",
                fontWeight: "500",
                fontSize: "0.7rem",
                marginTop: "0.5rem",
              }}
            ></CustomText>
            <CustomText
              text="in 00:45"
              style={{
                color: "#000000",
                fontWeight: "500",
                fontSize: "0.7rem",
                marginTop: "0.5rem",
              }}
            ></CustomText>
          </Box>
          <LoadButton
            onClick={redirectforgetPassword}
            type="submit"
            loading={loading}
            variant="contained"
            style={{
              width: "100%",
              marginTop: 5,
              textTransform: "none",
            }}
          >
            Authenticate
          </LoadButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",

              marginTop: "1rem",
            }}
          >
            <CustomText
              text="Return To Login"
              onClick={redirectLogin}
              style={{
                color: "#589E58",
                width: "35%",
                fontSize: "12px",
                cursor: "pointer",
              }}
            />
            <Divider sx={{ width: "35%", border: "0.1px solid #589E58" }} />
          </Box>
        </Box>
      </AuthCustomBox>
    </>
  );
};
