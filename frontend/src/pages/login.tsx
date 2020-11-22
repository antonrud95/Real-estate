import React, { useState, useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { navigate, Link } from 'gatsby'

import LoginSection from '~/components/sections/login/login-section.component'
import SignupSection from '~/components/sections/signup-section/signup-section.component'
import HeaderForm from '~/components/ui/general/authentication/header-form.component'

import Logo from '~/assets/icons/logo.svg'

import { UserContext } from '~/contexts/user-context.context'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [login, setLogin] = useState(true)
  const [signup, setSignup] = useState(false)

  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      navigate('/hotels')
    }
  }, [user])

  const handleLoginSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:1337/auth/local/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      })

      const data = await response.json()
      console.log('data', data)

      if (data.message) {
        setError(data.message[0].messages[0].message)
        return
      }
      setUser(data)
    } catch (err) {
      setError('Something went wrong' + err)
    }
  }

  const handleSignupSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(
        'http://localhost:1337/auth/local/register',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            username: email,
            email,
            password,
          }),
        }
      )
      const data = await response.json()
      if (data.message) {
        setError(data.message[0].messages[0].message)
        return
      }
      console.log('data', data)
      setUser(data)
    } catch (err) {
      setError('Something went wrong')
    }
  }

  const emailHandler = (event) => {
    setError('')
    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    setError('')
    setPassword(event.target.value)
  }

  const loginNavigate = () => {
    setLogin(true)
    setSignup(false)
  }

  const signupNavigate = () => {
    setLogin(false)
    setSignup(true)
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <Link to="/">
              <Logo />
            </Link>
            <HeaderForm
              onclickLogin={loginNavigate}
              onclickSignup={signupNavigate}
            />
            {login && (
              <LoginSection
                onSubmit={handleLoginSubmit}
                onChangeEmail={emailHandler}
                onChangePassword={passwordHandler}
                error={error}
                password={password}
                email={email}
              />
            )}
            {signup && (
              <SignupSection
                onSubmit={handleSignupSubmit}
                onChangeEmail={emailHandler}
                onChangePassword={passwordHandler}
                error={error}
                password={password}
                email={email}
              />
            )}
          </Col>
          <Col md="6" />
        </Row>
      </Container>
    </>
  )
}
export default LoginPage
