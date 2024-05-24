import { useQuery } from "react-query";
import { getTier } from "../apiFunc/tierApiFunc";

export const useTierQuery = (id) =>
  useQuery({
    queryKey: ["tier"],
    queryFn: getTier,
    staleTime: 1000 * 60 * 60,
  });
