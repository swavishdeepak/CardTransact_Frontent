import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomTextInput from "../../components/CustomInput";
import CheckBox from "../../components/MyCustom/CheckBox";
import AuthCustomBox from "../../components/AuthCustomBox";
import { userLogin } from "../../redux/store/actions/authAction";
import { loginSchema } from "../../utils/Validation";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../../redux/hooks";


const Login = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const {verifiedUser} = useAppSelector((state) => state.verifiedUser); 
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
    
  });

   
  useEffect(() => {
    if (verifiedUser?.data?.token) {
      navigate("/dashboard");
    }
   }, [verifiedUser]);

  return (
    <AuthCustomBox header="Login">
      <Box>
        <Formik
          initialValues={values}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            try {
              setLoading(true); 
              const { type } = await dispatch(userLogin(values));
              if (type === "user/login/fulfilled") {
                navigate(
                  `/auth/googleAuthentication?email=${values.email}&password=${values.password}`
                );
              }
            } catch (error) {
              console.error("Error logging in:", error);
            } finally {
              setLoading(false); 
            }
          }}
        >
          {({ values, errors, handleSubmit, handleChange }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Box>
                <Typography
                  sx={{ color: "#000000", fontSize: "20px", fontWeight: "600" }}
                >
                  Select Role
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <CheckBox
                    label="Employee"
                    iconStyle={{ width: "10px", height: "10px" }}
                    labelStyle={{
                      fontSize: "15px",
                      color: "#898989",
                      fontWeight: "400",
                    }}
                    
                   
                  />
                  <CheckBox
                    label="Agent"
                    iconStyle={{ width: "10px", height: "10px" }}
                    labelStyle={{
                      fontSize: "15px",
                      color: "#898989",
                      fontWeight: "400",
                    }}
                   
                   
                  />
                </Box>
              </Box>
              <CustomTextInput
                label="User Name"
                name="email"
                placeholder="Enter Your Email Address"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <CustomTextInput
                label="Password"
                name="password"
                placeholder="Enter your Password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
              />

              <Link
                to="/auth/ForgetPassword"
                style={{
                  color: "#589E58",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "inline",
                  width: "fit-content",
                }}
              >
                Forgot Password?
              </Link>
              <LoadButton
                type="submit"
                loading={loading}
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: 1,
                  textTransform: "none",
                }}
              >
                Login
              </LoadButton>
            </form>
          )}
        </Formik>
      </Box>
    </AuthCustomBox>
  );
};
export default Login;
