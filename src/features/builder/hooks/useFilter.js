export const useFilter = ({items = [], search = ''}) => {
    if(search === '') return items;

    return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
};