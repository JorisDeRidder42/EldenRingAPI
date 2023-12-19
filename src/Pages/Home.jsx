import { Container, Form, Image,Row, Col,Button } from "react-bootstrap";
import logoBig from '../assets/Elden_Ring_logo.png';
import { useState } from "react";

const Home = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };
    
    return(
            <Container fluid className="bground">
                <Container>
                    <div className="form-box">
                        <div className="text-center">
                            <Image src={logoBig} className="logoBig mt-5" />
                            <h2 className="m-5">Sign in</h2>
                             <Form noValidate validated={validated} onSubmit={handleSubmit} className="box">
                                <Row className="mb-3">
                                    <Form.Group md="4" controlId="validationCustomUsername">
                                    <Form.Control
                                        as={'input'}
                                        className="inputField"
                                        required
                                        type="text"
                                        placeholder="Username"
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
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Button type="submit" className="cta-button mt-3">LOGIN --</Button>
                                    <p>Cant sign in</p>
                                    <p>Create account</p>
                                </Form>
                        </div>
                    </div>
                </Container> 
            </Container>
    )
}
export default Home;