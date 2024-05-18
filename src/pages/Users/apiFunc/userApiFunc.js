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
    console.log('data',data);
    return data?.data;
  } catch (err) {
    console.log("agentdetails", err);
  }
};
