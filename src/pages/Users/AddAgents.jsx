import React, { useEffect, useState } from "react";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomTextInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomAccordion from "../../components/MyCustom/CustomAccordian";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { LoadButton } from "../../components/LoadButton";
import { useSearchParams, useNavigate } from "react-router-dom";
import CheckBox from "../../components/MyCustom/CheckBox";
import { SalesPerson } from "../../components/Reports/TopSalesPersonList/SalesPerson";
import BasicSelect from "../../components/BasicSelect";
import { useFormik } from "formik";
import { API_AXIOS, API_AXIOS_MULTIPART } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { getAgentDetails } from "../../hooks/agent/getAgentDetails";
import { formatChangedValues } from "../../utils/commonMethods";
import { useAgentQuery } from "./getQuery/useAgentQuery";

const AddAgents = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const { refetch } = useAgentQuery(id);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const [agent, setAgent] = useState({});
  const { values, handleChange, handleSubmit, setValues, initialValues } =
    useFormik({
      initialValues: {
        name: "",
        phoneNumber: "",
        email: "",
        salesType: "company",
        tier: "",
        // manager:'',
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

        try {
          if (id) {
            const changedValues = {};

            // Recursive function to traverse nested objects
            function compareObjects(initial, current, path = "") {
              for (const key in initial) {
                if (
                  initial.hasOwnProperty(key) &&
                  current.hasOwnProperty(key)
                ) {
                  const newPath = path ? `${path}.${key}` : key;
                  if (
                    typeof initial[key] === "object" &&
                    initial[key] !== null
                  ) {
                    compareObjects(initial[key], current[key], newPath);
                  } else {
                    if (initial[key] !== current[key]) {
                      changedValues[newPath] = current[key];
                    }
                  }
                }
              }
            }

            compareObjects(user, values);
            const formattedValues = formatChangedValues(changedValues);

            const formData = new FormData();

            formData.append("data", JSON.stringify(formattedValues));
            const { data } = await API_AXIOS_MULTIPART.post(
              `${Apis.editRequestAgentById}/${id}`,
              formData
            );
          } else {
            const formData = new FormData();

            formData.append("data", JSON.stringify(values));
            const { data } = await API_AXIOS_MULTIPART.post(
              Apis.agent,
              formData
            );
          }
          refetch()
        } catch (err) {
          console.log(err);
        }
        setLoading(false);
        navigate("/viewAgents");
      },
    });

  const getAgent = async () => {
    try {
      const { data = {} } = await getAgentDetails(id);
      let updatingData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        salesType: data.salesType,
        address: { ...data.address },
        bankInfo: { ...data.bankInfo },
        tier: data.tier,
        manager: data.manager,
      };
      setUser(data);
      setValues((state) => ({
        ...state,
        ...updatingData,
      }));

      // setAgent(data?.data || {});
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(agent);

  useEffect(() => {
    getAgent(id);
  }, [id]);

  const [selectedTier, setSelectedTier] = useState("");
  const [selectedManger, setSelectedManger] = useState("");
  const [selectedReporting, setSelectedReporting] = useState("");
  // const [selectedTier, setSelectedTier] = useState<string>("");
  // const [selectedManger, setSelectedManger] = useState<string>("");
  // const [selectedReporting, setSelectedReporting] = useState<string>("");

  const handleChangeTier = (event) => {
    setSelectedTier(event.target.value);
  };

  const handleChangeManger = (event) => {
    setSelectedManger(event.target.value);
  };
  const handleChangeReporting = (event) => {
    setSelectedReporting(event.target.value);
  };
  // const handleChangeTier = (event: SelectChangeEvent<string>) => {
  //   setSelectedTier(event.target.value);
  // };

  // const handleChangeManger = (event: SelectChangeEvent<string>) => {
  //   setSelectedManger(event.target.value);
  // };
  // const handleChangeReporting = (event: SelectChangeEvent<string>) => {
  //   setSelectedReporting(event.target.value);
  // };

  const selectTier = [
    { value: "Tier", label: "tier1" },
    { value: "Tier2", label: "Tier2" },
  ];
  const selectManger = [{ value: "manager", label: "Manager1" }];
  const selectReportingAgent = [{ value: "reporting1", label: "reporting1" }];

  const handleBack = () => {
    navigate("/viewAgents");
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
              {id ? "Edit Agent" : "Add Agent"}
            </Typography>
            <Divider sx={{ border: "1px solid #77D177" }} />
          </Box>
          <CustomButton
            label={"Back"}
            hoverColor="#898989"
            onClick={handleBack}
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
              <CustomTextInput
                value={values.name}
                onChange={handleChange}
                name="name"
                label={"Name"}
                placeholder="Enter Your Name"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                value={values.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                label={"Phone Number"}
                placeholder="Enter your Phone"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                value={values.email}
                onChange={handleChange}
                name="email"
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
                // value={values.email}
                // onChange={handleChange}
                // name="email"
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
                // value={values.manager}
                // onChange={handleChange}
                // name="email"
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
                value={values.address?.address1}
                onChange={handleChange}
                name="address.address1"
                label={"House.no/Flat.no/Bulding Name"}
                placeholder="Enter Your Email"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <CustomTextInput
                value={values.address?.address2}
                onChange={handleChange}
                name="address.address2"
                label={"Address Line 2"}
                placeholder="Enter your Email"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                value={values.address?.city}
                onChange={handleChange}
                name="address.city"
                label={"City"}
                placeholder="Enter Your City"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                value={values.address?.county}
                onChange={handleChange}
                name="address.county"
                label={"County"}
                placeholder="Enter Your County"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                value={values.address?.country}
                onChange={handleChange}
                name="address.country"
                label={"Country"}
                placeholder="Enter Your Country"
              />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <CustomTextInput
                value={values.address?.postalCode}
                onChange={handleChange}
                name="address.postalCode"
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
                value={values.bankInfo?.bankName}
                onChange={handleChange}
                name="bankInfo.bankName"
                label={"Bank Name"}
                placeholder="Enter Your Bank"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                value={values.bankInfo?.nameOnBankAcc}
                onChange={handleChange}
                name="bankInfo.nameOnBankAcc"
                label={"Name on Bank Account"}
                placeholder="Enter the Name on Bank Acount"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                value={values.bankInfo?.sortCode}
                onChange={handleChange}
                name="bankInfo.sortCode"
                label={"Sort Code"}
                placeholder="Enter Your Sort Code"
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CustomTextInput
                value={values.bankInfo?.AccNumb}
                onChange={handleChange}
                name="bankInfo.AccNumb"
                label={"Account Number"}
                placeholder="Enter Your Account Number"
              />
            </Grid>
          </Grid>
        </CustomAccordion>
        <LoadButton
          onClick={handleSubmit}
          // type="submit"
          loading={loading}
          style={{
            marginTop: 3,
            width: "20%",
          }}
        >
          {id ? "Save" : "Add"}
        </LoadButton>
      </CustomBox>
    </Box>
  );
};

export default AddAgents;