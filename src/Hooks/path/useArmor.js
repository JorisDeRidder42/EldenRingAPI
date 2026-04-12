import { useGetItemIds } from "../useItems";

export const useArmor = () => {
    return useGetItemIds('/armor');
}