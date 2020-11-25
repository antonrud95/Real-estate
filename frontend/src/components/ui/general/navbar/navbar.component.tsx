import React, { useState, useContext } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileMenu from '~/components/ui/general/mobile-menu/mobile-menu.component'
import Button from '~/components/ui/general/button/button.component'
import DropdownNav from '~/components/ui/general/nav-dropdown/nav-dropdown.component'

import MyAccount from '~/assets/icons/icon.svg'

import DarkMenuOpenIcon from '~/assets/icons/menu-open-icon-dark.svg'

import styles from './navbar.module.scss'

const SNavbar = () => {
  const [isMenuShown, toggleMenu] = useState(false)

  const openClickHandler = () => {
    toggleMenu(true)
  }

  return (
    <Navbar
      fixed="top"
      className={classnames(styles.navbar, styles.navbar__onLight)}
    >
      <div className={styles.navContainer}>
        <Logo />
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />

        <Nav className={classnames(styles.nav, 'mr-4')}>
          <Link to="/" className={styles.navLink}>
            For sale
          </Link>
          <Link to="/" className={styles.navLink}>
            To rent
          </Link>
          <DropdownNav />
          <Link to="/" className={styles.navLink}>
            Blog
          </Link>
        </Nav>
        <Nav className={classnames(styles.nav, 'ml-auto')}>
          <Link to="/login" className={styles.navLink}>
            <div className={styles.accContainer}>
              <MyAccount className={styles.accIcon} />
              <p className={styles.accText}>My account</p>
            </div>
          </Link>
          <Button variant={'primary'} className={styles.navBtn}>
            Post your ad
          </Button>
        </Nav>
      </div>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar
