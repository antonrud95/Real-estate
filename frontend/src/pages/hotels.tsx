import React, { useContext } from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HotelsSection from '~/components/sections/hotels-section/hotels-section.component'

import { UserContext } from '~/contexts/user-context.context'

const HotelsPage = ({ data }) => {
  const { user } = useContext(UserContext)
  return (
    <Layout>
      <SEO title="Unikorns Starter Kit" />
      {user && <HotelsSection hotels={data.allStrapiHotels.nodes} />}
      {!user && (
        <div>You UNsuccesfuly redirected to hotels page. Congratulations!</div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiHotels {
      nodes {
        id
        title
        price
        location
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default HotelsPage
