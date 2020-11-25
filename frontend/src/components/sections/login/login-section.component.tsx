import React, { useState } from 'react'

import SButton from '~/components/ui/general/button/button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import styles from './login-section.module.scss'

const LoginSection = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  email,
  password,
  error,
  onclick,
}) => {
  const [passwordHandler, setPasswordHandler] = useState('password')

  const showPassword = () => {
    setPasswordHandler('text')
    if (passwordHandler === 'text') {
      setPasswordHandler('password')
    }
  }
  return (
    <div className={styles.loginSection}>
      <form onSubmit={onSubmit} className={styles.formStyles}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
          className={styles.inputStyles}
        />
        <div className={styles.inputStylesRelative}>
          <input
            type={passwordHandler}
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
            className={styles.inputStyles}
          />
          <FontAwesomeIcon
            icon={faEye}
            className={styles.eye}
            onClick={showPassword}
          />
        </div>
        <SButton
          variant="primary"
          onClick={onclick}
          className={styles.loginBtn}
        >
          Log in
        </SButton>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
export default LoginSection
