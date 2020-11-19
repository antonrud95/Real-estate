import React, { useState, createContext } from 'react'

export const UserContext = createContext(undefined)

export default ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
