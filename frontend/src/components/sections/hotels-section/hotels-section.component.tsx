import React from 'react'
import { Row, Col } from 'react-bootstrap'

import styles from './hotels.module.scss'
import HotelsItem from '~/components/ui/general/hotels-section-item/hotels-section-item.component'

const HotelsSection = ({ hotels }) => {
  return (
    <Row>
      <Col md={6} className={styles.leftCol}>
        {hotels.map((hotel) => {
          return (
            <HotelsItem
              key={hotel.id}
              title={hotel.title}
              text={hotel.description}
              link={hotel.location}
              price={hotel.price}
              image={hotel.image.childImageSharp.fluid}
            />
          )
        })}
      </Col>
      <Col md={6}>
        <div>Space for map</div>
      </Col>
    </Row>
  )
}

export default HotelsSection
