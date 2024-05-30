import React, { useEffect, useMemo, useState } from "react";
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
import ConfirmDialog from "../../components/ConfirmDialog";
import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "../../components/User/UserDetails";
import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";
import ConfirmUpdate from "../../components/User/ConfirmUpdate";
import {
  agentMoveToRecycleById,
  confirmUpdate,
  deleteAgentById,
  deleteAgentRequestById,
} from "./apiFunc/userApiFunc";
import { useAgentQuery } from "./getQuery/useAgentQuery";
import { useTierQuery } from "../Tier/getQuery/useTierQuery";
import {
  agentStatusObj,
  userStatusColorObj,
} from "../../utils/menuItems/MenuItems";
import ApprvRejtAgent from "../../components/User/ApprvRejtAgent";
import AgentDeleteReq from "../../components/User/AgentDeleteReq";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AgentDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [openDelete, setOpenDelete] = useState(false);
  const [openDeleteReq, setOpenDeleteReq] = useState(false);
  const { data: tier } = useTierQuery();
  const { data, refetch, remove } = useAgentQuery(id);
  let updatingData = JSON.parse(data?.updatingData || "{}");
  const { verifiedUser } = useSelector((state) => state.verifiedUser);
  const auth = verifiedUser?.data || {};

  const handleDeleteOpen = () => {
    setOpenDelete(true);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  const handelEdit = () => {
    navigate(`/addAgent?id=${id}`);
  };

  const tierObj = useMemo(() => {
    return tier?.reduce((acc, curr) => {
      acc[curr._id] = curr.name;
      return acc;
    }, {});
  }, [tier]);

  const handleDelete = async () => {
    try {
      const { data } = await deleteAgentById(id);
      remove();
      toast.success(data?.message);
      navigate("/viewAgents");
    } catch (err) {
      console.log(err);
      toast.error(err.reponse?.data?.message);
    }
  };

  const handleMoveRecycle = async () => {
    try {
      const { data } = await agentMoveToRecycleById(id);
      refetch();
      toast.success(data?.message);
      navigate("/viewAgents");
    } catch (err) {
      console.log("handleRecycle", err);
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      {Object.keys(updatingData)?.length > 0 && (
        <CustomBox>
          <CommonHeader
            status={agentStatusObj[data?.editStatus]}
            statusColor={userStatusColorObj[data?.editStatus]}
            header={"Updating Details"}
          >
            {auth?.role === "sup_admin" && <ConfirmUpdate id={id} />}
          </CommonHeader>
          <UserDetails user={updatingData} tierObj={tierObj} />
        </CustomBox>
      )}
      <CustomBox>
        <CommonHeader
          status={agentStatusObj[data?.status]}
          statusColor={userStatusColorObj[data?.status]}
          header={"AGENT DETAILS"}
        >
          {data?.status ? (
            data?.status !== "new" ? (
              <Box sx={{ display: "flex", gap: 1 }}>
                {auth?.role === "sup_admin" ? (
                  <>
                    {/* <CustomButton
                      onClick={handleMoveRecycle}
                      label={"Move To Trash"}
                      hoverColor={`${Colors.LinkColor}`}
                      style={{
                        backgroundColor: `${Colors.LinkColor}`,
                        color: "#fff",
                      }}
                    /> */}
                    <CustomButton
                      onClick={handleDeleteOpen}
                      label={"Delete"}
                      hoverColor={`${Colors.LinkColor}`}
                      style={{
                        backgroundColor: `${Colors.LinkColor}`,
                        color: "#fff",
                      }}
                    />
                  </>
                ) : !data?.isDeleteReq ? (
                  <CustomButton
                    onClick={() => setOpenDeleteReq((state) => !state)}
                    label={"Delete Request"}
                    hoverColor={`${Colors.LinkColor}`}
                    style={{
                      backgroundColor: `${Colors.LinkColor}`,
                      color: "#fff",
                    }}
                  />
                ) : null}

                <CustomButton
                  label={"Edit"}
                  style={{
                    backgroundColor: "#fff",
                    color: `${Colors.LinkColor}`,
                    border: `1px solid ${Colors.LinkColor}`,
                  }}
                  onClick={handelEdit}
                />
              </Box>
            ) : auth?.role === "sup_admin" ? (
              <ApprvRejtAgent id={id} refetch={refetch} />
            ) : null
          ) : null}
          {}
        </CommonHeader>
        <UserDetails user={data} tierObj={tierObj} />

        <Grid></Grid>
      </CustomBox>
      <ConfirmDialog
        open={openDelete}
        handleClose={() => setOpenDelete(false)}
        title={"Confirmation"}
        desc="Are You Sure want You Want to Delete This User"
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <CustomButton
            label="Cancel"
            onClick={handleDeleteClose}
            hoverColor="#898989"
            style={{
              backgroundColor: "#898989",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
          <CustomButton
            label="Delete"
            onClick={handleDelete}
            hoverColor="#C10404"
            style={{
              backgroundColor: "#C10404",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
        </Box>
      </ConfirmDialog>
      <ConfirmDialog
        open={openDeleteReq}
        handleClose={() => setOpenDeleteReq((state) => !state)}
        title={"Confirmation"}
        desc="Are You Sure want you want to submit delete request"
      >
        <AgentDeleteReq
          handleClose={() => setOpenDeleteReq((state) => !state)}
          id={id}
          refetch={refetch}
        />
      </ConfirmDialog>
    </Box>
  );
};

export default AgentDetails;
