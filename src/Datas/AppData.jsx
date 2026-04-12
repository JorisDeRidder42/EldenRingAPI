export const getAllAppData = () => {
    return appData.map(e => ({...e}))
}

const appData = [
    {
        id: 0,
        title: 'Weapons',
        endpoint: '/weapons',
    },
    {
        id: 1,
        title: 'Shields',
        endpoint: '/shields',
    },
    {
        id: 2,
        title: 'Sorceries',
        endpoint: '/sorceries',
    },
    {
        id: 3,
        title: 'Ashes of war',
        endpoint: '/ashes',
    },
    {
        id: 4,
        title: 'Armors',
        endpoint: '/armors',
    },
]
