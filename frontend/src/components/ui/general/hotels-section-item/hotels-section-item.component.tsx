import React from 'react'
import { Row, Col } from 'react-bootstrap'

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
        <h3 className={styles.title}>{title}</h3>
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
