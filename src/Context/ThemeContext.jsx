import {createContext} from 'react'

const ThemeContext = createContext({
    selectedTheme: themes[0],
    setSelectedTheme: (themes) => {
        console.warn(`No Themeprovider found, de default implementation, which doesn't do anything, is used.`)
    }
})

export default ThemeContext;