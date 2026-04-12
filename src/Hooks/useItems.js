import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api/items.api";

export const useGetItemIds = (endpoint, query) => {
  return useQuery({
    queryKey: ["items", endpoint, query],
    queryFn: async () => (await getItems(endpoint))?.data,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};