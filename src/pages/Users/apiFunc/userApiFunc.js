import { API_AXIOS } from "../../../http/interceptor";
import Apis from "../../../utils/apis";

export const confirmUpdate = function ({ status, id }) {
  return API_AXIOS.post(Apis.editAgentReqApproveRejectById + "/" + id, {
    status,
  });
};

export const getAgent = async (id) => {
  try {
    const { data } = await API_AXIOS.get(`${Apis.agentDetailsById}/${id}`);

    return data?.data;
  } catch (err) {
    console.log("agentdetails", err);
  }
};

export const deleteAgentRequestById = ({ id, deleteRequestRemark }) => {
  return API_AXIOS.post(`${Apis.deleteAgentRequestById}/${id}`, {
    deleteRequestRemark,
  });
};

export const deleteAgentById = (id) => {
  return API_AXIOS.delete(`${Apis.deleteAgentById}/${id}`);
};

/* For Employee */

export const confirmEmpUpdate = function ({ status, id }) {
  return API_AXIOS.post(Apis.editEmpReqApprovedRejectById + "/" + id, {
    status,
  });
};

export const getEmployee = async (id) => {
  try {
    const { data } = await API_AXIOS.get(`${Apis.getEmpDetailsById}/${id}`);
    console.log("data", data);
    return data?.data;
  } catch (err) {
    console.log("Employeedetails", err);
  }
};

export const agentAppRejById = ({ id, status }) => {
  return API_AXIOS.post(`${Apis.addAgentReqApproveRejectById}/${id}`, {
    status,
  });

  // try {
  //   const { data } = await API_AXIOS.get(
  //     `${Apis.addAgentReqApproveRejectById}/${id}`
  //   );

  //   return data;
  // } catch (err) {
  //   console.log("agentAppRejById", err);
  // }
};
