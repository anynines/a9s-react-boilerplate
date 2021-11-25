import React from 'react'
import { Button, Typography } from '@anynines/a9s-design-system'
import { useNavigate } from 'react-router'
import Auth from '../layouts/Auth'

const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Auth>
      <Typography gutterBottom variant="h2">
        Login
      </Typography>
      <Typography color="textSecondary" gutterBottom variant="subtitle1">
        This is your template for Auth pages or other things you do not want
        layout components like the header to appear
      </Typography>
      <Button size="large" onClick={() => navigate('/')} sx={{ mt: 6 }}>
        Login
      </Button>
    </Auth>
  )
}

export default Login
