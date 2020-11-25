import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './carousel.module.scss'

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const data = useStaticQuery(graphql`
    query {
      sectionImage: file(relativePath: { eq: "images/login.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 735) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Slider {...settings}>
      <div className={styles.imagesContainer}>
        <Img fluid={data.sectionImage.childImageSharp.fluid} />
        <div className={styles.markerContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.marker} />
          <p className={styles.markerText}>Warsaw, Centrum</p>
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <Img fluid={data.sectionImage.childImageSharp.fluid} />
        <div className={styles.markerContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.marker} />
          <p className={styles.markerText}>Warsaw, Centrum</p>
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <Img fluid={data.sectionImage.childImageSharp.fluid} />
        <div className={styles.markerContainer}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.marker} />
          <p className={styles.markerText}>Warsaw, Centrum</p>
        </div>
      </div>
    </Slider>
  )
}

export default SimpleSlider
