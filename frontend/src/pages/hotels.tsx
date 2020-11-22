import React, { useContext } from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'

import { UserContext } from '~/contexts/user-context.context'

const HotelsPage = () => {
  const { user } = useContext(UserContext)
  return (
    <Layout>
      <SEO title="Unikorns Starter Kit" />
      {user && (
        <div>You succesfuly redirected to hotels page. Congratulations!</div>
      )}
      {!user && (
        <div>You UNsuccesfuly redirected to hotels page. Congratulations!</div>
      )}
    </Layout>
  )
}
export default HotelsPage
