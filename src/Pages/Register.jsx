import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container, ProgressBar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../Context/authContext';
import logoBig from '../assets/Elden_Ring_logo.png';

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signUp } = useAuth()
  const [error, setError] = useState("")
  const [registered, setRegistered] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      setRegistered("Registration successful! Get ready to explore.")
      await signUp(emailRef.current.value, passwordRef.current.value)
      navigate('/');
    } catch {
      setError("Registration failed. Please check your details and try again.")
    }
    setLoading(false)
    setRegistered("")
  }

  return (
    <div className="box">
          <Card className='card' style={{ width: '25rem' }}>
              <Card.Body className="form-box">
                <Card.Img variant="top" src={logoBig} />
                <h2 className="text-center text-white">Sign up</h2>
                {registered && <Alert variant="success" className="alerts">{registered}</Alert>}
                {error && <Alert variant="danger" className="alerts">{error}</Alert>}
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
                   SIGN UP
                  </Button>
                  <div className="links">
                    <p className="w-100 text-center mt-2">
                      Already have an account? <Link to="/signIn">Sign in</Link>
                    </p> 
                  </div>
                </Form>
              </Card.Body>
          </Card>
      </div>
  )
}
export default Register;