import { useGetItemIds } from "./useItems"

export const useArmors = () => {
    return useGetItemIds('/armors');
}