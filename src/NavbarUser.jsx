import { React, useContext } from 'react';
import { Navbar, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ThemeContext from './Context/themeContext';
import { getAllAppData } from './Datas/AppData';
import {signInAnonymously } from 'firebase/auth';
import { auth } from './config/firebase';
import logo from "./assets/Elden_Ring_logo.png";
import { Navigate, useNavigate } from 'react-router-dom';

const NavbarUser = () => {
  const navigate = useNavigate();
  const signInAsQuest = async () => {
    try {
      await signInAnonymously(auth)
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }

    return (
      <Navbar expand="lg" className="bg-transparent">
        <Container>
        <LinkContainer to={"/"}>
                 <Navbar.Brand>
                       <Image src={logo} fluid className="logo"/>
                     </Navbar.Brand>              
                </LinkContainer>
                <Button className='cta-button' onClick={signInAsQuest}>LOGIN AS GUEST</Button>
        </Container>
      </Navbar>

    )
}
export default NavbarUser;