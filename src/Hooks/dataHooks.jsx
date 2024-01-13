import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetItemIds = (endpoint) => {
    return useQuery(
        ['items', endpoint],
        async () => (await getItems(endpoint))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    )
}

export const useGetItem = (endpoint, id) => {
    return useQuery(
        ['id', id, endpoint],
        async () => (await getItemById(endpoint, id))?.data.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    )
}

/*
* ______________________________________________________
*/

const client = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
})

/**
 * @param {string} endpoint
 */
const getItems = (endpoint) => {
    return client.get(
        `${endpoint}`
    )
}
/**
 * @param {string} endpoint
 * @param {number} id 
 */

const getItemById = (endpoint, id) => {
    return client.get(
        `${endpoint}/${id}`
    )
}