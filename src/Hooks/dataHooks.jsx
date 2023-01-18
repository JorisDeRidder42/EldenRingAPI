import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetItemIds = (endpoint) => {
    return useQuery(
        ['endpoint',endpoint],
        async () => (await getItems(endpoint))?.data.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    )
}

export const useGetItem = (endpoint,id) => {
    return useQuery(
        ['id',id, endpoint],
        async () => (await getItemById(endpoint,id))?.data.data,
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
    baseURL: `https://eldenring.fanapis.com/api/`,
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
 * @param {number} id 
 */

const getItemById = (endpoint,id) => {
    return client.get(
        `${endpoint}/${id}`
    )
}
