import React, { useEffect, useState } from 'react'

import SButton from '~/components/ui/general/button/button.component'

import styles from './signup-section.module.scss'

const SignupSection = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  email,
  password,
  confirmPassword,
  error,
  onclick,
}) => {
  const [disabledBtn, setDisabledBtn] = useState(true)
  const toggleHandler = () => {
    setDisabledBtn(!disabledBtn)
  }

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
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          className={styles.inputStyles}
        />
        {password !== confirmPassword && <p>The passwords doesn`t match</p>}
        <label className={styles.checkboxContainer}>
          <input
            type="checkbox"
            className={styles.parentCheckbox}
            onClick={toggleHandler}
          />
          <span className={styles.customCheck} />
          <p className={styles.checkboxText}>
            I agree with <span>Terms and Conditions</span>
          </p>
        </label>
        <SButton
          variant="primary"
          disabled={disabledBtn}
          className={styles.signupBtn}
          onClick={onclick}
        >
          Sign up
        </SButton>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
export default SignupSection
