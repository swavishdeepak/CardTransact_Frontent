import React, { useEffect, useState } from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";
import CustomFileInput from "../CustomFileInput";
import { useFormik } from "formik";
import { LoadButton } from "../LoadButton";
import { addApplication } from "../../pages/Applications/apiFunc/appApiFunc";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

interface BankInformationProps {
  disableStyles?: boolean;
  appId?: string;
  appDetail?: any;
  refetch?: any;
}


export const BankInformation: React.FC<BankInformationProps> = ({ disableStyles = false, appId, appDetail, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState<any>({});

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
    setValues
  } = useFormik<any>({
    initialValues: {
      bankStatement: [],
      bankName: '',
      nameOnBankAcc: '',
      accountNumber: '',
      sourceCode: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      const { bankStatement, ...bankInfo } = values;
      try {
        let formData = new FormData();

        formData.append('data', JSON.stringify({ bankInfo }));

        bankStatement?.length > 0 && bankStatement?.forEach((el) => {
          formData.append('bankStatement', el)
        });
        let a = await addApplication({
          data: formData,
          id: appId,
          step: '4'
        })
        console.log('addApplication@', a)
        await queryClient.setQueryData(['acquirer', appId], (x: any) => {
          let temp = { ...x, ...a.data }
          return temp
        });
        queryClient.invalidateQueries({
          queryKey: ['application'],
        });
        // navigate("/viewApplications")
      }

      catch (err) {
        console.log('errInAddAppication4', err)
      }
      finally {
        console.log('appDetail', appDetail)
        setIsLoading(false)
      }
    },
  });

  //
  useEffect(() => {
    if (!!appDetail?._id) {
      const bankInfo = appDetail?.bankInfo;
      setValues({
        bankName: bankInfo?.bankName,
        nameOnBankAcc: bankInfo?.nameOnBankAcc,
        accountNumber: bankInfo?.accountNumber,
        sourceCode: bankInfo?.sourceCode,
      });

      let tempEdit = JSON.parse(appDetail?.reviewFields || '{}')
      setIsDisable(tempEdit)
    }
  }, [!!appDetail?._id])
  //

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
  //
  const onImageChange = (e, key: 'bankStatement') => {
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
      {!disableStyles && <CommonHeader header="Bank Information">
        <img src={NavIcon} alt=""></img>
      </CommonHeader>}

      <Grid container rowSpacing={4} columnSpacing={2} mt={disableStyles ? "none" : 2}>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Name Of Bank"}
            placeholder="Enter Name Of Bank"
            name="bankName"
            value={values.bankName}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('bankName')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Name On Bank Account"}
            placeholder="Enter Name of Bank Account"
            name="nameOnBankAcc"
            value={values.nameOnBankAcc}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('nameOnBankAcc')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Account Number"}
            placeholder="Enter Account Number"
            name="accountNumber"
            value={values.accountNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('accountNumber')}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomTextInput
            label={"Sort Code"}
            placeholder="Enter Sort Code "
            name="sourceCode"
            value={values.sourceCode}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={fieldDisable('sourceCode')}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CustomFileInput
            label="Bank Statement"
            placeholder="Upload Any Utility Document"
            onChange={(e) => onImageChange(e, 'bankStatement')}
            disabled={fieldDisable('bankStatement')}
          />
        </Grid>
        {/* button */}
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
            Submit
          </LoadButton>
        </Grid>
      </Grid>

    </Box>
  );
};
