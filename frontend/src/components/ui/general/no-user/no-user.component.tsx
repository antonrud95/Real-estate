import React from 'react'

import { Link } from 'gatsby'
import SButton from '~/components/ui/general/button/button.component'
import styles from './no-user.module.scss'

const NoUser = () => {
  return (
    <div className={styles.nouserContainer}>
      <p className={styles.nouserText}>Please, login to watch hotels page!</p>
      <Link to="/login">
        <SButton variant="primary" className={styles.nouserBtn}>
          Login or sign up
        </SButton>
      </Link>
    </div>
  )
}

export default NoUser
