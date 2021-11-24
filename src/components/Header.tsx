import React from 'react'
import { Box } from '@anynines/a9s-design-system'
import ToggleMode from './ToggleMode'
import Logo from '../assets/Logo'

const Header: React.FC = () => {
  return (
    <Box
      p={4}
      bgcolor="background.paper"
      boxShadow={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <ToggleMode />
    </Box>
  )
}

export default Header
