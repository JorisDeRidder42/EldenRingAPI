import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../api/items.api";

export const useGetItem = (endpoint, id) => {
  return useQuery({
    queryKey: ["item", endpoint, id],
    queryFn: async () => (await getItemById(endpoint, id))?.data,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};