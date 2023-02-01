import { useContext } from 'react';
import {React} from 'react';
import { Form, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import PageContext from './Context/pageContext';
import ThemeContext from './Context/themeContext';
import { getAllEndpoints } from './EndPoints/Endpoints';

const NavBarBootstrap = () => {
    const {lightTheme, setLightTheme} = useContext(ThemeContext);
    const {page, setPage} = useContext(PageContext);
    const themeClass = lightTheme === true ? 'light' : 'dark'
    const endpoints = getAllEndpoints();

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
                         {endpoints.map(e => <LinkContainer key={e.id} to={`${e.endpoint}&page=${page}`}>
                            <Nav.Link>{e.title}</Nav.Link>
                        </LinkContainer>)}   
                        </Nav>
                    <Form.Check 
                        type="switch" checked={!lightTheme} 
                        onChange={() => setLightTheme(o => !o)} />
                </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBarBootstrap;