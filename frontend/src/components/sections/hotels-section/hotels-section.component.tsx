import React from 'react'

import styles from './hotels.module.scss'
import HotelsItem from '~/components/ui/general/hotels-section-item/hotels-section-item.component'

const HotelsSection = ({ hotels }) => {
  return (
    <div>
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
    </div>
  )
}

export default HotelsSection
