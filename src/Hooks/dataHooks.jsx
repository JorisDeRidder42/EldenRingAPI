import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetItemIds = (endpoint, page) => {
    return useQuery(
        ['items',page, endpoint],
        async () => (await getItems(endpoint, page))?.data,
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
 */
const getItems = (endpoint, page) => {
    return client.get(
        `${endpoint}?page=${page}`
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