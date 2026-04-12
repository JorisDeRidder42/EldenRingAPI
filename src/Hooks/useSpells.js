import { useGetItemIds } from "./useItems"

export const useSpells = () => {
    return useGetItemIds('/spells');
}