import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const useGetItems = (endpoint) => {
    return useQuery(
        ['endpoint', endpoint],
        () => getItems(endpoint),
        {
            
        } 
    )
}

export const useGetItemById = (id) => {
    return useQuery(
        ['id', id],
        async () => await getItemsById(id),
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
 */

const getItems = ({endpoint}) => {
    return client.get(
        `${endpoint}`
    )
}

/**
 * @param {number} id 
 */

const getItemsById = (id, endpoint) => {
    return client.get(
        `${endpoint}/${id}`
    )
}
