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
                <div class="flex justify-center items-center h-screen">
  <div class="bg-gray-200 p-6">
    <p>This div is centered using Tailwind CSS</p>
  </div>
</div>
                    {/* <div className="form flex justify-center items-center h-screen">
                       <Image src={logoBig} className="logoBig" />
                       <h2>Sign in</h2>
                       <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit" className="cta-button">LOGIN --</Button>
                            <p>Cant sign in</p>
                            <p>Create account</p>
                        </Form>
                    </div> */}
            </Container>
    )
}
export default Home;