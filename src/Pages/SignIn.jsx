import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container, Image } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../Context/authContext';
import logoBig from '../assets/Elden_Ring_logo.png';
import videobg from '../assets/elden-ring-bg.webm'

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signIn, signOut } = useAuth()
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signIn(emailRef.current.value, passwordRef.current.value)
      setLoggedIn("User wil be navigated to the homepage");
      navigate('/');
    } catch {
      setError("Failed to sign in, try again later")
    }
    setLoading(false)
    setLoggedIn(false)
  }

  return (
    <div className="video-container h-full w-full">
      <video loop muted autoPlay data-loaded='true' className="bg-video">
        <source data-src={videobg} type="video/webm" src={videobg}/>
      </video>
        <Container className="box mt-5">
        {loggedIn && <Alert className="alert-info" variant="info">{loggedIn }</Alert>}
                {error && <Alert className="alert-danger" variant="danger">{error}</Alert>}
          <Card className='card' style={{ width: '25rem' }}>
              <Card.Body className="form-box">
                <Card.Img variant="top" src={logoBig} />
                <h2 className="text-center text-white">Log in</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" placeholder="EMAIL" className="inputField" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" placeholder="PASSWORD" className="inputField" ref={passwordRef} required />
                  </Form.Group>
                  <Button disabled={loading} className="cta-button w-100 mt-3" type="submit">
                    Log In
                  </Button>
                  <div className="links">
                      <p className="w-100 text-center mt-3">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </p>
                    <p className="w-100 text-center mt-2">
                      Need an account? <Link to="/register">Sign Up</Link>
                    </p> 
                  </div>
                </Form>
              </Card.Body>
          </Card>
      </Container>
      </div>
  )
}
export default SignIn;