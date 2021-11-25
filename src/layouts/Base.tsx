import { Box } from '@anynines/a9s-design-system'
import React from 'react'
import Header from '../components/Header'

const Base: React.FC = ({ children }) => {
  return (
    <Box pt={9}>
      <Header />
      {children}
    </Box>
  )
}

export default Base
