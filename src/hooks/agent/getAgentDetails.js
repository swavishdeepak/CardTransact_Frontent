import { API_AXIOS } from "../../http/interceptor";
import Apis from "../../utils/apis";

export const getAgentDetails = async (id) => {
  try {
    const { data } = await API_AXIOS.get(`${Apis.agentDetailsById}/${id}`);
    // setState(data.data);
    return data
  } catch (err) {
    console.log("agentdetails", err);
  }
};
