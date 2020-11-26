import React from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'

const IndexPage = () => (
  <Layout>
    <SEO title="Real estate" />
    <HeroSection />
  </Layout>
)
export default IndexPage
