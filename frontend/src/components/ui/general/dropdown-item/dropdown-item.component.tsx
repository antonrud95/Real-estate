import React, { useState } from 'react'

import styles from './dropdown.module.scss'

const DropdownItem = () => {
  const [value, setValue] = useState('Apartments')
  const [valueSecond, setValueSecond] = useState('Price')
  const [valueThird, setValueThird] = useState('Footage')
  const [toggle, setToggle] = useState(false)
  const [toggleSecond, setToggleSecond] = useState(false)
  const [toggleThird, setToggleThird] = useState(false)

  const openDropdown = () => {
    setToggle(!toggle)
  }
  const openDropdownSecond = () => {
    setToggleSecond(!toggleSecond)
  }
  const openDropdownThird = () => {
    setToggleThird(!toggleThird)
  }

  const handleSelect = (e) => {
    setValue(e.target.textContent)
    setToggle(!toggle)
  }
  const handleSelectSecond = (e) => {
    setValueSecond(e.target.textContent)
    setToggleSecond(!toggleSecond)
  }
  const handleSelectThird = (e) => {
    setValueThird(e.target.textContent)
    setToggleThird(!toggleThird)
  }
  return (
    <div className={styles.dropsContainer}>
      <div className={styles.dropWrapper}>
        <div className={styles.dropdownBody} onClick={openDropdown}>
          {value}
          <span className={toggle ? styles.arrowDown : styles.arrowUp}>
            &#9660;
          </span>
        </div>
        {toggle && (
          <ul className={styles.dropList} onMouseLeave={openDropdown}>
            <li className={styles.dropItem} onClick={handleSelect}>
              Apartment
            </li>
            <li className={styles.dropItem} onClick={handleSelect}>
              Houses
            </li>
            <li className={styles.dropItem} onClick={handleSelect}>
              Garden plots
            </li>
          </ul>
        )}
      </div>
      <div className={styles.secondDropWrapper}>
        <div className={styles.dropdownBody} onClick={openDropdownSecond}>
          {valueSecond}
          <span className={toggleSecond ? styles.arrowDown : styles.arrowUp}>
            &#9660;
          </span>
        </div>
        {toggleSecond && (
          <ul className={styles.dropList} onMouseLeave={openDropdownSecond}>
            <li className={styles.dropItem} onClick={handleSelectSecond}>
              500$-1000$
            </li>
            <li className={styles.dropItem} onClick={handleSelectSecond}>
              1000$-1500$
            </li>
            <li className={styles.dropItem} onClick={handleSelectSecond}>
              1500$-2000$
            </li>
            <li className={styles.dropItem} onClick={handleSelectSecond}>
              2500$-3000$
            </li>
          </ul>
        )}
      </div>
      <div className={styles.thirdDropWrapper}>
        <div className={styles.dropdownBody} onClick={openDropdownThird}>
          {valueThird}
          <span className={toggleThird ? styles.arrowDown : styles.arrowUp}>
            &#9660;
          </span>
        </div>
        {toggleThird && (
          <ul className={styles.dropList} onMouseLeave={openDropdownThird}>
            <li className={styles.dropItem} onClick={handleSelectThird}>
              20m - 35m
            </li>
            <li className={styles.dropItem} onClick={handleSelectThird}>
              35m - 50m
            </li>
            <li className={styles.dropItem} onClick={handleSelectThird}>
              50m - 65m
            </li>
            <li className={styles.dropItem} onClick={handleSelectThird}>
              65m - 75m
            </li>
            <li className={styles.dropItem} onClick={handleSelectThird}>
              75m - 90m
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default DropdownItem
