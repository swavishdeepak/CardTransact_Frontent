import React, { useEffect, useState } from "react";
import { CustomBox } from "../MyCustom/CustomBox";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import Grid from "@mui/material/Grid";
import CustomTextInput from "../CustomInput";
import { Box } from "@mui/material";
import { Colors } from "../../utils/Colors";
import SingleCheckBox from "../MyCustom/SingleCheckBox";
import BasicSelect from "../BasicSelect";
import { LoadButton } from "../LoadButton";
import { useFormik } from "formik";
import { useGetModelsByAcquirer, useGetOptionsByModel } from "../../pages/Applications/getQuery/getQuery";
import { addApplication } from "../../pages/Applications/apiFunc/appApiFunc";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";


interface ApplicationInfoProps {
  disableStyles?: boolean;
  appId?: string;
  appDetail?: any;
  refetch?: any;
}

export const ApplicationInformation: React.FC<ApplicationInfoProps> = ({ disableStyles = false, appId, appDetail, refetch }) => {
  const [bankStatement, setBankStatement] = useState([]);
  const [selectedValue, setSelectedValue] = useState<string>("Select Model");
  const [selectedValue1, setSelectedValue1] = useState<string>("Select Rental");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  //javed start
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    data: modelData,
    isLoading: isLoadingModel
  } = useGetModelsByAcquirer(appDetail?.acquirer?.id);

  const {
    values,
    setFieldValue,
    handleSubmit,
    setValues
  } = useFormik({
    initialValues: {
      modelId: "",
      optionId: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log('values', values)
      try {
        let formData = new FormData();
        formData.append('data', JSON.stringify({ ...values }));

        let a = await addApplication({
          data: formData,
          id: appId,
          step: '5'
        })
        console.log('addApplication@', a)
        await queryClient.setQueryData(['useGetAppDetailById', appId], (x: any) => {
          let temp = { ...x, ...a.data }
          return temp
        });
        queryClient.invalidateQueries({
          queryKey: ['application'],
        });
        navigate("/viewApplications")
      }
      catch (err) {
        console.log('errInAddAppication5', err)
      }
      finally {
        console.log('appDetail', appDetail)
        setIsLoading(false)
      }
    },
  });
  //for optionList
  const {
    data: optionData,
    isLoading: isLoadingOption,
    refetch: refetchOption
  } = useGetOptionsByModel({
    acquirerId: appDetail?.acquirer?.id,
    modelId: values.modelId
  });

  const handleChange = (key: 'modelId' | 'optionId', event: any) => {
    // setSelectedValue(event.target.value);
    setFieldValue(key, event.target.value)
    if (key === 'modelId'
      && !isLoadingOption
      && optionData?.length > 0
      && !!values?.modelId
    ) {
      refetchOption()
    }
  };

  useEffect(() => {
    if (!!appDetail?._id) {
      const { models } = JSON.parse(appDetail?.options || '{}');
      setValues({
        modelId: models?._id ?? '',
        optionId: models?.options?._id ?? ''
      });

      let tempEdit = JSON.parse(appDetail?.reviewFields || '{}')
      setIsDisable(tempEdit);
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

  //javed end

  const handleChangeRental = (event: any) => {
    setSelectedValue1(event.target.value);
  };
  const handleChangeduration = (event: any) => {
    setSelectedValue2(event.target.value);
  };

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
      {/* {!disableStyles && <CommonHeader header="Application Information">
        <img src={NavIcon} alt=""></img>
      </CommonHeader>} */}

      {/* <Grid container rowSpacing={4} columnSpacing={2} mt={disableStyles ? "none" : 2}>
        <Grid item xs={12} md={4.5}>
          <CustomTextInput
            label={"Salesperson Name"}
            placeholder="Enter Salesperson Name"
          />
        </Grid>
        <Grid item xs={12} md={5.5}>
          <SingleCheckBox />
        </Grid>
      </Grid> */}
      {/* <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={4.5}>
          <CustomTextInput
            label={"Company Name"}
            placeholder="Enter Company Name"
          />
        </Grid>
      </Grid> */}
      <Grid container rowSpacing={1} columnSpacing={2} mt={1}>
        <Grid item xs={12} md={4.5}>
          <BasicSelect
            label="Model"
            sx={{
              position: "relative",
              border: "1px solid rgba(220, 220, 220, 1)",
              padding: "10px 6px 0px 8px",
            }}
            name={"modelId"}
            value={values.modelId}
            handleChange={(e) => handleChange('modelId', e)}
            size="small"
            items={modelData ?? [{
              label: 'No Data Available',
            }]}
            disabled={fieldDisable('modelId')}
          />

        </Grid>
        <Grid item xs={12} md={4.5}>
          <BasicSelect
            label="Rental"

            sx={{
              position: "relative",
              border: "1px solid rgba(220, 220, 220, 1)",
              padding: "10px 6px 0px 8px",
            }}
            name={"optionId"}
            value={values.optionId}
            handleChange={(e) => handleChange('optionId', e)}
            size="small"
            // items={optionData}
            items={optionData ?? [{
              label: 'No Data Available',
            }]}
            disabled={fieldDisable('optionId')}
          />

        </Grid>
        {/* <Grid item xs={12} md={4.5}>
          <BasicSelect
            label="Contract Duration"
            placeholder="abdab"
            sx={{
              position: "relative",
              border: "1px solid rgba(220, 220, 220, 1)",
              padding: "10px 6px 0px 8px",
            }}
            name={"selectedValue2"}
            value={selectedValue2}
            handleChange={handleChangeduration}
            size="small"
            items={Durationdata}
          />

        </Grid> */}
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
