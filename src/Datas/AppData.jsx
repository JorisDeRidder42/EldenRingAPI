import BossesDetailCard from "../Details/BossesDetailCard"
import WeaponDetailCard from "../Details/WeaponDetailCard"


export const getAllAppData = () => {
    return appData.map(e => ({...e}))
}

const appData = [
    {
        id: 0,
        title: 'Weapons',
        endpoint: '/weapons',
        detail: <WeaponDetailCard endpoint={'/weapons'}/>
    },
    {
        id: 1,
        title: 'Shields',
        endpoint: '/shields',
        detail: <WeaponDetailCard endpoint={'/shields'}/>
    },
    {
        id: 2,
        title: 'Sorceries',
        endpoint: '/sorceries',
        detail: <WeaponDetailCard endpoint={'/sorceries'}/>
    },
    {
        id: 3,
        title: 'Ashes of war',
        endpoint: '/ashes',
        detail: <WeaponDetailCard endpoint={'/ashes'}/>
    },
    {
        id: 4,
        title: 'Bosses',
        endpoint: '/bosses',
        detail: <BossesDetailCard endpoint={'/bosses'}/>
    }
]
