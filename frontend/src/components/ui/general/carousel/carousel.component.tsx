import React from 'react'
import Slider from 'react-slick'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
      <div>
        <Img fluid={data.sectionImage.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.sectionImage.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.sectionImage.childImageSharp.fluid} />
      </div>
    </Slider>
  )
}

export default SimpleSlider
