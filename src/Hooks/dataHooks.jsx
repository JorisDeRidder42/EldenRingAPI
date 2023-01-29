import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetItemIds = (endpoint, page) => {
    return useQuery(
        ['items','page',page, endpoint],
        async () => (await getItems(endpoint, page))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    )
}

export const useGetItem = (endpoint, id) => {
    return useQuery(
        ['id','endpoint',id, endpoint],
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
 * @param {number} pageParam
 */
const getItems = (endpoint, pageParam) => {
    return client.get(
        `${endpoint}?limit=20&page=${pageParam}`
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
