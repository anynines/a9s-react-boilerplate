import React from 'react'
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Typography,
} from '@anynines/a9s-design-system'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// eslint-disable-next-line max-len
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
// eslint-disable-next-line max-len
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded'
import AdminHeader from '../components/AdminHeader'
import Admin from '../layouts/Admin'

const kpis = [
  {
    label: 'Sales',
    value: '4.200.010',
    icon: <AccountBalanceWalletRoundedIcon />,
  },
  {
    label: 'Total Users',
    value: '2560',
    icon: <PersonRoundedIcon />,
  },
  {
    label: 'Unique user requests',
    value: '4205',
    icon: <DevicesRoundedIcon />,
  },
  {
    label: 'Temperature',
    value: '24° C',
    icon: <DeviceThermostatRoundedIcon />,
  },
]

const Dashboard: React.FC = () => {
  return (
    <Admin>
      <AdminHeader
        title="Dashboard"
        actions={[
          <Button size="large" sx={{ mr: 4 }}>
            Call to action
          </Button>,
          <IconButton sx={{ '& svg': { color: 'text.primary' } }} size="large">
            <MoreVertIcon fill="text.primary" />
          </IconButton>,
        ]}
      />
      <Grid container spacing={5}>
        {kpis.map((kpi) => (
          <Grid key={kpi.label} item flex={1}>
            <Card sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center' }}>
                {kpi.icon}
              </Box>
              <Box>
                <Typography color="textSecondary">{kpi.label}</Typography>
                <Typography variant="h5">{kpi.value}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Admin>
  )
}

export default Dashboard
