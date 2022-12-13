import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Container,Nav} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import logo from "./assets/Elden_Ring_logo.png";
import { getAllEndpoints } from './Endpoint/Endpoint';

const endpoints = getAllEndpoints();

const NavBarBootstrap = () => {
    return (
        <Navbar expand="lg">
            <Container fluid className>
                <LinkContainer to={"/"}>
                    <Navbar.Brand>
                        <Image src={logo} className="logo"/>
                    </Navbar.Brand>              
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {endpoints.map(e => 
                            <LinkContainer to={e.endpoint} key={e.id}>
                               <Nav.Link>{e.title}</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBarBootstrap;