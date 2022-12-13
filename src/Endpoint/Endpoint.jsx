import Bosses from "../Pages/Bosses";
import Classes from "../Pages/Classes";
import Home from "../Pages/Home";
import Weapons from "../Pages/Weapons";

const endpoints = [
    {
        id: 0,
        title: '',
        endpoint: '/',
        element: <Home/>  
    },
    {
        id: 1,
        title: 'Bosses',
        endpoint: '/bosses',
        element: <Bosses/>
    },
    {
        id: 2,
        title: 'Weapons',
        endpoint: '/weapons',
        element: <Weapons/>
    },
    {
        id: 3,
        title: 'Classes',
        endpoint: '/classes',
        element: <Classes/>
    },

]

export const getAllEndpoints = () => {
    return endpoints.map(e => ({...e}))
}