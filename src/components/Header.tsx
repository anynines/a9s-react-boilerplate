import React from 'react'
import { Box, Grid } from '@anynines/a9s-design-system'
import { AppBar } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import ToggleMode from './ToggleMode'
import Logo from '../assets/Logo'
import MenuItem from './MenuItem'

const mainMenu = [
  {
    link: '/',
    label: 'Home',
    icon: <HomeRoundedIcon />,
  },
  {
    link: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardRoundedIcon />,
  },
  // Add more MenuItems here
]

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        p: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Logo />
        <Grid sx={{ ml: 4 }} container wrap="nowrap" spacing={4}>
          {mainMenu.map((item) => (
            <Grid item key={item.label}>
              <MenuItem icon={item.icon} label={item.label} link={item.link} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid
        sx={{ ml: 4 }}
        container
        direction="row"
        spacing={4}
        justifyContent="flex-end"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item>
          <MenuItem
            icon={<ExitToAppRoundedIcon />}
            label="Logout"
            link="/login"
          />
        </Grid>
        <Grid item>
          <ToggleMode />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
