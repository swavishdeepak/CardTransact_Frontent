// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import { Header } from "../../components/Dashboard/Header";
// import { CustomBox } from "../../components/MyCustom/CustomBox";
// import { CommonHeader } from "../../components/CommonHeader";
// import CustomButton from "../../components/CustomButton";
// import { LoadButton } from "../../components/LoadButton";
// import { Colors } from "../../utils/Colors";
// import { Grid } from "@mui/material";
// import DetailsSubTitle from "../../components/MyCustom/DetailsSubTitle";
// import DetailsSubTitleName from "../../components/MyCustom/DetailsSubTitleName";
// import ProofIcons from "../../assets/ProofIcon.svg";
// import ConfirmDialog from "../../components/ConfirmDialog";
// import { useNavigate } from "react-router-dom";

// export const ViewApplication = () => {
//   const navigate = useNavigate()
//   const [openApprove, setOpenApprove] = useState(false);
//   const [openReview, setOpenReview] = useState(false);

//   const handleOpenApprove = () => {
//     setOpenApprove(true);
//   };

//   const handleCloseApprove = () => {
//     setOpenApprove(false);
//   };

//   const handleOpenReview = () => {
//     setOpenReview(true);
//   };

//   const handleCloseRiview = () => {
//     setOpenReview(false);
//   };

//   const handleRedirect = ()=>{
//     navigate("/Re-evaluation")
//   }

//   const customBoxStyle = {
//     border: "1px solid #77D177",
//     marginTop: 4,
//   };

//   const headerStyle = {
//     fontSize: "15px",
//     fontWeight: "500",
//     lineHeight: "24px",
//   };

//   return (
//     <Box sx={{ marginTop: "2rem", width: "100%" }}>
//       <Header />
//       <CustomBox>
//         <CommonHeader header={"Applications Details"}>
//           <Box sx={{ display: "flex", gap: 1 }}>
//             <CustomButton
//               label={"Delete"}
//               hoverColor={Colors.LinkColor}
//               style={{
//                 backgroundColor: `${Colors.LinkColor}`,
//                 color: "#fff",
//               }}
//             />
//             <CustomButton
//               label={"Edit"}
//               style={{
//                 backgroundColor: "#fff",
//                 color: `${Colors.editColor}`,
//                 border: `1px solid ${Colors.editColor}`,
//               }}
//             />
//           </Box>
//         </CommonHeader>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="SELECTED ACQUIRER"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Acquirer"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"WorldPay"} />
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="STATUS"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Status"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Pending"} />
//             </Grid>

//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Remarks"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"--"} />
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="MERCHANT INFORMATION"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Legal Name"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Merchnat01"} />
//             </Grid>

//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Trading Name"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Merchant01"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Mobile Number"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"+44 730091234"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Email Address"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"merchnats@gmail.com"} />
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="MERCHNAT TRADING ADDRESS INFORMATION"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"House/Flat Address"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"1 Charter Way"} />
//             </Grid>

//             <Grid item xs={3}>
//               <DetailsSubTitle title={"City"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Liskeared"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"County"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Devon"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Country"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"United Kingdom"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Post Code"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"PI24 4HX"} />
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="MERCHNAT BANK INFORMATION"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Name of Bank"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"LIoyds"} />
//             </Grid>

//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Name on Bank Ac."} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Merchant01"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Account No"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"12345678"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Sort Code"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"01-02-03"} />
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="SALESPERSON INFORMATION"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Name"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Agent01"} />
//             </Grid>

//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Company/Individual"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Individual"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Model"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Input Filed"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Rental"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"0.0.00"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Contract Duration"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"Input Field"} />
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Total Commission"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName name={"0.00"} />
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <CustomBox style={customBoxStyle}>
//           <Grid item xs={12}>
//             <CommonHeader
//               style={{ width: "100%" }}
//               headerStyle={headerStyle}
//               header="ATTACHMENT"
//             ></CommonHeader>
//           </Grid>
//           <Grid
//             container
//             rowSpacing={2}
//             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//             mt={3}
//           >
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Address Proof"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName>
//                 <Box sx={{ display: "flex", gap: 1, height: "1.5rem", width: "1.5rem"}}>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                 </Box>
//               </DetailsSubTitleName>
//             </Grid>

//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Site Pictures"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName>
//                 <Box sx={{ display: "flex", gap: 1,height: "1.5rem", width: "1.5rem" }}>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                 </Box>
//               </DetailsSubTitleName>
//             </Grid>
//             <Grid item xs={3}>
//               <DetailsSubTitle title={"Bank Statements"} />
//             </Grid>
//             <Grid item xs={9}>
//               <DetailsSubTitleName>
//                 <Box sx={{ display: "flex", gap: 1,height: "1.5rem", width: "1.5rem" }}>
//                   <img src={ProofIcons} alt=""></img>
//                   <img src={ProofIcons} alt=""></img>
//                 </Box>
//               </DetailsSubTitleName>
//             </Grid>
//           </Grid>
//         </CustomBox>
//         <Box sx={{ display: "flex", marginTop: "2rem", gap: 2 }}>
//           <LoadButton
//             type="submit"
//             onClick={handleOpenApprove}
//             style={{
//               width: "15%",
//               fontWeight: "700",
//               backgroundColor: Colors.successColor,
//               color: "#fff",
//             }}
//           >
//             Approve
//           </LoadButton>
//           <LoadButton
//             onClick={handleOpenReview}
//             type="submit"
//             hoverColor={Colors.deletebtnColor}
//             style={{
//               width: "15%",
//               backgroundColor: Colors.deletebtnColor,
//               color: "#fff",
//               fontWeight: "700",
//             }}
//           >
//             Review
//           </LoadButton>
//         </Box>
//       </CustomBox>
//       <ConfirmDialog
//         open={openApprove}
//         title={"Confirmation"}
//         desc={"Are You Sure want You want to"}
//       >
//         <Typography
//           sx={{ fontSize: "12px", color: "#048519", fontWeight: "700" }}
//         >
//           Approved this Application?
//         </Typography>
//         <Box sx={{ display: "flex", marginTop: "1rem", gap: 2 }}>
//           <CustomButton
//             onClick={handleCloseApprove}
//             label=" No, Not Now"
//             hoverColor={Colors.editColor}
//             style={{
//               backgroundColor: Colors.editColor,
//               color: "#fff",
//               fontSize: "10px",
//               fontWeight: "700",
//             }}
//           />
//           <CustomButton
//             label=" Yes, Confirm"
          
//             hoverColor={Colors.successColor}
//             style={{
//               backgroundColor: Colors.successColor,
//               color: "#fff",
//               fontSize: "10px",
//               fontWeight: "700",
//             }}
//           />
//         </Box>
//       </ConfirmDialog>
//       <ConfirmDialog
//         open={openReview}
//         title={"Confirmation"}
//         desc={"Are You Sure want You want to"}
//       >
//         <Box sx={{ display: "flex", gap:1 }}>
//           <Typography
//             sx={{ fontSize: "12px", color: Colors.deletebtnColor, fontWeight: "700" }}
//           >
//             Review
//           </Typography>
//           <Typography
//             sx={{ fontSize: "12px", color: Colors.blackColor, fontWeight: "700" }}
//           >
//             This Application and send it to re-evaluation?
//           </Typography>
//         </Box>
//         <Box sx={{ display: "flex", marginTop: "1rem", gap: 2, justifyContent: "center" }}>
//           <CustomButton
//             onClick={handleCloseRiview}
//             label=" No, Not Now"
//             hoverColor={Colors.editColor}
//             style={{
//               backgroundColor: Colors.editColor,
//               color: "#fff",
//               fontSize: "10px",
//               fontWeight: "700",
//             }}
//           />
//           <CustomButton
//             label=" Yes, Confirm"
//             onClick={handleRedirect}
//             hoverColor={Colors.successColor}
//             style={{
//               backgroundColor: Colors.successColor,
//               color: "#fff",
//               fontSize: "10px",
//               fontWeight: "700",
//             }}
//           />
//         </Box>
//       </ConfirmDialog>
//     </Box>
//   );
// };

import React, { useState } from "react";
import { Box,Menu, MenuItem, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import Table from "../../components/Table";
import MoreVert from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../components/ConfirmDialog";
import CustomButton from "../../components/CustomButton";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { LoadButton } from "../../components/LoadButton";
import CustomTextInput from "../../components/CustomInput";

interface Column {
  field: string;
  headerName: string;
  minWidth: number;
  flex: number;
  sortable?: boolean;
  renderCell?: (params: any) => React.ReactNode;
}

interface Row {
  id: number;
  app_Id: number;
  salesPerson: string;
  company_Individuals: string | null;
  acquirer: string;
  merchnatName: string;
  mid: number;
  tid: number;
  status: string;
  action: string;
}

export const ViewApplication: React.FC = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const columns: Column[] = [
    {
      field: "id",
      headerName: "Sr.No",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "app_Id",
      headerName: "App ID",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "salesPerson",
      headerName: "SalesPerson",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "company_Individuals",
      headerName: "Company/Individuals",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "acquirer",
      headerName: "Acquirer",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "merchnatName",
      headerName: "MerchantName",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "mid",
      headerName: "MID",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "tid",
      headerName: "TID",
      minWidth: 20,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params: any) => <More {...params} />,
      minWidth: 100,
      flex: 1,
    },
  ];

  const rows: Row[] = [
    {
      id: 1,
      app_Id: 1,
      salesPerson: "Sam",
      company_Individuals: "Individual",
      acquirer: "WorldPay",
      merchnatName: "Enna",
      mid: 1,
      tid: 1,
      status: "Approved",
      action: "Edit"


    },
    {
      id: 2,
      app_Id: 2,
      salesPerson: "Tom",
      company_Individuals: "Individual",
      acquirer: "EVO",
      merchnatName: "Paul",
      mid: 2,
      tid: 2,
      status: "Pending",
      action: "Edit"


    },
    {
      id: 3,
      app_Id: 3,
      salesPerson: "Tom",
      company_Individuals: "Individual",
      acquirer: "EVO",
      merchnatName: "Paul",
      mid: 3,
      tid: 3,
      status: "Rejected",
      action: "Edit"
    },
    {
      id: 4,
      app_Id: 4,
      salesPerson: "Tom",
      company_Individuals: "Individual",
      acquirer: "EVO",
      merchnatName: "Paul",
      mid: 4,
      tid: 4,
      status: "Rejected",
      action: "Edit"
    },
   
  
  ];

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <Table
        columns={columns}
        rows={rows}
        title="All Applications"
        getRowId={(row: any) => row.id}
       
      />
    </Box>
  );
};

const More = (params: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDelete, setOpenDelete] = useState(false);
 

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

 

  

  return (
    <>
      <MoreVert sx={{ cursor: "pointer" }} onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          to={
            params && params.row && params.row.id
              ? `/appicationDetails/${params.row.id}`
              : ""
          }
          style={{
            textDecoration: "none",
            color: "#000000",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          <MenuItem>View Details</MenuItem>
        </Link>
        <Link
        to={
          params && params.row && params.row.id
            ? `/viewApplications/editApplication/${params.row.id}`
            : ""
        }
          style={{
            textDecoration: "none",
            color: "#000000",
            fontWeight: "400",
            fontSize: "12px",
          }}
        >
          <MenuItem>Edit</MenuItem>
        </Link>
        <MenuItem onClick={handleDeleteOpen}>Delete</MenuItem>
        {/* delete popup open */}
        <ConfirmDialog
          open={openDelete}
          title={"Confirmation"}
          desc="Are you Sure want to Delete this User?"
          handleClose={() => setOpenDelete(false)}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <CustomButton
              label="cancel"
              onClick={handleCloseDelete}
              hoverColor="#898989"
              style={{
                backgroundColor: "#898989",
                color: "#fff",
                borderRadius: "10px",
              }}
            />
            <CustomButton
              label="Delete"
              
              hoverColor="#C10404"
              style={{
                backgroundColor: "#C10404",
                color: "#fff",
                borderRadius: "10px",
              }}
            />
          </Box>
        </ConfirmDialog>
      </Menu>
    
    </>
  );
};

export default More;




