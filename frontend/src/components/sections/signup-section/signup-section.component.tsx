import React from 'react'
import styles from './signup-section.module.scss'

const SignupSection = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  email,
  password,
  error,
}) => {
  return (
    <div className={styles.signupSection}>
      <form onSubmit={onSubmit} className={styles.formStyles}>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
        <button>Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
export default SignupSection
