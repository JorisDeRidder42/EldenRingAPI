import { React, useContext } from 'react';
import { Button, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import { getAllAppData } from './Datas/AppData';
import { useAuth } from './Context/authContext';
import { auth } from './config/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {languages} from './i18n/languages.jsx'
import LanguageContext from './Context/languageContext.jsx';

const NavBarBootstrap = () => {
    const {selectedLanguage, setSelectedLanguage} = useContext(LanguageContext)
    const { authenticated } = useAuth();
    const navigate = useNavigate();
    const allData = getAllAppData();

    const dropdownItem = (l) => (
        <NavDropdown.Item key={l.i18n} onClick={() => setSelectedLanguage(l)}>
            {l.flag} {l.name}
        </NavDropdown.Item>
    )

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
                    <NavDropdown title={selectedLanguage.flag} menuVariant="light" align="end">
                            {languages.map(l => dropdownItem(l))}
                    </NavDropdown>
                </Navbar.Collapse>
                {authenticated && <button className='logout-button' onClick={handleSignOut}>Logout</button>}
        </Navbar>
    )
}
export default NavBarBootstrap;
