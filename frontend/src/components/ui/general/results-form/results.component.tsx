import React from 'react'

import styles from './results.module.scss'

const ResultsItem = ({ click }) => {
  return (
    <div className={styles.checkboxWrapper}>
      <p className={styles.checkboxTitle}>
        283 results <span>in Warsaw, Poland</span>
      </p>
      <div className={styles.checkboxContainer}>
        <p className={styles.mapText}>View map</p>
        <input type="checkbox" className={styles.checkbox} onClick={click} />
      </div>
    </div>
  )
}

export default ResultsItem
