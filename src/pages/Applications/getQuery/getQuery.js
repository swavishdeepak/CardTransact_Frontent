import { useQuery } from "react-query";
import { getAcquirer, getAppDetailById, getApplications } from "../apiFunc/appApiFunc";

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
            return { ...el, value: el?._id, label: el?.name }
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