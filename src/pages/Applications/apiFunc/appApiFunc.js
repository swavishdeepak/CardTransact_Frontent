import axios from "axios";
import { API_AXIOS, API_AXIOS_MULTIPART } from "../../../http/interceptor";
import Apis from "../../../utils/apis";

export const getAcquirer = () => {
  return API_AXIOS.get(Apis.acquirer)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log("first error", err);
    });
};

export const addApplication = ({ data, id = "", step = "" }) => {
  return API_AXIOS_MULTIPART.post(
    `${Apis.addApplication}?step=${step}&id=${id}`,
    data
  )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("first error", err);
    });
};

export const getAppDetailById = (id) => {
  return API_AXIOS.get(`${Apis.getAppDetailById}/${id}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log("first error", err);
    });
};

export const getApplications = () => {
  return API_AXIOS.get(`${Apis.allApplications}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log("first error", err);
    });
};

// let res= await API_AXIOS.post(`${Apis.reviewAppById}/${id}`,data)

export const getModelsByAcquirer = (id) => {
  return API_AXIOS.get(`${Apis.getModelsByAcquirer}/${id}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log("getModelsByAcquirer", err);
    });
}

export const getOptionsByModel = ({
  acquirerId,
  modelId
}) => {
  return API_AXIOS.get(`${Apis.getOptionsByModel}?acquirerId=${acquirerId}&model=${modelId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log("getOptionsByModel", err);
    });
}