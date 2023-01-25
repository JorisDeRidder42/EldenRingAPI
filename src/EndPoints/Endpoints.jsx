import BossesDetailCard from "../Details/BossesDetailCard"
import WeaponDetailCard from "../Details/WeaponDetailCard"

export const getAllEndpoints = () => {
    return endpoints.map(e => ({...e}))
}

const endpoints = [
    {
        id: 0,
        title: 'Weapons',
        endpoint: 'weapons',
        page:0,
        detail: <WeaponDetailCard endpoint={'weapons'}/>
    },
    {
        id: 1,
        title: 'Shields',
        endpoint: 'shields',
        page:0,
        detail: <WeaponDetailCard endpoint={'shields'}/>
    },
    {
        id: 3,
        title: 'Sorceries',
        endpoint: 'sorceries',
        page: 0,
        detail: <WeaponDetailCard endpoint={'sorceries'}/>
    },
    {
        id: 4,
        title: 'Ashes of war',
        endpoint: 'ashes',
        page: 0,
        detail: <WeaponDetailCard endpoint={'ashes'}/>
        
    }
]
