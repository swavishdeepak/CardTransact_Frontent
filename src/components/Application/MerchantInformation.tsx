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
      drivingLicense: [],
      passport: [],
      nationalId: []
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const { drivingLicense, passport, nationalId, ...merchantInfo } = values;

        let formData = new FormData();
        formData.append('data', JSON.stringify({ merchantInfo }));
        !!nationalId && nationalId.length > 0 && nationalId.forEach((el) => {
          formData.append('nationalId', el)
        })
        !!passport && passport.length > 0 && passport.forEach((el) => {
          formData.append('passport', el)
        })
        !!drivingLicense && drivingLicense.length > 0 && drivingLicense.forEach((el) => {
          formData.append('drivingLicense', el)
        })
        let a = await addApplication({
          data: formData,
          id: appId,
          step: '2'
        })

        await queryClient.setQueryData(['acquirer', appId], (x: any) => {
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
        email: merchantInfo?.email
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
  console.log('isDisable2', isDisable)
  const onImageChange = (e, key: 'drivingLicense' | 'passport' | 'nationalId') => {
    let objImg = e.target.files;
    console.log('e', e)
    let temp = Object.values(objImg);
    setFieldValue(key, temp)
  }


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
             <Typography sx={{fontSize: "15px", color: "#000000", fontWeight: "600"}}>ID Proof</Typography>
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
