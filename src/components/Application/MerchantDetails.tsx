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
import CustomText from "../CustomText";

interface MerchantDetailsProps {
  disableStyles?: boolean;
  appId?: string;
  appDetail?: any;
  refetch?: any;
}
type keyImg = 'outDoorPremisesPic' |
  'inDoorPremisesPic' |
  'utilityBillPic' |
  'businessRatePic' |
  'leaseAgreementPic' |
  'homeUtilityBillPic' |
  'homeDrivingLicensePic' |
  'homeBankStatement' |
  'homeBankLetter' |
  'alternativeDoc' |
  'regUtilityBillPic' |
  'regBusinessRatePic' |
  'regLeaseAgreementPic'

export const MerchantDetails: React.FC<MerchantDetailsProps> = ({
  disableStyles = false,
  appId,
  appDetail,
  refetch
}) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState<any>({})
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    setValues
  } = useFormik<any>({
    initialValues: {
      address1: '',
      address2: '',
      city: '',
      county: '',
      country: '',
      postalCode: '',
      remark: '',
      //register addressFields
      regAdd1: '',
      regAdd2: '',
      regCity: '',
      regCounty: '',
      regCountry: '',
      regPostalCode: '',
      regUtilityBillPic: [],
      regBusinessRatePic: [],
      regLeaseAgreementPic: [],
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
      alternativeDoc: []
    },
    onSubmit: async (values) => {
      setIsLoading(true)
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
        regUtilityBillPic,
        regBusinessRatePic,
        regLeaseAgreementPic,
        ...merchantTradingAdd
      } = values;
      try {
        let formData = new FormData();

        formData.append('data', JSON.stringify({ merchantTradingAdd }));

        outDoorPremisesPic?.length > 0 && outDoorPremisesPic?.forEach((el) => {
          formData.append('outDoorPremisesPic', el)
        });

        inDoorPremisesPic?.length > 0 && inDoorPremisesPic?.forEach((el) => {
          formData.append('inDoorPremisesPic', el)
        });

        utilityBillPic?.length > 0 && utilityBillPic?.forEach((el) => {
          formData.append('utilityBillPic', el)
        });
        // 
        businessRatePic?.length > 0 && businessRatePic?.forEach((el) => {
          formData.append('businessRatePic', el)
        });
        leaseAgreementPic?.length > 0 && leaseAgreementPic?.forEach((el) => {
          formData.append('leaseAgreementPic', el)
        });
        //
        homeUtilityBillPic?.length > 0 && homeUtilityBillPic?.forEach((el) => {
          formData.append('homeUtilityBillPic', el)
        });
        homeDrivingLicensePic?.length > 0 && homeDrivingLicensePic?.forEach((el) => {
          formData.append('homeDrivingLicensePic', el)
        });

        homeBankStatement?.length > 0 && homeBankStatement?.forEach((el) => {
          formData.append('homeBankStatement', el)
        });

        homeBankLetter?.length > 0 && homeBankLetter?.forEach((el) => {
          formData.append('homeBankLetter', el)
        });
        alternativeDoc?.length > 0 && alternativeDoc?.forEach((el) => {
          formData.append('alternativeDoc', el)
        });
        //
        regUtilityBillPic?.length > 0 && regUtilityBillPic?.forEach((el) => {
          formData.append('regUtilityBillPic', el)
        });
        regBusinessRatePic?.length > 0 && regBusinessRatePic?.forEach((el) => {
          formData.append('regBusinessRatePic', el)
        });
        regLeaseAgreementPic?.length > 0 && regLeaseAgreementPic?.forEach((el) => {
          formData.append('regLeaseAgreementPic', el)
        });

        let a = await addApplication({
          data: formData,
          id: appId,
          step: '3'
        })
        // refetch();
        await queryClient.setQueryData(['useGetAppDetailById', appId], (x: any) => {
          let temp = { ...x, ...a.data }
          return temp
        })
      }
      catch (err) {
        console.log('errInAddAppication3', err)
      }
      finally {
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
        regAdd1: merchantTradingAdd?.regAdd1,
        regAdd2: merchantTradingAdd?.regAdd2,
        regCity: merchantTradingAdd?.regCity,
        regCounty: merchantTradingAdd?.regCounty,
        regCountry: merchantTradingAdd?.regCountry,
        regPostalCode: merchantTradingAdd?.regPostalCode,
      })
      let tempEdit = JSON.parse(appDetail?.reviewFields || '{}')
      setIsDisable(tempEdit)
    }
  }, [!!appDetail?._id])

  const onImageChange = (e, key: keyImg) => {
    let objImg = e.target.files;
    let temp = Object.values(objImg);
    setFieldValue(key, temp)
  }

  const fieldDisable = (key) => {
    if (appDetail?.reviewFields?.length > 1) {
      if (isDisable?.hasOwnProperty(key)) {
        return !isDisable?.[key]
      } else {
        return true
      }
    } else {
      return false;
    }
  }
  console.log('values', values)
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
      <Grid container rowSpacing={4} columnSpacing={2} mt={disableStyles ? "none" : 2}>
        <Grid item xs={12} md={10}>
          <CustomTextInput
            label={"House No./Flat No."}
            placeholder="Enter House No./Flat No"
            name='address1'
            value={values.address1}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('address1')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomTextInput
            label={"Street Name/Building Name"}
            placeholder="Enter Street Name/Building Name"
            name='address2'
            value={values.address2}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('address2')}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"City"}
            placeholder="Enter Your City"
            name='city'
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('city')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"County"}
            placeholder="Enter Your County"
            name='county'
            value={values.county}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('county')}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Country"}
            placeholder="Enter Your Country"
            name='country'
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('country')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Post Code"}
            placeholder="Enter Your Post Code"
            name='postalCode'
            value={values.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('postalCode')}
          />
        </Grid>
        {/* files */}
        <>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Premises(Outdoors)"
              placeholder="Upload Any Utility Document"
              onChange={(e) => onImageChange(e, 'outDoorPremisesPic')}
              disabled={fieldDisable('outDoorPremisesPic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Premises(Indoors)"
              placeholder="Upload Any Utility Document"
              onChange={(e) => onImageChange(e, 'inDoorPremisesPic')}
              disabled={fieldDisable('inDoorPremisesPic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of "
              placeholder="Upload Picture of Business Rate Pic"
              onChange={(e) => onImageChange(e, 'utilityBillPic')}
              disabled={fieldDisable('utilityBillPic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Business Rate Pic"
              placeholder="Upload Picture of Business Rate Pic"
              onChange={(e) => onImageChange(e, 'businessRatePic')}
              disabled={fieldDisable('businessRatePic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Lease Agreement Pic "
              placeholder="Upload Picture of Lease Agreement Pic"
              onChange={(e) => onImageChange(e, 'leaseAgreementPic')}
              disabled={fieldDisable('leaseAgreementPic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Home Driving License Pic"
              placeholder="Upload Picture of Home Driving License Pic"
              onChange={(e) => onImageChange(e, 'homeUtilityBillPic')}
              disabled={fieldDisable('homeUtilityBillPic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Home Driving License Pic"
              placeholder="Upload Picture of Home Driving License Pic"
              onChange={(e) => onImageChange(e, 'homeDrivingLicensePic')}
              disabled={fieldDisable('homeDrivingLicensePic')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of  Home Bank Statement"
              placeholder="Upload Picture of home Bank Statement"
              onChange={(e) => onImageChange(e, 'homeBankStatement')}
              disabled={fieldDisable('homeBankStatement')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Home Bank Letter"
              placeholder="Upload Picture of Home Bank Letter"
              onChange={(e) => onImageChange(e, 'homeBankLetter')}
              disabled={fieldDisable('homeBankLetter')}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <CustomFileInput
              label="Upload Picture of Alternative Doc"
              placeholder="Upload Picture of Alternative Doc"
              onChange={(e) => onImageChange(e, 'alternativeDoc')}
              disabled={fieldDisable('alternativeDoc')}
            />
          </Grid>
        </>
        <Grid item xs={12} md={10}>
          <CustomTextInput
            label={"Remarks"}
            placeholder="Remarks"
            name='remark'
            value={values.remark}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('remark')}
          />
        </Grid>
        {/* registered address */}
        <Grid item xs={12} md={8}>
          <CustomText
            text="Registered Address"
            style={{
              borderBottom: '1px solid',
              display: "inline-block"
            }}
          />
        </Grid>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={2}
          mt={disableStyles ? "none" : 2}
        >
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"Registered House No./Flat No."}
              placeholder="Enter House No./Flat No."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.regAdd1}
              name="regAdd1"
              disabled={fieldDisable('regAdd1')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={" Registered Street Name/Building Name"}
              placeholder="Enter Street Name/Building Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.regAdd2}
              name="regAdd2"
              disabled={fieldDisable('regAdd2')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"City"}
              placeholder="Enter City"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.regCity}
              name="regCity"
              disabled={fieldDisable('regCity')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"County"}
              placeholder="Enter County"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.regCounty}
              name="regCounty"
              disabled={fieldDisable('regCounty')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"Country"}
              placeholder="Enter Country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.regCountry}
              name="regCountry"
              disabled={fieldDisable('regCountry')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"Postal Code"}
              placeholder="Enter Postal Code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.regPostalCode}
              name="regPostalCode"
              disabled={fieldDisable('regPostalCode')}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Home Utility Bill Pic"
            onChange={(e) => onImageChange(e, 'regUtilityBillPic')}
            disabled={fieldDisable('regUtilityBillPic')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Home Business Rate Pic"
            onChange={(e) => onImageChange(e, 'regBusinessRatePic')}
            disabled={fieldDisable('regBusinessRatePic')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Home Lease Agreement Pic"
            onChange={(e) => onImageChange(e, 'regLeaseAgreementPic')}
            disabled={fieldDisable('regLeaseAgreementPic')}
          />
        </Grid>

        {/*  */}

        <Grid item xs={12} md={8}>
          <LoadButton
            onClick={handleSubmit}
            hoverColor={
              true ? Colors.editColor : Colors.successColor
            }
            style={{
              width: "17%",
              marginTop: "2rem",
              backgroundColor:
                true ? Colors.editColor : Colors.successColor,
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
