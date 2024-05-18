import { useQuery } from "react-query";
import { getAgent } from "../apiFunc/userApiFunc";

export const useAgentQuery = (id) =>
  useQuery({
    queryKey: ["agent", id],
    queryFn: () => getAgent(id),
    staleTime: 1000 * 60 * 10,
    enabled:!!id
  });
