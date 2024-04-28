import React, { useState } from "react";
import { Box } from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomTextInput from "../../components/CustomInput";
import AuthCustomBox from "../../components/AuthCustomBox";
import { resetPassword } from "../../utils/Validation";
import { Formik } from "formik";

 const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleReset = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <AuthCustomBox header="Reset Password">
        <Box sx={{ marginTop: "2rem" }}>
          <Formik
            initialValues={values}
            validationSchema={resetPassword}
            onSubmit={handleReset}
          >
            {({ values, errors, handleSubmit, handleChange }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 15,
                }}
              >
                <CustomTextInput
                  label={"New Password"}
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  placeholder="Enter Your New Password"
                  error={errors.newPassword}
                />
                <CustomTextInput
                  label={"Confirm Password"}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter Your New Password"
                  error={errors.confirmPassword}
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
            )}
          </Formik>
        </Box>
      </AuthCustomBox>
    </>
  );
};

export default ResetPassword;
