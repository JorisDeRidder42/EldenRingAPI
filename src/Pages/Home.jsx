import { Container, Form, Image,Row, Col,Button } from "react-bootstrap";
import logoBig from '../assets/Elden_Ring_logo.png';
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

import { auth, googleProvider } from "../config/firebase";
import{ createUserWithEmailAndPassword,signInWithPopup, signOut } from 'firebase/auth';
import { Navigate } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState(false);
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log('user', user)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };

      const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email,password)
            setUser(true)
            return <Navigate to={'/data'}/>
        } catch (error) {
            console.error(error)
        }
        setUser(true)
      }
      const logOut = async () => {
        try {
            await signOut(auth)
            setUser(false)
        } catch (error) {
            console.error(error)
        }
        setUser(false);
      }

      const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            setUser(true)
            return <Navigate to={'/data'}/>
        } catch (error) {
            console.error(error)
        }
        setUser(true)
      }
    
    return(
            <Container fluid className="bground">
                <Container>
                    <div className="form-box">
                        <div className="text-center">
                            <Image src={logoBig} className="logoBig mt-5" />
                            <h2 className="m-4">Sign in</h2>
                             <Form noValidate validated={validated} onSubmit={handleSubmit} className="box">
                                <Row className="mb-3">
                                    <Form.Group md="4" controlId="validationCustomEmail">
                                    <Form.Control
                                        as={'input'}
                                        className="inputField"
                                        required
                                        type="text"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group md="4" controlId="validationCustom01">
                                    <Form.Control
                                        as={'input'}
                                        className="inputField"
                                        required
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Button onClick={signIn} className="cta-button m-3">LOGIN <FaArrowRightLong/>
                                    
                                </Button>
                                <Button onClick={signInWithGoogle} className="google-button m-3"><FaGoogle/>  Sign In with Google</Button>

                                {user && <Button onClick={logOut} className="logout-button m-3">LOGOUT</Button>}
                                    <LinkContainer to='/help'>
                                        <p>Can't sign in</p>
                                    </LinkContainer>
                                    <LinkContainer to='/account'>
                                        <p>Create account</p>
                                    </LinkContainer>
                                </Form>
                        </div>
                    </div>
                </Container> 
            </Container>
    )
}
export default Home;