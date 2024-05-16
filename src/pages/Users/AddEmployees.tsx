import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomTextInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomAccordion from "../../components/MyCustom/CustomAccordian";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useSearchParams } from "react-router-dom";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { API_AXIOS_MULTIPART } from "../../http/interceptor";
import Apis from "../../utils/apis";
import CustomFileInput from "../../components/CustomFileInput";
import { getEmployees } from "../../redux/store/reducers/employee";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "react-toastify";

const AddEmployees = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const [bankStatements, setBankStatements] = useState([]);
  const [addressProof, setAddressProof] = useState([]);
  

  const { values, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "deepak",
        email: "deepak@gmail.com",
        countryCode: "91",
        phoneNumber: "7896543534",
        address: {
          address1: "noida",
          address2: "noida2",
          city: "delhi",
          country: "india",
          postalCode: "335001",
        },
        bankInfo: {
          bankName: "state Bank of india",
          nameOnBankAcc: "deepak",
          sortCode: "2324",
          AccNumb: "756533456788",
        },
      },
      onSubmit: async (values) => {
        const { ...rest } = values;
        const formData = new FormData();
        formData.append("data", JSON.stringify(rest));
        const addressProofArr = Object?.values(addressProof) || [];
        const bankStatementsArr = Object?.values(bankStatements) || [];

        addressProofArr?.forEach((proof) => {
          formData.append("addressProof", proof);
        });

        bankStatementsArr?.forEach((statement) => {
          formData.append("bankStatements", statement);
        });
        try {
          
          if (type === "employees" && id) {
            setLoading(true)
            const { data } = await API_AXIOS_MULTIPART.post(
              `${Apis.empUpdateById}/${id}`,
              formData
            );
            toast.success(data);
          } else {
            setLoading(true)
            const { data } = await API_AXIOS_MULTIPART.post(
              `${Apis.AddEmployee}`,
              formData
            );
            toast.success(data);
          }
         
          navigate("/viewEmployees")
          dispatch(getEmployees());
          
        } catch (err: any) {
          console.log(err);
          toast.error(err.response.data);
        }
        setLoading(false);
      },
    });

  const handleBack = () => {
    navigate("/viewEmployees");
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox style={{ marginTop: "1.5rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{ color: "#202020", fontWeight: "600", fontSize: "18px" }}
            >
              {id ? "Edit User" : " Add Employees"}
            </Typography>
            <Divider sx={{ border: "1px solid #77D177" }} />
          </Box>
          <CustomButton
            label={"Back"}
            onClick={handleBack}
            hoverColor="#898989"
            style={{
              backgroundColor: "#898989",
              color: "#fff",
            }}
          />
        </Box>
        <CustomAccordion summary="CONTACT INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Name"}
                placeholder="Enter Your Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Phone Number"}
                placeholder="Enter your Phone"
                name="phone"
                value={values.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Email Address"}
                placeholder="Enter Your Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion summary="ADDRESS INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"House.no/Flat.no/Bulding Name"}
                placeholder="Enter Your Email"
                name="address.address1"
                value={values.address.address1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Address Line 2"}
                placeholder="Enter your Email"
                name="address.address2"
                value={values.address.address2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"City"}
                placeholder="Enter Your City"
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Country"}
                placeholder="Enter Your Country"
                name="address.country"
                value={values.address.country}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Postal Code"}
                placeholder="Enter Your Postal Code"
                name="address.postalCode"
                value={values.address.postalCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <CustomFileInput
                label={"Address Proof"}
                file="addressProof"
                onFileChange={(e: any) => {
                  setAddressProof(e.target.files);
                }}
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion summary="BANK INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Bank Name"}
                placeholder="Enter Your Bank"
                name="bankInfo.bankName"
                value={values.bankInfo.bankName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                label={"Name on Bank Account"}
                placeholder="Enter the Name on Bank Acount"
                name="bankInfo.nameOnBankAcc"
                value={values.bankInfo.nameOnBankAcc}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Sort Code"}
                placeholder="Enter Your Sort Code"
                name="bankInfo.sortCode"
                value={values.bankInfo.sortCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                label={"Account Number"}
                placeholder="Enter Your Account Number"
                name="bankInfo.AccNumb"
                value={values.bankInfo.AccNumb}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
              <CustomFileInput
                label={"Bank Statements"}
                file="bankStatements"
                onFileChange={(e: any) => {
                  setBankStatements(e.target.files);
                }}
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <LoadButton
          type="submit"
          onClick={handleSubmit}
          loading={loading}
          style={{
            marginTop: 3,
            width: "25%",
          }}
        >
          {id ? "Save" : "Add"}
        </LoadButton>
      </CustomBox>
    </Box>
  );
};

export default AddEmployees;
