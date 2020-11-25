import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from './nav-dropdown.module.scss'

const DropdownNav = () => {
  const [toggle, setToggle] = useState(false)

  const openDropdown = () => {
    setToggle(!toggle)
  }
  const handleSelect = (e) => {
    setToggle(!toggle)
  }
  return (
    <div className={styles.dropWrapper}>
      <div className={styles.dropdownBody} onClick={openDropdown}>
        Developer offers
        <FontAwesomeIcon
          icon={faChevronDown}
          className={toggle ? styles.arrowDown : styles.arrowUp}
        />
      </div>
      {toggle && (
        <ul className={styles.dropList} onMouseLeave={openDropdown}>
          <li className={styles.dropItem} onClick={handleSelect}>
            New apartments
          </li>
          <li className={styles.dropItem} onClick={handleSelect}>
            New houses
          </li>
        </ul>
      )}
    </div>
  )
}

export default DropdownNav
