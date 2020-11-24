import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import styles from './hotels.module.scss'
import HotelsItem from '~/components/ui/general/hotels-section-item/hotels-section-item.component'
import ResultsItem from '~/components/ui/general/results-form/results.component'

const HotelsSection = ({ hotels }) => {
  const [check, setCheck] = useState(false)

  const clickCheckbox = () => {
    setCheck(!check)
  }

  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "images/map.png" }) {
        childImageSharp {
          fluid(maxWidth: 720, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Row className={styles.mainRow}>
      <Col md={!check ? 6 : 8} className={styles.leftCol}>
        <ResultsItem click={clickCheckbox} />
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
        {!check && (
          <Img
            fluid={data.map.childImageSharp.fluid}
            className={styles.headerLeftImage}
          />
        )}
      </Col>
    </Row>
  )
}

export default HotelsSection
