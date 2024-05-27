import React, { useRef, useState } from "react";
import { Box, ListItem} from "@mui/material";
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
import { useAppSelector } from "../../redux/hooks";
import { userTypes } from "../../utils/menuItems/MenuItems";
import ChangePassword from "../../components/User/Profile/ChangePassword";
import SendRequestPass from "../../components/User/Profile/SendRequestPass";

 const UserProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {verifiedUser} = useAppSelector((state) => state.verifiedUser);
  const [image, setImage] = useState();
  const [dialogOpen, setDialogOpen] = useState({
    changePass: false,
    sendRequest: false,
  });


  const toggleModal=(key:'changePass'|'sendRequest')=>{
    setDialogOpen((prev)=>{
        return {...prev,[key]:!prev[key]}
    });
  }


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
          onClick={handleImageClick}
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
              <DetailsSubTitleName name={verifiedUser?.data?.name} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Role"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={userTypes[verifiedUser?.data?.role as keyof typeof userTypes]} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Mobile Number"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={verifiedUser?.data?.mobile || "NA"} />
            </Grid>
            <Grid item xs={3}>
              <DetailsSubTitle title={"Email Address"} />
            </Grid>
            <Grid item xs={9}>
              <DetailsSubTitleName name={verifiedUser?.data?.email} />
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
        <ChangePassword toggleModal={toggleModal}/>
      </ConfirmDialog>
      <ConfirmDialog open={dialogOpen.sendRequest}>
        <SendRequestPass toggleModal={toggleModal}/>
      </ConfirmDialog>
    </Box>
  );
};

export default UserProfile;


