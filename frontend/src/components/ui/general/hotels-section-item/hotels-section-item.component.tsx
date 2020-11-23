import React from 'react'

import Slider from 'react-slick'
import Img from 'gatsby-image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './hotels-item.module.scss'

const HotelsItem = ({ title, text, link, price, image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <div className={styles.carouselWrapper}>
        <Slider {...settings}>
          <Img fluid={image} />
          <Img fluid={image} />
          <Img fluid={image} />
          <Img fluid={image} />
        </Slider>
      </div>
      <div className={styles.textWrapper}>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={styles.underInfo}>
          <p className={styles.underLink}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.marker} />
            {link}
          </p>
          <p className={styles.price}>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default HotelsItem
