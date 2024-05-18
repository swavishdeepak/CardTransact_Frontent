import React, { useEffect, useState } from "react";
import BasicSelect from "../BasicSelect";
import { CustomBox } from "../MyCustom/CustomBox";
import { Colors } from "../../utils/Colors";
import { CommonHeader } from "../CommonHeader";
import NavIcon from "../../assets/navIcon.svg";
import { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@mui/material";
import { useGetAcquirer, useGetAppDetailById } from "../../pages/Applications/getQuery/getQuery";
import { useFormik } from "formik";
import { LoadButton } from "../LoadButton";
import { addApplication } from "../../pages/Applications/apiFunc/appApiFunc";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
interface SelectAquirerProps {
  appId?: string;
  setAppId?: any;
  appDetail?: any;
  refetch?: any;
}

const SelectAquirer: React.FC<SelectAquirerProps> = ({
  appId,
  setAppId,
  appDetail,
  refetch
}) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const { data: selectAcquirer } = useGetAcquirer();
  const { data, isLoading: appLoading } = useGetAppDetailById(appId);
  const navigate = useNavigate();

  const {
    values,
    setFieldValue,
    handleSubmit,
    setValues
  } = useFormik({
    initialValues: {
      acquirer: appDetail?.acquirer?.id || '',
    },
    onSubmit: async (value) => {
      setIsLoading(true);
      const { acquirer } = value;
      try {
        let formData = new FormData();
        formData.append('data', JSON.stringify({ acquirer }));
        let a = await addApplication({
          data: formData,
          ...(!!appId && { id: appId }),
          step: '1'
        });
        setAppId(a?.data?._id);
        navigate(".", { state: a?.data })
        await queryClient.setQueryData(['acquirer', appId], (x: any) => {
          let temp = { ...x, ...a?.data }
          return temp
        })
      }
      catch (error) {
        console.log('errorAddApplication1', error);
      }
      finally {
        setIsLoading(false)
      }
    },
  });
  //initial
  useEffect(() => {
    if (!!appDetail?.acquirer?.id) {
      setValues({
        acquirer: appDetail?.acquirer?.id
      })
    }
  }, [!!appDetail?.acquirer?.id]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    // setSelectedValue(event.target.value);
    setFieldValue('acquirer', event.target.value)
  };
  console.log('valuesSelectAcquer', values)
  return (
    <CustomBox
      style={{
        border: `0.5px solid ${Colors.LinkColor}`,
        marginTop: "2rem",
      }}
    >
      <CommonHeader header="Select Aquirer">
        <img src={NavIcon} alt=""></img>
      </CommonHeader>
      <Grid container rowSpacing={2} columnSpacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <BasicSelect
            label="Select Aquirer"
            placeholder="Select"
            sx={{
              width: "100%",
              position: "relative",
              border: "1px solid rgba(220, 220, 220, 1)",
              padding: "10px 6px 0px 8px",
            }}
            name={"selectedValue2"}
            value={values.acquirer || null}
            handleChange={handleChange}
            size="small"
            items={selectAcquirer || []}
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
            Next
          </LoadButton>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default SelectAquirer;
