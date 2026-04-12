import { useGetItemIds } from "../useItems";

export const useWeapons = () => {
    return useGetItemIds('/weapons');
}