import React from 'react'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'

import UserContextProvider from '~/contexts/user-context.context'

export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)
