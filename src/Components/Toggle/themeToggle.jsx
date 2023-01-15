import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../../Context/themeContext';
import "react-toggle/style.css" // for ES6 modules
import Toggle from 'react-toggle';


const ThemeToggle = () => {
    const {lightTheme, setLightTheme} = useContext(ThemeContext)
    return (
        <>
            <Toggle 
                defaultChecked={lightTheme === true ? false : true} 
                onChange={setLightTheme(lightTheme === true ? "light" : "dark")}/>
        </>
    );
};

export default ThemeToggle