import React from 'react'
import { Box, Grid } from '@anynines/a9s-design-system'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import MenuItem from './MenuItem'
import ToggleMode from './ToggleMode'
import Logo from '../assets/Logo'

const menu = [
  {
    link: '/',
    label: 'Back to Home',
    icon: <HomeRoundedIcon />,
  },
  {
    link: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardRoundedIcon />,
  },
  // Add more MenuItems here
]

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 5,
        width: '300px',
        boxShadow: 2,
        mr: 6,
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Logo />
        <ToggleMode />
      </Box>
      <Grid container spacing={4} direction="column" mt={6}>
        {menu.map((item) => (
          <Grid key={item.label} item>
            <MenuItem link={item.link} label={item.label} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Sidebar
