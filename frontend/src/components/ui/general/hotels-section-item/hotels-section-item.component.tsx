import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import Slider from 'react-slick'
import Img from 'gatsby-image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from './hotels-item.module.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
library.add(farFaHeart)

const HotelsItem = ({ title, text, link, price, image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [heart, setHeart] = useState(false)

  const clickerHeart = () => {
    setHeart(!heart)
  }

  return (
    <Row className={styles.hotelsItemWrapper}>
      <Col md={5} className={styles.carouselWrapper}>
        <Slider {...settings}>
          <div className={styles.imageWrapper}>
            <Img fluid={image} className={styles.carouselImage} />
          </div>
          <div className={styles.imageWrapper}>
            <Img fluid={image} className={styles.carouselImage} />
          </div>
          <div className={styles.imageWrapper}>
            <Img fluid={image} className={styles.carouselImage} />
          </div>
          <div className={styles.imageWrapper}>
            <Img fluid={image} className={styles.carouselImage} />
          </div>
        </Slider>
      </Col>
      <Col md={7} className={styles.textWrapper}>
        <div className={styles.titleIcon}>
          <h3 className={styles.title}>{title}</h3>
          {!heart ? (
            <FontAwesomeIcon icon={farFaHeart} onClick={clickerHeart} />
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.heartRed}
              onClick={clickerHeart}
            />
          )}
        </div>
        <p className={styles.text}>{text}</p>
        <div className={styles.underInfo}>
          <p className={styles.underLink}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.marker} />
            {link}
          </p>
          <p className={styles.price}>{price}</p>
        </div>
      </Col>
    </Row>
  )
}

export default HotelsItem
