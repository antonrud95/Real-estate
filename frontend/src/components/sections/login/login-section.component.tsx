import React, { useState, useContext, useEffect } from 'react'
import styles from './login-section.module.scss'

import { UserContext } from '~/contexts/user-context.context'

const LoginSection = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { user, setUser } = useContext(UserContext)
  // console.log('user', user)

  useEffect(() => {
    if (user) {
      history.push('/')
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

  return (
    <div className={styles.loginSection}>
      <form onSubmit={handleSubmit} className={styles.formStyles}>
        <input type="email" value={email} onChange={emailHandler} />
        <input type="password" value={password} onChange={passwordHandler} />
        <button>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
export default LoginSection
