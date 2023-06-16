import { React, useContext } from 'react';
import { Button, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import ThemeContext from './Context/themeContext';
import { getAllAppData } from './Datas/AppData';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const NavBarBootstrap = ({currentPage}) => {
    const {lightTheme, setLightTheme} = useContext(ThemeContext);
    const themeClass = lightTheme === true ? 'light' : 'dark'
    const allData = getAllAppData();

    return (
        <Navbar collapseOnSelect expand="md" bg={themeClass} variant={themeClass}>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>
                        <Image src={logo} fluid className="logo"/>
                    </Navbar.Brand>              
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                         {allData.map(e => 
                            <LinkContainer key={e.id} to={`${e.endpoint}&page=${currentPage}`}>
                                <Nav.Link>{e.title}</Nav.Link>
                            </LinkContainer>)}   
                    </Nav>
                        <Button variant='tertiary' className={lightTheme ? 'text-dark': 'text-light'} onClick={() => setLightTheme(o => !o)}>{lightTheme ? <BsFillMoonFill/> : <BsSunFill/>}</Button>
                </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBarBootstrap;