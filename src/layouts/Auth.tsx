import { Box, Container } from '@anynines/a9s-design-system'
import React from 'react'
import Logo from '../assets/Logo'
import ToggleMode from '../components/ToggleMode'

const Auth: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: '8px',
            px: 6,
            py: 6,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 6,
            }}
          >
            <Logo />
            <ToggleMode />
          </Box>
          {children}
        </Box>
      </Container>
    </Box>
  )
}

export default Auth
