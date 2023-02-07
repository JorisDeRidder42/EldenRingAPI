import { React, useContext } from 'react';
import { Button, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import ThemeContext from './Context/themeContext';
import { getAllAppData } from './Datas/AppData';

const NavBarBootstrap = ({currentPage, setCurrentPage}) => {
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
                         {allData.map(e => <LinkContainer key={e.id} to={`${e.endpoint}&page=${currentPage}`}>
                            <Nav.Link>{e.title}</Nav.Link>
                        </LinkContainer>)}   
                        </Nav>
                    <Form.Check 
                        type="switch" checked={!lightTheme} 
                        onChange={() => setLightTheme(o => !o)} />
                </Navbar.Collapse>
                <Button onClick={() => setCurrentPage(count => count + 1)}>IncrementPage</Button>
        </Navbar>
    )
}
export default NavBarBootstrap;