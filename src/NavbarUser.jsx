import { React, useContext } from 'react';
import { Navbar, Container, Image, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {signInAnonymously } from 'firebase/auth';
import { auth } from './config/firebase';
import logo from "./assets/Elden_Ring_logo.png";
import { useNavigate } from 'react-router-dom';
import {languages} from './i18n/languages.jsx'
import LanguageContext from './Context/languageContext';

const NavbarUser = () => {
  const {selectedLanguage, setSelectedLanguage} = useContext(LanguageContext)
  const navigate = useNavigate();

  const signInAsQuest = async () => {
    try {
      await signInAnonymously(auth)
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }
  const dropdownItem = (l) => (
    <NavDropdown.Item key={l.i18n} onClick={() => setSelectedLanguage(l)}>
        {l.flag} {l.name}
    </NavDropdown.Item>
)

    return (
      <Navbar collapseOnSelect expand="sm" className='nav-user'>
        <Container>
        <LinkContainer to={"/"}>
                 <Navbar.Brand>
                       <Image src={logo} fluid className="logo"/>
                     </Navbar.Brand>              
                </LinkContainer>  
                <NavDropdown title={selectedLanguage.flag} menuVariant="light" align="end">
                            {languages.map(l => dropdownItem(l))}
                    </NavDropdown>
                <select data-theme-picker name="themepicker" id="theme">
                    <option value="☀️">Light</option>
                    <option value="🌑">Dark</option>
                </select>
                <Button className='cta-button' onClick={signInAsQuest}>LOGIN AS GUEST</Button>
        </Container>
      </Navbar>

    )
}
export default NavbarUser;