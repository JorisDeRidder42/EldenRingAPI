import { createContext } from "react";

const ThemeContext = createContext({
    lightTheme: true,
    setLightTheme : (boolean) => {
    }
})

export default ThemeContext;