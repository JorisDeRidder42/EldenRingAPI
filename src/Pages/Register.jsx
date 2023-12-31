import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container, ProgressBar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../Context/authContext';
import logoBig from '../assets/Elden_Ring_logo.png';
import videobg from '../assets/elden-ring-bg.webm'

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signUp, signOut } = useAuth()
  const [error, setError] = useState("")
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value)
      setLoggedIn(true)
      navigate('/dashboard');
    } catch {
      setError("Failed to sign up")
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
          <Card className='card' style={{ width: '25rem' }}>
              <Card.Body className="form-box">
                <ProgressBar className="progress mb-5 w-100">
                    <ProgressBar className="custom-progress" now={20} key={1} />
                    <ProgressBar className="disabled-progress" now={20} key={2} />
                    <ProgressBar className="disabled-progress" now={20} key={3} />
                    <ProgressBar className="disabled-progress" now={20} key={4} />
                    <ProgressBar className="disabled-progress" now={20} key={5} />
                </ProgressBar>
                <Card.Img variant="top" src={logoBig} />
                <h2 className="text-center text-white">Sign up</h2>
                {signedIn && <Alert variant="info">{signedIn}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" placeholder="EMAIL" className="inputField" ref={emailRef} required />
                  </Form.Group>
                  <div className="links">
                    <p className="offer text-white mt-2">Recieve news, special offers, feedback surveys, and playtest invitations from 'fromsoftware'</p>
                  </div>
                  <Button disabled={loading} className="cta-button w-100 mt-3" type="submit">
                   SIGN UP
                  </Button>
                  <div className="links">
                    <p className="w-100 text-center mt-2">
                      Already have an account? <Link to="/signup">Sign in</Link>
                    </p> 
                  </div>
                </Form>
              </Card.Body>
          </Card>
      </Container>
      </div>
  )
}
export default Register;