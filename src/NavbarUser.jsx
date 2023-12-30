import { React, useContext } from 'react';
import { Navbar, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ThemeContext from './Context/themeContext';
import { getAllAppData } from './Datas/AppData';
import {signInAnonymously } from 'firebase/auth';
import { auth } from './config/firebase';
import logo from "./assets/Elden_Ring_logo.png";

const NavbarUser = () => {
    // const {lightTheme, setLightTheme} = useContext(ThemeContext);
    // const themeClass = lightTheme === true ? 'light' : 'dark'
  const signInAsQuest = async () => {
    try {
      await signInAnonymously(auth)
      console.log('clicked and logged in...')
    } catch (error) {
      console.error(error)
    }
  }

    return (
      <Navbar expand="lg" className="nav">
        <Container>
        <LinkContainer to={"/"}>
                 <Navbar.Brand>
                       <Image src={logo} fluid className="logo"/>
                     </Navbar.Brand>              
                </LinkContainer>
                <button className='cta-button' onClick={signInAsQuest}>LOGIN AS GUEST</button>
        </Container>
      </Navbar>

    )
}
export default NavbarUser;