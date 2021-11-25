import React from 'react'
import {
  Box,
  Button,
  IconButton,
  Typography,
} from '@anynines/a9s-design-system'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Admin from '../layouts/Admin'

const Dashboard: React.FC = () => {
  return (
    <Admin>
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 2,
          p: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Dashboard</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button size="large" sx={{ mr: 4 }}>
            Call to action
          </Button>
          <IconButton sx={{ '& svg': { color: 'text.primary' } }} size="large">
            <MoreVertIcon fill="text.primary" />
          </IconButton>
        </Box>
      </Box>
    </Admin>
  )
}

export default Dashboard
