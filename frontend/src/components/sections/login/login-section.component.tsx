import React, { useState } from 'react'
import styles from './login-section.module.scss'

const LoginSection = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

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
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className={styles.loginSection}>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={emailHandler} />
        <input type="password" value={password} onChange={passwordHandler} />
        <button>Login</button>
      </form>
    </div>
  )
}
export default LoginSection
