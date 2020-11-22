import React from 'react'
import styles from './header-form.module.scss'
import SButton from '~/components/ui/general/button/button.component'

const HeaderForm = ({ onclickLogin, onclickSignup }) => {
  return (
    <div className={styles.headerFormStyles}>
      <SButton
        variant="secondary"
        onClick={onclickLogin}
        className={styles.btn}
      >
        Login
      </SButton>
      <SButton
        variant="secondary"
        onClick={onclickSignup}
        className={styles.btn}
      >
        Signup
      </SButton>
    </div>
  )
}
export default HeaderForm
