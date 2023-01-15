import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetItemIds = (endpoint, pageNumber) => {
    return useQuery(
        ['endpoint',endpoint,pageNumber],
        async () => (await getItems(endpoint,pageNumber))?.data.data,
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
 * @param {string} endpoint @param {number} pageNumber 
 */
const getItems = (endpoint, pageNumber) => {
    return client.get(
        `${endpoint}?limit=20&page=${pageNumber}`
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
