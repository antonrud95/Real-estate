import React, { useState } from 'react'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import styles from './user-container.module.scss'

const UserBox = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  const data = useStaticQuery(graphql`
    query {
      userImage: file(relativePath: { eq: "images/user.png" }) {
        childImageSharp {
          fluid(maxWidth: 38) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.userWrapper} onClick={toggleShow}>
      <Img
        fluid={data.userImage.childImageSharp.fluid}
        className={styles.imageStyles}
      />
      <p className={styles.textStyles}>Shirley Williams</p>
      <FontAwesomeIcon
        icon={faChevronUp}
        className={!show ? styles.arrowDown : styles.arrowUp}
      />
      {show && (
        <ul className={styles.dropdownWrapper} onMouseLeave={toggleShow}>
          <li className={styles.listItem}>Ads</li>
          <li className={styles.listItem}>Messages</li>
          <li className={styles.listItem}>Settings</li>
          <li className={[styles.listItem, styles.listItemRed].join(' ')}>
            Log out
          </li>
        </ul>
      )}
    </div>
  )
}

export default UserBox
