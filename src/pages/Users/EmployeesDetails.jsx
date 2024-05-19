import React, {useState } from "react";
import { Box } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { Grid } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { CommonHeader } from "../../components/CommonHeader";
import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
import DetailsHeader from "../../components/MyCustom/DetailsHeader";
import { Colors } from "../../utils/Colors";
import CustomTextInput from "../../components/CustomInput";
import { LoadButton } from "../../components/LoadButton";
import fileIcons from "../../assets/fileIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import EmpDelete from "../../components/User/EmpDelete";
import EmpDeleteReq from "../../components/User/EmpDeleteReq";
import { useAppSelector } from "../../redux/hooks";
import { useEmployeeQuery } from "./getQuery/useAgentQuery";
import EmpDetails from "../../components/User/EmpDetails";
import ConfirmEmpUpdate from "../../components/User/ConfirmEmpUpdate";
let linkColor = Colors.LinkColor || "#000";


const EmployeesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { verifiedUser } = useAppSelector((state) => state.verifiedUser);
  const  { data }   = useEmployeeQuery(id)
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteReq, setOpenDeleteReq] = useState(false);
  let empUpdateData = JSON.parse(data?.updatingData || "{}")

  

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };
  const handelDeleteReq = () => {
    setOpenDeleteReq(true);
  };

  const handleEdit = () => {
    navigate(`/addEmployee?type=employees&id=${id}`);
  };

  console.log("data", data)

 
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      {Object.keys(empUpdateData)?.length > 0 && (
        <CustomBox>
          <CommonHeader header={"Updating Employee Details"}>
            <ConfirmEmpUpdate id={id} />
          </CommonHeader>
          <EmpDetails employee={empUpdateData} />
        </CustomBox>
      )}
      <CustomBox>
        <CommonHeader header={"EMPLOYEE DETAILS"}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {(verifiedUser?.data?.role !== "sup_admin" &&
              verifiedUser?.data?.isDeleteReq === true) && (
                <CustomButton
                  label={"Delete Request"}
                  hoverColor={linkColor}
                  onClick={handelDeleteReq}
                  style={{
                    backgroundColor: `${linkColor}`,
                    color: "#fff",
                  }}
                />
              )}
            {verifiedUser?.data?.role === "sup_admin" && (
              <CustomButton
                label={"Delete"}
                onClick={handleDeleteOpen}
                hoverColor={linkColor}
                style={{
                  backgroundColor: `${linkColor}`,
                  color: "#fff",
                }}
              />
            )}
            <CustomButton
              label={"Edit"}
              style={{
                backgroundColor: "#fff",
                color: `${linkColor}`,
                border: `1px solid ${linkColor}`,
              }}
              onClick={handleEdit}
            />
          </Box>
        </CommonHeader>
        {/* <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"personal Details"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Name"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={ "NA"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Mobile Number"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"NA"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Email Address"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={ "NA"} />
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Address Details"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"House/Flat Address"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"NA"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"City"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"NA"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"County"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={"NA"} />
          </Grid>

          <Grid item xs={2}>
            <DetailsSubTitle title={"Country"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={ "NA"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Post Code"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName
              name={"NA"}
            />
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Bank Details"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Bank Name"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName
              name={"NA"}
            />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Name on Bank A/c"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName
              name={ "NA"}
            />
          </Grid>

          <Grid item xs={2}>
            <DetailsSubTitle title={"Sort Code"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName
              name={"NA"}
            />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Account Number"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name={ "NA"} />
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
          <Grid item xs={12}>
            <DetailsHeader heading={"Attachment"} />
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Address Proof"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name="">
              <img src={fileIcons} alt=""></img>
            </DetailsSubTitleName>
          </Grid>
          <Grid item xs={2}>
            <DetailsSubTitle title={"Bank Statement"} />
          </Grid>
          <Grid item xs={10}>
            <DetailsSubTitleName name="">
              <img src={fileIcons} alt=""></img>
            </DetailsSubTitleName>
          </Grid>
          <Grid item xs={12} mt={2}>
            <CustomTextInput
              label="Add Special Remarks"
              rows={4}
              multiline={true}
              placeholder="Type Here..."
            />
          </Grid>
        </Grid>
        <LoadButton
          type="submit"
          style={{
            marginTop: 3,
            width: "20%",
          }}
        >
          Save Remark
        </LoadButton>
        <Grid></Grid> */}
         <EmpDetails employee={data}/> 
         <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={3}
        >
         
          <Grid item xs={12} mt={2}>
            <CustomTextInput
              label="Add Special Remarks"
              rows={4}
              multiline={true}
              placeholder="Type Here..."
            />
          </Grid>
        </Grid>
         <LoadButton
          type="submit"
          style={{
            marginTop: 3,
            width: "20%",
            "@media(max-width: 600px)":{
               width: "100%"
            }
          }}
        >
          Save Remark
        </LoadButton>
      </CustomBox>
      <ConfirmDialog
        open={openDelete}
        title={"Confirmation"}
        desc="Are you Sure want to Delete this Employee?"
        handleClose={() => setOpenDelete(false)}
      >
        <EmpDelete setOpenDelete={setOpenDelete} empId={id} />
      </ConfirmDialog>
      <ConfirmDialog
        open={openDeleteReq}
        title={"Confirmation"}
        desc="Are you Sure want to Delete this Employee?"
        handleClose={() => setOpenDeleteReq(false)}
      >
        <EmpDeleteReq setOpenDeleteReq={setOpenDeleteReq} empId={id} />
      </ConfirmDialog>
    </Box>
  );
};

export default EmployeesDetails;
