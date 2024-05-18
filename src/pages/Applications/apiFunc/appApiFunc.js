import axios from 'axios';
import { API_AXIOS, API_AXIOS_MULTIPART } from '../../../http/interceptor';
import Apis from '../../../utils/apis';

export const getAcquirer = () => {
    return API_AXIOS.get(Apis.acquirer).then((res) => {
        return res.data.data;
    })
        .catch((err) => {
            console.log('first error', err)
        });
}

export const addApplication = ({ data, id = '', step = '' }) => {
    return API_AXIOS_MULTIPART.post(
        `${Apis.addApplication}?step=${step}&id=${id}`, data
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log('first error', err)
        });
}

export const getAppDetailById = (id) => {
    return API_AXIOS.get(
        `${Apis.getAppDetailById}/${id}`
    )
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log('first error', err)
        });
}

export const getApplications = () => {
    return API_AXIOS.get(
        `${Apis.allApplications}`
    )
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log('first error', err)
        });
}

