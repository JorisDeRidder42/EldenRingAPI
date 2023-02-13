import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetItemIds = (endpoint, page,limit) => {
    return useQuery(
        ['items',page, endpoint, limit],
        async () => (await getItems(endpoint, page, limit))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    )
}

export const useGetItem = (endpoint, id) => {
    return useQuery(
        ['id',id, endpoint],
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
    baseURL: `https://eldenring.fanapis.com/api`,
})

/**
 * @param {string} endpoint
 * @param {number} page
 * @param {string} page
 */
const getItems = (endpoint, page, limit) => {
    return client.get(
        `${endpoint}?limit=${limit}&page=${page}`
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