import { Box } from '@anynines/a9s-design-system'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Admin: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        p: 6,
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: 'calc(100% - 280px)',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Admin
