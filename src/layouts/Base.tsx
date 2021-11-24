import React from 'react'
import Header from '../components/Header'

const Base: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Base
