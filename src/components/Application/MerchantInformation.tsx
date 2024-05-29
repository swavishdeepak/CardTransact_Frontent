import React, { useEffect, useState } from "react";
import { Box, Button, SelectChangeEvent, Typography } from "@mui/material";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";
import BasicSelect from "../BasicSelect";
import CustomFileInput from "../CustomFileInput";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useGetAppDetailById } from "../../pages/Applications/getQuery/getQuery";
import { useFormik } from "formik";
import CustomButton from "../CustomButton";
import { LoadButton } from "../LoadButton";
import { addApplication } from "../../pages/Applications/apiFunc/appApiFunc";
import { useQueryClient } from "react-query";
import CustomText from "../CustomText";

type ImgFileKey = 'drivingLicense' | 'passport' | 'nationalId' | 'homeUtilityBillPic' | 'homeBusinessRatePic' | 'homeLeaseAgreementPic'

const selectIDProof = [
  { value: "driving_license", label: "Driving License" },
  { value: "passport", label: "Passport" },
  { value: "National Id", label: "National ID" },
];
interface MerchantInformationProps {
  disableStyles?: boolean;
  appId?: string;
  appDetail?: any;
  refetch?: any;
}

export const MerchantInformation: React.FC<MerchantInformationProps> = ({
  disableStyles = false,
  appId,
  appDetail,
  refetch
}) => {
  const [selecteIdProof, setSelecteIdProof] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState<any>({})
  const queryClient = useQueryClient();
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    setValues
  } = useFormik<any>({
    initialValues: {
      name: '',
      legalName: '',
      tradingName: '',
      countryCode: '+91',
      phoneNumber: '',
      email: '',
      homeAdd1: '',
      homeAdd2: '',
      homeCity: '',
      homeCounty: '',
      homeCountry: '',
      homePostalCode: '',
      drivingLicense: [],
      passport: [],
      nationalId: [],
      homeUtilityBillPic: [],
      homeBusinessRatePic: [],
      homeLeaseAgreementPic: [],
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const {
          drivingLicense,
          passport,
          nationalId,
          homeUtilityBillPic,
          homeBusinessRatePic,
          homeLeaseAgreementPic,
          ...merchantInfo } = values;

        let formData = new FormData();
        formData.append('data', JSON.stringify({ merchantInfo }));
        !!nationalId && nationalId.length > 0 && nationalId.forEach((el) => {
          formData.append('nationalId', el)
        })
        !!passport && passport.length > 0 && passport.forEach((el) => {
          formData.append('passport', el)
        })
        //
        !!homeUtilityBillPic && homeUtilityBillPic.length > 0 && homeUtilityBillPic.forEach((el) => {
          formData.append('homeUtilityBillPic', el)
        })
        !!homeBusinessRatePic && homeBusinessRatePic.length > 0 && homeBusinessRatePic.forEach((el) => {
          formData.append('homeBusinessRatePic', el)
        })
        !!homeLeaseAgreementPic && homeLeaseAgreementPic.length > 0 && homeLeaseAgreementPic.forEach((el) => {
          formData.append('homeLeaseAgreementPic', el)
        })

        let a = await addApplication({
          data: formData,
          id: appId,
          step: '2'
        })

        await queryClient.setQueryData(['useGetAppDetailById', appId], (x: any) => {
          let temp = { ...x, ...a.data }
          return temp
        })
      }
      catch (err) {
        console.log('err', err);
      }
      finally {
        setIsLoading(false);
      }
    },
  });
  //
  //initial
  useEffect(() => {
    if (!!appDetail?._id) {
      const merchantInfo = appDetail?.merchantInfo;
      setValues({
        name: merchantInfo?.name,
        legalName: merchantInfo?.legalName,
        tradingName: merchantInfo?.tradingName,
        countryCode: merchantInfo?.countryCode,
        phoneNumber: merchantInfo?.phoneNumber,
        email: merchantInfo?.email,
        homeAdd1: merchantInfo?.homeAdd1,
        homeAdd2: merchantInfo?.homeAdd2,
        homeCity: merchantInfo?.homeCity,
        homeCounty: merchantInfo?.homeCounty,
        homeCountry: merchantInfo?.homeCountry,
        homePostalCode: merchantInfo?.homePostalCode
      });

      let tempEdit = JSON.parse(appDetail?.reviewFields || '{}')
      setIsDisable(tempEdit)
    }
  }, [!!appDetail?._id])

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

  const onImageChange = (e, key: ImgFileKey) => {
    let objImg = e.target.files;
    let temp = Object.values(objImg);
    setFieldValue(key, temp)
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
        <CommonHeader header="Merchant Information">
          <img src={NavIcon} alt=""></img>
        </CommonHeader>
      )}
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
        mt={disableStyles ? "none" : 2}
      >
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Merchant Name"}
            placeholder="Enter Merchant`s Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            disabled={fieldDisable('name')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Legal Name"}
            placeholder="Enter Merchant`s Legal Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.legalName}
            name="legalName"
            disabled={fieldDisable('legalName')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Merchant Trading Name"}
            placeholder="Enter Merchant Trading Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tradingName}
            name="tradingName"
            disabled={fieldDisable('tradingName')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Mobile Number"}
            placeholder="Enter Mobile Number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            name="phoneNumber"
            disabled={fieldDisable('phoneNumber')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Enter Email Address"}
            placeholder="Enter Email Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            disabled={fieldDisable('email')}
          />
        </Grid>
        {/* <Grid item xs={12} md={10}>

          <BasicSelect
            label="Select ID Proofs"
            placeholder="Select"
            sx={{
              width: "100%",
              position: "relative",
              border: "1px solid rgba(220, 220, 220, 1)",
              padding: "10px 6px 0px 8px",
            }}
            name={"selectedValue2"}
            value={selecteIdProof}
            handleChange={handleChange}
            size="small"
            items={selectIDProof}
          />
         

        </Grid> */}
        <Grid item xs={12} md={10}>
          <Typography sx={{ fontSize: "15px", color: "#000000", fontWeight: "600" }}>ID Proof</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Driving License"
            onChange={(e) => onImageChange(e, 'drivingLicense')}
            disabled={fieldDisable('drivingLicense')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="National Id"
            onChange={(e) => onImageChange(e, 'nationalId')}
            disabled={fieldDisable('nationalId')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Passport"
            onChange={(e) => onImageChange(e, 'passport')}
            disabled={fieldDisable('passport')}
          />
        </Grid>
        {/* home address */}
        <Grid item xs={12} md={8}>
          <CustomText
            text="Home Address"
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
              label={"House No./Flat No."}
              placeholder="Enter House No./Flat No."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.homeAdd1}
              name="homeAdd1"
              disabled={fieldDisable('homeAdd1')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"Street Name/Building Name"}
              placeholder="Enter Street Name/Building Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.homeAdd2}
              name="homeAdd2"
              disabled={fieldDisable('homeAdd2')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"City"}
              placeholder="Enter City"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.homeCity}
              name="homeCity"
              disabled={fieldDisable('homeCity')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"County"}
              placeholder="Enter Country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.homeCounty}
              name="homeCounty"
              disabled={fieldDisable('homeCounty')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"Country"}
              placeholder="Enter Country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.homeCountry}
              name="homeCountry"
              disabled={fieldDisable('homeCountry')}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <CustomTextInput
              label={"Postal Code"}
              placeholder="Enter Postal Code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.homePostalCode}
              name="homePostalCode"
              disabled={fieldDisable('homePostalCode')}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Home Utility Bill Pic"
            onChange={(e) => onImageChange(e, 'homeUtilityBillPic')}
            disabled={fieldDisable('homeUtilityBillPic')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Home Business Rate Pic"
            onChange={(e) => onImageChange(e, 'homeBusinessRatePic')}
            disabled={fieldDisable('homeBusinessRatePic')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Home Lease Agreement Pic"
            onChange={(e) => onImageChange(e, 'homeLeaseAgreementPic')}
            disabled={fieldDisable('homeLeaseAgreementPic')}
          />
        </Grid>
        {/* home address end */}
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
