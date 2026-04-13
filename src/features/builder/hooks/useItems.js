
import { useQuery } from "@tanstack/react-query";
import { getItemById, getItems } from "../../../api/items.api";

// LIST
export const useItems = (endpoint) => {
  return useQuery({
    queryKey: ["items", endpoint],
    queryFn: () => getItems(endpoint),
    staleTime: 5 * 60 * 1000,
  });
};

// SINGLE ITEM
export const useItem = (endpoint, id) => {
  return useQuery({
    queryKey: ["item", endpoint, id],
    queryFn: () => getItemById(endpoint, id),
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
};