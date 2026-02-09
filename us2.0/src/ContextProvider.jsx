import React, { createContext, useContext, useState } from 'react'

const GHStContext = createContext()

export const GHStProvider = ({ children }) => {
  const [state, setState] = useState(null)

  return (
    <GHStContext.Provider value={{ state, setState }}>
      {children}
    </GHStContext.Provider>
  )
}

export const useGHStContext = () => {
  const context = useContext(GHStContext)
  if (!context) {
    throw new Error('useGHStContext must be used within a GHStProvider')
  }
  return context
}
