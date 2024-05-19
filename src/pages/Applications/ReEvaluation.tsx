import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import CustomTextInput from "../../components/CustomInput";
import CheckBox from "../../components/MyCustom/CheckBox";
import { LoadButton } from "../../components/LoadButton";
import { ChenkBoxLables } from "../../utils/menuItems/MenuItems";
import ConfirmDialog from "../../components/ConfirmDialog";
import done from "../../assets/done.svg";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

type CheckboxState = Record<string, boolean>;
const ReEvaluation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (el: any) => {
    setCheckboxes((prevCheckboxes: any) => ({
      ...prevCheckboxes,
      [el.value]: !prevCheckboxes[el.value],
    }));
  };

  const handleSubmit = async () => {
    try {
      // let data={checkboxes}
      let res = await API_AXIOS.post(`${Apis.reviewAppById}/${state?._id}`, checkboxes)
      console.log('res', res);
      queryClient.invalidateQueries('application');
      navigate("/viewApplications")
      // navigate({ pathname: 'viewApplications' })
    } catch (e) {
      console.log('error in appREVIEWById', e)
    }
    // setOpen(true);
    // console.log("Selected checkboxes:", checkboxes);
  };
  console.log('state', state)
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Send Application For Review">
          <CustomButton
            hoverColor={Colors.deletebtnColor}
            label="Cancel"
            style={{
              backgroundColor: Colors.deletebtnColor,
              color: "#fff",
            }}
          />
        </CommonHeader>
        <CustomBox
          style={{ border: `1px solid ${Colors.LinkColor}`, marginTop: "2rem" }}
        >
          <Typography
            sx={{
              color: Colors.blackColor,
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Application Information
          </Typography>
          <CustomTextInput
            label="Remarks"
            labelStyle={{ marginTop: "1rem" }}
            rows={4}
            placeholder="Tyle Here..."
            multiline={true}
          />
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: Colors.Textcolor,
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Enables Fields which need To Be Edited
            </Typography>
            {ChenkBoxLables.map((el, index) => (
              <CheckBox
                key={index}
                label={el.label}
                checked={!!checkboxes[el.value]}
                onChange={() => handleCheckboxChange(el)}
              />
            ))}
          </Box>
        </CustomBox>
        <LoadButton
          onClick={handleSubmit}
          style={{ marginTop: "1.5rem", width: "25%" }}
        >
          Submit
        </LoadButton>
      </CustomBox>
      <ConfirmDialog
        open={open}
        title={
          <img
            src={done}
            alt=""
            style={{ height: "3rem", width: "3rem" }}
          ></img>
        }
      >
        <Box sx={{ textAlign: "center" }} onClick={handleClose}>
          <Typography
            sx={{ color: "#048519", fontSize: "15px", fontWeight: "800" }}
          >
            Sent for Review
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Typography
              sx={{ color: "#000000", fontSize: "10px", fontWeight: "800" }}
            >
              this Application is sent for
            </Typography>
            <Typography
              sx={{ color: "#048519", fontSize: "10px", fontWeight: "800" }}
            >
              Review
            </Typography>
          </Box>
        </Box>
      </ConfirmDialog>
    </Box>
  );
};

export default ReEvaluation;

