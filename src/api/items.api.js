import { client } from "./client";

export const getItems = (endpoint) => {
  return client.get(`${endpoint}?limit=200`);
};

export const getItemById = (endpoint, id) => {
  return client.get(`${endpoint}/${id}`);
};