import { useQuery } from "react-query";
import { getAcquirer, getAppDetailById, getApplications, getModelsByAcquirer, getOptionsByModel } from "../apiFunc/appApiFunc";

// getAcquirer
export const useGetAcquirer = () => {
    let res = useQuery({
        queryKey: ['acquirer'],
        queryFn: () => getAcquirer(),
        staleTime: 1000 * 60 * 60,
        // cacheTime: 1000 * 60 * 60,
        // refetchInterval: 1000 * 60 * 60,
        // refetchIntervalInBackground: 1000 * 60 * 60,
        // refetchOnWindowFocus: false,
        // refetchOnMount: true,
        // refetchOnReconnect: false,
        // refetchOnReconnectFailure: false,
        // refetchOnFocus: false
    });
    let temp = []
    if (!!res?.data) {
        temp = res?.data.map((el) => {
            return { ...el, value: el?._id, label: el?.model }
        })
    }
    return { ...res, data: temp }
};

export const useGetModelsByAcquirer = (id) => {
    let res = useQuery({
        queryKey: ['getModelsByAcquirer', id],
        queryFn: () => getModelsByAcquirer(id),
        staleTime: 1000 * 60 * 60,
        enabled: !!id
    });
    let temp = []
    if (!!res?.data) {
        temp = res?.data.map((el) => {
            return { ...el, value: el?._id, label: el?.model }
        })
    }
    return { ...res, data: temp }
};

export const useGetOptionsByModel = ({
    acquirerId,
    modelId
}) => {
    let res = useQuery({
        queryKey: ['getOptionsByModel'],
        queryFn: () => getOptionsByModel({
            acquirerId,
            modelId
        }),
        enabled: !!modelId,
        staleTime: 1000 * 60 * 60
    });
    let temp = []
    if (!!res?.data) {
        temp = res?.data.map((el) => {
            return { ...el, value: el?._id, label: el?.value }
        })
    }
    return { ...res, data: temp }
};




// getAppDetailById
export const useGetAppDetailById = (id) => {
    return useQuery({
        // ['acquirer', id], getAppDetailById
        queryKey: ['acquirer', id],
        queryFn: () => getAppDetailById(id),
        staleTime: 1000 * 60 * 60,
        enabled: !!id
    });
};
// getApplications
export const useGetApplications = () => {
    return useQuery({
        queryKey: ['application'],
        queryFn: getApplications,
        staleTime: 1000 * 60 * 60
    });
};