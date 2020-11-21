import React from 'react'
import styles from './login-section.module.scss'

const LoginSection = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  email,
  password,
  error,
}) => {
  return (
    <div className={styles.loginSection}>
      <form onSubmit={onSubmit} className={styles.formStyles}>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
        <button>Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
export default LoginSection
