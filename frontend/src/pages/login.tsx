import React, { useState, useContext, useEffect } from 'react'
import { navigate } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import LoginSection from '~/components/sections/login/login-section.component'
import SignupSection from '~/components/sections/signup-section/signup-section.component'
import HeaderForm from '~/components/ui/general/authentication/header-form.component'

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

  const handleSubmit = async (event) => {
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
    <Layout>
      <SEO title="Unikorns Starter Kit" />
      <HeaderForm onclickLogin={loginNavigate} onclickSignup={signupNavigate} />
      {login && (
        <LoginSection
          onSubmit={handleSubmit}
          onChangeEmail={emailHandler}
          onChangePassword={passwordHandler}
          error={error}
          password={password}
          email={email}
        />
      )}

      {/* <SignupSection /> */}
    </Layout>
  )
}
export default LoginPage
