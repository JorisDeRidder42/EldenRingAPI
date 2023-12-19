import { React, useContext } from 'react';
import { Navbar, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import ThemeContext from './Context/themeContext';
import { getAllAppData } from './Datas/AppData';
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const NavbarUser = () => {
    // const {lightTheme, setLightTheme} = useContext(ThemeContext);
    // const themeClass = lightTheme === true ? 'light' : 'dark'

    return (
      <Navbar expand="lg" className="nav">
        <Container>
        <LinkContainer to={"/"}>
                 <Navbar.Brand>
                       <Image src={logo} fluid className="logo"/>
                     </Navbar.Brand>              
                </LinkContainer>
                <button className='cta-button' onClick={() => console.log('clicked')}>LOGIN AS GUEST</button>
        </Container>
      </Navbar>

    )
}
export default NavbarUser;