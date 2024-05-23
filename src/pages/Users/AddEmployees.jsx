import React, { useEffect, useState } from "react";
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
import { API_AXIOS, API_AXIOS_MULTIPART } from "../../http/interceptor";
import Apis from "../../utils/apis";
import CustomFileInput from "../../components/CustomFileInput";
import { toast } from "react-toastify";
import { useEmployeeQuery } from "./getQuery/useAgentQuery";
import {
  getFilteredObject,
  
} from "../../utils/commonMethods";

const AddEmployees = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { refetch } = useEmployeeQuery(id);
  const [employee, setEmployee] = useState({});
  const type = searchParams.get("type");
  const [bankStatements, setBankStatements] = useState([]);
  const [addressProof, setAddressProof] = useState([]);

  const {
    values,
    setFieldValue,
    handleChange,
    setValues,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      address: {
        address1: "",
        address2: "",
        city: "",
        county: "",
        country: "",
        postalCode: "",
      },
      bankInfo: {
        bankName: "",
        nameOnBankAcc: "",
        sortCode: "",
        AccNumb: "",
      },
    },
    onSubmit: async (values) => {
      setLoading(true);

      const formData = new FormData();
      const addressProofArr = Object?.values(addressProof) || [];
      const bankStatementsArr = Object?.values(bankStatements) || [];

      addressProofArr?.forEach((proof) => {
        formData.append("addressProof", proof);
      });

      bankStatementsArr?.forEach((statement) => {
        formData.append("bankStatements", statement);
      });
      try {
        if (id) {
          const changedValues = getFilteredObject(employee, values);
          // const formData = new FormData();
          formData.append("data", JSON.stringify(changedValues));
          const { data } = await API_AXIOS_MULTIPART.post(
            `${Apis.empUpdateById}/${id}`,
            formData
          );
          toast.success(data?.message);
        } else {
          formData.append("data", JSON.stringify(values));

          const { data } = await API_AXIOS_MULTIPART.post(
            `${Apis.AddEmployee}`,
            formData
          );
          toast.success("Employee Add Successfully");
        }

        navigate("/viewEmployee");
        refetch();
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.toString());
      }
      setLoading(false);
    },
  });

  const getEmployee = async () => {
    try {
      const { data } = await API_AXIOS.get(`${Apis.getEmpDetailsById}/${id}`);
      let updatingData = {
        bankStatements: [data?.data?.bankStatements],
        addressProof: [data?.data?.addressProofDoc],
        name: data?.data?.name,
        email: data?.data?.email,
        countryCode: data?.data?.countryCode,
        phoneNumber: data?.data?.phoneNumber,
        countryCode: data?.data?.countryCode,
        address: { ...data?.data?.address },
        bankInfo: { ...data?.data?.bankInfo },
      };
      setEmployee(data?.data);
      setValues((state) => ({
        ...state,
        ...updatingData,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id) {
      getEmployee();
    }
  }, [id]);

  const handleBack = () => {
    navigate("/viewEmployee");
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
              {id ? "Edit Employee" : "Add Employee"}
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
                name="phoneNumber"
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
            <Grid item xs={12} md={10}>
              <CustomTextInput
                label={"House.no/Flat.no/Bulding Name"}
                placeholder="Enter Your House.no/Flat.no/Bulding Name"
                name="address.address1"
                value={values.address.address1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <CustomTextInput
                label={"Address Line 2"}
                placeholder="Enter your Address Line 2"
                name="address.address2"
                value={values.address.address2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"City"}
                placeholder="Enter Your City"
                name="address.city"
                value={values.address.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"County"}
                placeholder="Enter Your City"
                name="address.county"
                value={values.address.county}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Country"}
                placeholder="Enter Your Country"
                name="address.country"
                value={values.address.country}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Postal Code"}
                placeholder="Enter Your Postal Code"
                name="address.postalCode"
                value={values.address.postalCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={10}>
              <CustomFileInput
                label={"Address Proof"}
                file="addressProof"
                onFileChange={(e) => {
                  setAddressProof(e.target.files);
                }}
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion summary="BANK INFORMATION">
          <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Bank Name"}
                placeholder="Enter Your Bank"
                name="bankInfo.bankName"
                value={values.bankInfo.bankName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Name on Bank Account"}
                placeholder="Enter the Name on Bank Acount"
                name="bankInfo.nameOnBankAcc"
                value={values.bankInfo.nameOnBankAcc}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Sort Code"}
                placeholder="Enter Your Sort Code"
                name="bankInfo.sortCode"
                value={values.bankInfo.sortCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                label={"Account Number"}
                placeholder="Enter Your Account Number"
                name="bankInfo.AccNumb"
                value={values.bankInfo.AccNumb}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={10}>
              <CustomFileInput
                label={"Bank Statements"}
                file="bankStatements"
                onFileChange={(e) => {
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
            "@media(max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          {id ? "Save" : "Add"}
        </LoadButton>
      </CustomBox>
    </Box>
  );
};

export default AddEmployees;