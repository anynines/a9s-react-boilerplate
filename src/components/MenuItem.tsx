import React from 'react'
import { MenuItem as MuiMenuItem } from '@mui/material'
import { ListItemIcon, ListItemText } from '@anynines/a9s-design-system'

import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  link: string
  icon: JSX.Element
  label: string
}

const MenuItem: React.FC<Props> = (props) => {
  const { link, icon, label } = props

  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname === link

  return (
    <MuiMenuItem
      onClick={() => navigate(link)}
      sx={{
        bgcolor: isActive ? 'primary.main' : 'background.light',
        color: isActive ? 'common.white' : 'text.primary',
        p: 3,
        pr: 5,
        borderRadius: '8px',
        '&:hover': {
          bgcolor: isActive ? 'primary.dark' : 'background.medium',
        },
        '& svg': {
          color: isActive ? 'common.white' : 'text.primary',
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </MuiMenuItem>
  )
}

export default MenuItem
