import { React } from 'react';
import { Navbar, Container, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {signInAnonymously } from 'firebase/auth';
import { auth } from './config/firebase';
import logo from "./assets/Elden_Ring_logo.png";
import { useNavigate } from 'react-router-dom';

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
      <Navbar expand="sm" className='bg-dark'>
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