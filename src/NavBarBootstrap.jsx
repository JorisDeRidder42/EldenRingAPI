import { React } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import { getAllAppData } from './Datas/AppData';
import { useAuth } from './Context/authContext';
import { auth } from './config/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const NavBarBootstrap = () => {
    const { authenticated } = useAuth();
    const navigate = useNavigate();
    const allData = getAllAppData();

    const handleSignOut = async () => {
        try {
          await signOut(auth);
          console.log('User signed out');
          navigate('/signIn');
        } catch (error) {
          // Handle sign-out errors
          console.error('Error signing out:', error);
        }
      };

    return (
        <Navbar collapseOnSelect expand="sm" className="nav">
                <LinkContainer to={"/"}>
                    <Navbar.Brand>
                        <Image src={logo} fluid className="logo"/>
                    </Navbar.Brand>              
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                         {allData.map(e => 
                            <LinkContainer key={e.id} to={`${e.endpoint}`}>
                                <Nav.Link>{e.title}</Nav.Link>
                            </LinkContainer>)}   
                    </Nav>
                </Navbar.Collapse>
                {authenticated && <button className='logout-button' onClick={handleSignOut}>Logout</button>}
        </Navbar>
    )
}
export default NavBarBootstrap;
