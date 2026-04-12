import { useGetItemIds } from "../useItems"

export const useShields = () => {
    return useGetItemIds('/shields');
}