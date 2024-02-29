import React, { useRef, useState } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CommonHeader } from "../../components/CommonHeader";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../utils/Colors";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import ConfirmDialog from "../../components/ConfirmDialog";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextInput from "../../components/CustomInput";
import { LoadButton } from "../../components/LoadButton";
import CheckBox from "../../components/MyCustom/CheckBox";

export const UserProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState();
  const [dialogOpen, setDialogOpen] = useState({
    changePass: false,
    sendRequest: false,
  });

  const [inputVisibility, setInputVisibility] = useState({
    email: false,
    mobile: false,
  });

//   const handleDialogOpen = (dialog: string) => {
//     setDialogOpen({ ...dialogOpen, [dialog]: true });
//   };

//   const handleDialogClose = (dialog: string) => {
//     setDialogOpen({ ...dialogOpen, [dialog]: false });
//   };

  const toggleModal=(key:'changePass'|'sendRequest')=>{
    setDialogOpen((prev)=>{
        return {...prev,[key]:!prev[key]}
    });
  }

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setInputVisibility({
      ...inputVisibility,
      [type]: event.target.checked,
    });
  };

  const handleImageClick = (event: any) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Profile Details">
          <Box sx={{ display: "flex", gap: 1 }}>
            <CustomButton
              label="Change Password"
              style={{
                border: `1px solid ${Colors.editColor}`,
                color: Colors.editColor,
                fontSize: "14px",
                fontWeight: "700",
                // height: "2rem"
              }}
              onClick={() => toggleModal("changePass")}
            />
            <CustomButton
              label="Send Request To Edit"
              style={{
                border: `1px solid ${Colors.editColor}`,
                color: Colors.editColor,
                fontSize: "14px",
                fontWeight: "700",
                // height: "2rem"
              }}
              onClick={() => toggleModal("sendRequest")}
            />
          </Box>
        </CommonHeader>
        <ListItem
          onClick={handleImageClick}
          sx={{
            marginTop: "1rem",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {image ? (
            <Avatar
              alt="img"
              src={URL.createObjectURL(image)}
              sx={{
                width: { xs: 40, md: 56 },
                height: { xs: 40, md: 56 },
                backgroundColor: "black",
                position: "relative",
              }}
            />
          ) : (
            <Avatar
              alt="img"
              src=""
              sx={{
                width: { xs: 40, md: 56 },
                height: { xs: 40, md: 56 },
                backgroundColor: "black",
                position: "relative",
              }}
            />
          )}

          <Box
            sx={{
              width: 25,
              height: 25,
              borderRadius: "50%",
              backgroundColor: Colors.LinkColor,
              p: "3px",
              marginTop: "2.5rem",
              marginLeft: "2.5rem",
              position: "absolute",
            }}
          >
            <CameraAltIcon
              fontSize="small"
              sx={{ color: "#fff", cursor: "pointer" }}
            />
            <input type="file" ref={inputRef} onChange={handleImageChange}   style={{display: "none"}}/>
          </Box>
        </ListItem>
        <CustomBox style={{ border: `1px solid ${Colors.LinkColor}` }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <DetailsHeader heading="Personal Details" />
            </Grid>

            <Grid item xs={3}>
              <DetailsSubTitle title={"Name"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Agent01"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Role"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Super admin"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Mobile Number"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"+44 7300912119"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Email Address"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Agent12@gmail.com"} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <DetailsHeader heading="Banks Details" />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Bank Name"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"loyod"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Name on Bank A/C"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"Agent01"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Sort Code"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"01-02-2023"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Acount Number"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={"12345678"} />
            </Grid>
          </Grid>
        </CustomBox>
      </CustomBox>
      <ConfirmDialog open={dialogOpen.changePass}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "serif",
              }}
            >
              Change Password
            </Typography>
            <CloseIcon
              onClick={() => toggleModal("changePass")}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "1rem",
              fontFamily: "enter",
            }}
          >
            Kindly confirm Your Registered Email Address to Received An{" "}
            <br></br>OTP For Verification
          </Typography>
          <CustomTextInput
            labelStyle={{ marginTop: "2rem" }}
            label="Registered Email Address"
            palceholder="Email Address"
          />
          <LoadButton style={{ marginTop: "1.5rem", width: "50%" }}>
            Confirm
          </LoadButton>
        </Box>
      </ConfirmDialog>
      <ConfirmDialog open={dialogOpen.sendRequest}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "serif",
              }}
            >
              Send Request
            </Typography>
            <CloseIcon
              onClick={() => toggleModal("sendRequest")}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 1)",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "1rem",
              fontFamily: "enter",
            }}
          >
            To Change Your Email Address or Mobile number you have to <br></br>
            Send a request to the Super Admin
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
          >
            <CheckBox
              label="Email Address"
              labelStyle={{ fontSize: "0.8rem" }}
              onChange={(event) => handleCheckboxChange(event, "email")}
            />
            <CheckBox
              label="Mobile Number"
              labelStyle={{ fontSize: "0.8rem" }}
              onChange={(event) => handleCheckboxChange(event, "mobile")}
            />
          </Box>
          {inputVisibility.email && (
            <>
              <CustomTextInput
                labelStyle={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
                label="Old Email Address"
              />
              <CustomTextInput
                labelStyle={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
                label="New Email Address"
              />
            </>
          )}
          {inputVisibility.mobile && (
            <>
              <CustomTextInput
                labelStyle={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
                label="Old Mobile Number"
              />
              <CustomTextInput
                labelStyle={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
                label="New Mobile Number"
              />
            </>
          )}
          <LoadButton style={{ marginTop: "1.5rem", width: "50%" }}>
            Confirm
          </LoadButton>
        </Box>
      </ConfirmDialog>
    </Box>
  );
};
