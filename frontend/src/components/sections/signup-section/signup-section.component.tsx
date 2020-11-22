import React from 'react'

import SButton from '~/components/ui/general/button/button.component'

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
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
          className={styles.inputStyles}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          className={styles.inputStyles}
        />
        <SButton variant="primary" className={styles.signupBtn}>
          Sign up
        </SButton>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
export default SignupSection
