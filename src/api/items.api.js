import { client } from "./client";

export const getItems = async (endpoint) => {
  const allData = [];

  for (let page = 0; page < 10; page++) {
    const res = await client.get(
      `${endpoint}?limit=100&page=${page}`
    );
    
    const items = res?.data.data || [];

    if(!items || items.length === 0) break;

    allData.push(...items);
  }
  return { data: allData };

};

export const getItemById = (endpoint, id) => {
  return client.get(`${endpoint}/${id}`);
};