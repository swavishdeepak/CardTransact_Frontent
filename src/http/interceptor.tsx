import axios from "axios";
import Apis from "../utils/apis";


const requestInterceptor = (config: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = `Bearer ${token}`;
  }

  return config;
};

const API_AXIOS = axios.create({
  baseURL: Apis.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
const API_AXIOS_MULTIPART = axios.create({
  baseURL: Apis.baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});


API_AXIOS.interceptors.request.use(requestInterceptor);
API_AXIOS_MULTIPART.interceptors.request.use(requestInterceptor);

export { API_AXIOS,API_AXIOS_MULTIPART };
