import React, { useState } from "react";
import { Box} from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomTextInput from "../../components/CustomInput";
import AuthCustomBox from "../../components/AuthCustomBox";

export const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <AuthCustomBox header="Reset Password">
        <Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "0px 20px",
            }}
          >
            <CustomTextInput
              labelStyle={{
                color: "#000000",
                fontWeight: "600",
                fontSize: "15px",
                marginBottom: "2px",
              }}
              label={"New Password"}
              palceholder="Enter Your New Password"
            />
            <CustomTextInput
              labelStyle={{
                color: "#000000",
                fontWeight: "600",
                fontSize: "15px",
                marginBottom: "2px",
              }}
              label={"confirm Password"}
              palceholder="Re-enter Your New Password"
            />

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
              Save
            </LoadButton>
          </form>
        </Box>
      </AuthCustomBox>
    </>
  );
};
