import { API_AXIOS } from "../../../http/interceptor";
import Apis from "../../../utils/apis";

export const getTier = async () => {
  try {
    const { data } = await API_AXIOS.get(Apis.tier);

    return data?.data;
  } catch (err) {
    console.log("get Tier", err);
  }
};
