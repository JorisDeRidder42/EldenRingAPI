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
export const useSearchItems = (endpoint, search) => {
    return useQuery(
        ['items',search, endpoint],
        async () => (await getItemById(endpoint, search))?.data.data,
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
        `${endpoint}?limit=20&page=${page}`
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

const getSearchItems = (endpoint, search) => {
    return client.get(
        `${endpoint}?name=${search}`
    )
}
