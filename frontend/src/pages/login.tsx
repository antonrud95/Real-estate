import React, { useState } from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import LoginSection from '~/components/sections/login/login-section.component'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Layout>
      <SEO title="Unikorns Starter Kit" />
      <LoginSection />
    </Layout>
  )
}
export default LoginPage
