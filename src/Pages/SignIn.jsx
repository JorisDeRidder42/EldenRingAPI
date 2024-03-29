import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container, Image } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../Context/authContext';
import logoBig from '../assets/Elden_Ring_logo.png';
import useLanguage from "../Hooks/useLanguage";

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signIn } = useAuth()
  const [loggedIn, setLoggedIn] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {text} = useLanguage()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      setLoggedIn("Login Successful! Welcome back!");
      await signIn(emailRef.current.value, passwordRef.current.value)
      navigate('/');

    } catch {
      setError("The email or password is incorrect. Please verify or create a new account")
    }
    setLoading(false)
    setLoggedIn("")
  }

  return (
    <>
        <div className="box">
        {loggedIn && <Alert variant="success" className="alert">{loggedIn }</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
          <Card className='card m-5' style={{ width: '25rem' }}>
              <Card.Body className="form-box">
                <Card.Img variant="top" src={logoBig} />
                <h2 className="text-center text-white">{text['login']}</h2>
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
                    {text['login']}
                  </Button>
                  <div className="links">
                      <p className="w-100 text-center mt-3">
                      <Link to="/forgot-password">{text['forgot']}</Link>
                    </p>
                    <p className="w-100 text-center mt-2">{text['info']}
                      <Link to="/register">{text['sign-up']}</Link>
                    </p> 
                  </div>
                </Form>
              </Card.Body>
          </Card>
      </div>
      </>
  )
}
export default SignIn;