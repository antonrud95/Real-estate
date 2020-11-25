import React from 'react'
import { Link } from 'gatsby'

import ColorLogotype from '~/assets/icons/logo.svg'

import styles from './logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.root}>
      <Link to="/">
        <ColorLogotype className={styles.mainLogo} />
      </Link>
    </div>
  )
}

export default Logo
