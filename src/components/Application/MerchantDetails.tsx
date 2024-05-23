import React, { useEffect, useState } from "react";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";
import CustomFileInput from "../CustomFileInput";
import { useFormik } from "formik";
import { LoadButton } from "../LoadButton";
import { addApplication } from "../../pages/Applications/apiFunc/appApiFunc";
import { useQueryClient } from "react-query";
import BasicSelect from "../BasicSelect";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

interface MerchantDetailsProps {
  disableStyles?: boolean;
  appId?: string;
  appDetail?: any;
  refetch?: any;
}
type keyImg =
  | "outDoorPremisesPic"
  | "inDoorPremisesPic"
  // | "utilityBillPic"
  // | "businessRatePic"
  // | "leaseAgreementPic"
  // | "homeUtilityBillPic"
  // | "homeDrivingLicensePic"
  // | "homeBankStatement"
  // | "homeBankLetter"
  | "alternativeDoc";

const selectBussinessIDProof = [
  { value: "utilityBillPic", label: "Utility Bill" },
  { value: "businessRatePic", label: "Business Rate" },
  { value: "leaseAgreementPic", label: "Lease Agreement" },
];
const selectHomeIDProof = [
  { value: "homeUtilityBillPic", label: "Domestic Utility Bill" },
  { value: "homeDrivingLicensePic", label: "Driving License" },
  { value: "homeBankStatement", label: "Bank Statement" },
  { value: "homeBankLetter", label: "Bank Or Credit Card Letter" },
];

export const MerchantDetails: React.FC<MerchantDetailsProps> = ({
  disableStyles = false,
  appId,
  appDetail,
  refetch,
}) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState<any>({});
  const [selecteBussinessIDProof, setselectBussinessIDProof] =
    useState<string>("");
  const [selecteHomeIDProof, setselectHomeIDProof] = useState<string>("");
  const [bussFileInputs, setBussFileInputs] = useState<string[]>([
    "utilityBillPic",
  ]);
  const [homeFileInputs, setHomeFileInputs] = useState<string[]>([
    "homeUtilityBillPic",
  ]);
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    setValues,
  } = useFormik<any>({
    initialValues: {
      address1: "",
      address2: "",
      city: "",
      county: "",
      country: "",
      postalCode: "",
      remark: "",
      //files
      outDoorPremisesPic: [],
      inDoorPremisesPic: [],
      utilityBillPic: [],
      businessRatePic: [],
      leaseAgreementPic: [],
      homeUtilityBillPic: [],
      homeDrivingLicensePic: [],
      homeBankStatement: [],
      homeBankLetter: [],
      alternativeDoc: [],
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      const {
        outDoorPremisesPic,
        inDoorPremisesPic,
        utilityBillPic,
        businessRatePic,
        leaseAgreementPic,
        homeUtilityBillPic,
        homeDrivingLicensePic,
        homeBankStatement,
        homeBankLetter,
        alternativeDoc,
        ...merchantTradingAdd
      } = values;
      try {
        let formData = new FormData();

        formData.append("data", JSON.stringify({ merchantTradingAdd }));

        outDoorPremisesPic?.length > 0 &&
          outDoorPremisesPic?.forEach((el) => {
            formData.append("outDoorPremisesPic", el);
          });

        inDoorPremisesPic?.length > 0 &&
          inDoorPremisesPic?.forEach((el) => {
            formData.append("inDoorPremisesPic", el);
          });

        utilityBillPic?.length > 0 &&
          utilityBillPic?.forEach((el) => {
            formData.append("utilityBillPic", el);
          });
        //
        businessRatePic?.length > 0 &&
          businessRatePic?.forEach((el) => {
            formData.append("businessRatePic", el);
          });
        leaseAgreementPic?.length > 0 &&
          leaseAgreementPic?.forEach((el) => {
            formData.append("leaseAgreementPic", el);
          });
        //
        homeUtilityBillPic?.length > 0 &&
          homeUtilityBillPic?.forEach((el) => {
            formData.append("homeUtilityBillPic", el);
          });
        homeDrivingLicensePic?.length > 0 &&
          homeDrivingLicensePic?.forEach((el) => {
            formData.append("homeDrivingLicensePic", el);
          });

        homeBankStatement?.length > 0 &&
          homeBankStatement?.forEach((el) => {
            formData.append("homeBankStatement", el);
          });

        homeBankLetter?.length > 0 &&
          homeBankLetter?.forEach((el) => {
            formData.append("homeBankLetter", el);
          });
        alternativeDoc?.length > 0 &&
          alternativeDoc?.forEach((el) => {
            formData.append("alternativeDoc", el);
          });

        let a = await addApplication({
          data: formData,
          id: appId,
          step: "3",
        });
        // refetch();
        await queryClient.setQueryData(["acquirer", appId], (x: any) => {
          let temp = { ...x, ...a.data };
          return temp;
        });
      } catch (err) {
        console.log("errInAddAppication3", err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    if (!!appDetail?._id) {
      const merchantTradingAdd = appDetail?.merchantTradingAdd;
      setValues({
        address1: merchantTradingAdd?.address1,
        address2: merchantTradingAdd?.address2,
        city: merchantTradingAdd?.city,
        county: merchantTradingAdd?.county,
        country: merchantTradingAdd?.country,
        postalCode: merchantTradingAdd?.postalCode,
        remark: merchantTradingAdd?.remark,
      });
      let tempEdit = JSON.parse(appDetail?.reviewFields || "{}");
      setIsDisable(tempEdit);
    }
  }, [!!appDetail?._id]);

  const onImageChange = (e, key: keyImg) => {
    let objImg = e.target.files;
    let temp = Object.values(objImg);
    setFieldValue(key, temp);
  };

  // for Business Address Proof Id
  const onBussinessImageChange = (
    e,
    key: "utilityBillPic" | "businessRatePic" | "leaseAgreementPic"
  ) => {
    let objImg = e.target.files;
    let temp = Object.values(objImg);
    setFieldValue(key, temp);
  };

  const addBussFileInput = (value: any) => {
    if (!bussFileInputs.includes(value)) {
      setBussFileInputs((bussFileInputs) => [...bussFileInputs, value]);
    }
  };

  const removeBussFileInput = (value: any) => {
    setBussFileInputs(bussFileInputs.filter((item) => item !== value));
    setFieldValue(value, []);
  };

  const handleBussIdProofChange = (e: any) => {
    const value = e.target.value;
    setselectBussinessIDProof(value);
    addBussFileInput(value);
  };

  // for Home Address Proof Id
  const onHomeImageChange = (
    e,
    key:
      | "homeUtilityBillPic"
      | "homeDrivingLicensePic"
      | "homeBankStatement"
      | "homeBankLetter"
  ) => {
    let objImg = e.target.files;
    let temp = Object.values(objImg);
    setFieldValue(key, temp);
  };

  const addHomeFileInput = (value: any) => {
    if (!homeFileInputs.includes(value)) {
      setHomeFileInputs((homeFileInputs) => [...homeFileInputs, value]);
    }
  };

  const removeHomeFileInput = (value: any) => {
    setBussFileInputs(homeFileInputs.filter((item) => item !== value));
    setFieldValue(value, []);
  };

  const handleHomeIdProofChange = (e: any) => {
    const value = e.target.value;
    setselectHomeIDProof(value);
    addHomeFileInput(value);
  };

  const fieldDisable = (key) => {
    if (appDetail?.reviewFields?.length > 1) {
      if (isDisable?.hasOwnProperty(key)) {
        return !isDisable?.[key];
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  console.log("fieldDisable", fieldDisable("address1"));
  return (
    <Box
      sx={
        !disableStyles
          ? {
              p: 3,
              marginTop: "2rem",
              boxShadow: "2.8125px 2.8125px 8.4375px 0px #0000002E",
              backgroundColor: "#FFFFFF",
              bgcolor: "#FFFFFF",
              borderRadius: "7.5px",
              border: `0.5px solid ${Colors.LinkColor}`,
            }
          : undefined
      }
    >
      {!disableStyles && (
        <CommonHeader header="Merchant Trading Address">
          <img src={NavIcon} alt=""></img>
        </CommonHeader>
      )}
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
        mt={disableStyles ? "none" : 2}
      >
        <Grid item xs={12} md={10}>
          <CustomTextInput
            label={"House No./Flat No."}
            placeholder="Enter House No./Flat No"
            name="address1"
            value={values.address1}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable("address1")}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomTextInput
            label={"Street Name/Building Name"}
            placeholder="Enter Street Name/Building Name"
            name="address2"
            value={values.address2}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable("address2")}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"City"}
            placeholder="Enter Your City"
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable("city")}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"County"}
            placeholder="Enter Your County"
            name="county"
            value={values.county}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable("county")}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Country"}
            placeholder="Enter Your Country"
            name="country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable("country")}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Post Code"}
            placeholder="Enter Your Post Code"
            name="postalCode"
            value={values.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable("postalCode")}
          />
        </Grid>
        {/* files */}
        <>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Premises(Outdoors)"
              placeholder="Upload Any Utility Document"
              onChange={(e) => onImageChange(e, "outDoorPremisesPic")}
              disabled={fieldDisable("outDoorPremisesPic")}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Premises(Indoors)"
              placeholder="Upload Any Utility Document"
              onChange={(e) => onImageChange(e, "inDoorPremisesPic")}
              disabled={fieldDisable("inDoorPremisesPic")}
            />
          </Grid>

      {/************* Select Business Address Proof Type *****************************/}
          <Grid item xs={12} md={10}>
            <BasicSelect
              label="Select Business Address Proof Type"
              sx={{
                width: "100%",
                position: "relative",
                border: "1px solid rgba(220, 220, 220, 1)",
                padding: "10px 6px 0px 8px",
              }}
              //name={"selectedValue2"}
              value={selecteBussinessIDProof}
              handleChange={handleBussIdProofChange}
              //handleChange={handleIdProofChange}
              size="small"
              items={selectBussinessIDProof}
            />
            {/* <AddCircleOutlineIcon /> */}
          </Grid>
          <Grid item xs={2} md={2} mt={5}>
            <ControlPointIcon
              fontSize="large"
              sx={{ cursor: "pointer", color: "#DCDCDC" }}
              onClick={addBussFileInput}
            />
          </Grid>
          {bussFileInputs.map((input, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} md={10}>
                <CustomFileInput
                  // label={`${input}`}
                  onChange={(e: any) =>
                    onBussinessImageChange(
                      e,
                      input as
                        | "utilityBillPic"
                        | "businessRatePic"
                        | "leaseAgreementPic"
                    )
                  }
                  disabled={fieldDisable(input)}
                />
              </Grid>
              {index !== 0 && (
                <Grid item xs={2} md={2}>
                  <HighlightOffIcon
                    fontSize="large"
                    sx={{ cursor: "pointer", color: "#DCDCDC" }}
                    onClick={() => removeBussFileInput(input)}
                  />
                </Grid>
              )}
            </React.Fragment>
          ))}

          {/* <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of "
              placeholder="Upload Picture of Business Rate Pic"
              onChange={(e) => onImageChange(e, "utilityBillPic")}
              disabled={fieldDisable("utilityBillPic")}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of Business Rate Pic"
              placeholder="Upload Picture of Business Rate Pic"
              onChange={(e) => onImageChange(e, "businessRatePic")}
              disabled={fieldDisable("businessRatePic")}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of Lease Agreement Pic "
              placeholder="Upload Picture of Lease Agreement Pic"
              onChange={(e) => onImageChange(e, "leaseAgreementPic")}
              disabled={fieldDisable("leaseAgreementPic")}
            />
          </Grid> */}

          {/* **************Select Home Address Proof Type  *************************************************/}

          <Grid item xs={12} md={10}>
            <BasicSelect
              label="Select Home Address Proof Type"
              sx={{
                width: "100%",
                position: "relative",
                border: "1px solid rgba(220, 220, 220, 1)",
                padding: "10px 6px 0px 8px",
              }}
              //name={"selectedValue2"}
              value={selecteHomeIDProof}
              handleChange={handleHomeIdProofChange}
              //handleChange={handleIdProofChange}
              size="small"
              items={selectHomeIDProof}
            />
            {/* <ControlPointIcon
              fontSize="large"
              sx={{ cursor: "pointer", color: "#DCDCDC" }}
              onClick={addHomeFileInput}
            /> */}
            {/* <AddCircleOutlineIcon /> */}
          </Grid>
          <Grid item xs={2} md={2} mt={5}>
            <ControlPointIcon
              fontSize="large"
              sx={{ cursor: "pointer", color: "#DCDCDC" }}
              onClick={addHomeFileInput}
            />
          </Grid>
          {homeFileInputs.map((input, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} md={10}>
                <CustomFileInput
                  // label={`${input}`}
                  onChange={(e: any) =>
                    onHomeImageChange(
                      e,
                      input as
                        | "homeUtilityBillPic"
                        | "homeDrivingLicensePic"
                        | "homeBankStatement"
                        | "homeBankLetter"
                    )
                  }
                  disabled={fieldDisable(input)}
                />
              </Grid>
              {index !== 0 && (
                <Grid item xs={2} md={2}>
                  <HighlightOffIcon
                    fontSize="large"
                    sx={{ cursor: "pointer", color: "#DCDCDC" }}
                    onClick={() => removeHomeFileInput(input)}
                  />
                </Grid>
              )}
            </React.Fragment>
          ))}

          {/* <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of Home Driving License Pic"
              placeholder="Upload Picture of Home Driving License Pic"
              onChange={(e) => onImageChange(e, "homeUtilityBillPic")}
              disabled={fieldDisable("homeUtilityBillPic")}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of Home Driving License Pic"
              placeholder="Upload Picture of Home Driving License Pic"
              onChange={(e) => onImageChange(e, "homeDrivingLicensePic")}
              disabled={fieldDisable("homeDrivingLicensePic")}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of  Home Bank Statement"
              placeholder="Upload Picture of home Bank Statement"
              onChange={(e) => onImageChange(e, "homeBankStatement")}
              disabled={fieldDisable("homeBankStatement")}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CustomFileInput
              label="Upload Picture of Home Bank Letter"
              placeholder="Upload Picture of Home Bank Letter"
              onChange={(e) => onImageChange(e, "homeBankLetter")}
              disabled={fieldDisable("homeBankLetter")}
            />
          </Grid>*/}
          <Grid item xs={12} md={10}>
            <CustomTextInput
              label={"Remarks"}
              placeholder="Remarks"
              name="remark"
              value={values.remark}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={fieldDisable("remark")}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Alternative Doc"
              placeholder="Upload Picture of Alternative Doc"
              onChange={(e) => onImageChange(e, "alternativeDoc")}
              disabled={fieldDisable("alternativeDoc")}
            />
          </Grid>
        </>

        <Grid item xs={12} md={8}>
          <LoadButton
            onClick={handleSubmit}
            hoverColor={true ? Colors.editColor : Colors.successColor}
            style={{
              width: "17%",
              marginTop: "2rem",
              backgroundColor: true ? Colors.editColor : Colors.successColor,
              color: "#fff",
            }}
            loading={isLoading}
          >
            Save
          </LoadButton>
        </Grid>
      </Grid>
    </Box>
  );
};
