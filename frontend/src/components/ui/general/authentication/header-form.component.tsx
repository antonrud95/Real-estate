import React from 'react'
import styles from './header-form.module.scss'

const HeaderForm = ({ onclickLogin, onclickSignup }) => {
  return (
    <div className={styles.headerFormStyles}>
      <button onClick={onclickLogin}>Login</button>
      <button onClick={onclickSignup}>Signup</button>
    </div>
  )
}
export default HeaderForm
