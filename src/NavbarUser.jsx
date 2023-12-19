import { React, useContext } from 'react';
import { Button, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import ThemeContext from './Context/themeContext';
import { getAllAppData } from './Datas/AppData';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const NavbarUser = ({currentPage}) => {
    const {lightTheme, setLightTheme} = useContext(ThemeContext);
    const themeClass = lightTheme === true ? 'light' : 'dark'

    return (
        <Navbar collapseOnSelect expand="md" bg={themeClass} variant={themeClass}>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>
                        <Image src={logo} fluid className="logo"/>
                    </Navbar.Brand>              
                </LinkContainer>
                    <button onClick={() => console.log('clicked')}>Login as user</button>
        </Navbar>
    )
}
export default NavbarUser;