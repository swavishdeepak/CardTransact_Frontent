import React, { useState } from "react";
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
import {
  empStatusObj,
  empStatusColorObj,
} from "../../utils/menuItems/MenuItems";
import ApprvRejtEmp from "../../components/User/ApprvRejtEmp";
import EmpRemarkUpdateDetails from "../../components/User/EmpRemarkUpdateDetails";
let linkColor = Colors.LinkColor || "#000";

const EmployeesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { verifiedUser } = useAppSelector((state) => state.verifiedUser);
  const { data, refetch } = useEmployeeQuery(id);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteReq, setOpenDeleteReq] = useState(false);
  let empUpdateData = JSON.parse(data?.updatingData || "{}");

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };
  const handelDeleteReq = () => {
    setOpenDeleteReq(true);
  };

  const handleEdit = () => {
    navigate(`/addEmployee?id=${id}`);
  };

  console.log("empUpdateData",empUpdateData)

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      {Object.keys(empUpdateData)?.length > 0 && (
        <CustomBox>
          <CommonHeader
            status={empStatusObj[data?.editStatus]}
            statusColor={empStatusColorObj[data?.editStatus]}
            header={"Updating Employee Details"}
          >
            <ConfirmEmpUpdate id={id} />
          </CommonHeader>
          <EmpDetails employee={empUpdateData} />
        </CustomBox>
      )}
      <CustomBox>
        <CommonHeader
          status={empStatusObj[data?.status]}
          statusColor={empStatusColorObj[data?.status]}
          header={"EMPLOYEE DETAILS"}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {data?.status !== "new" ? (
              <>
                {verifiedUser?.data?.role !== "sup_admin" &&
                  !verifiedUser?.data?.isDeleteReq  && (
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
              </>
            ) : (
              <ApprvRejtEmp id={id} refetch={refetch} />
            )}
          </Box>
        </CommonHeader>
        <EmpDetails employee={data} />
        <EmpRemarkUpdateDetails/>
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
