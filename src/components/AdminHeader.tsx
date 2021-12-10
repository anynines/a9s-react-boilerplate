import React from 'react'

import { Box, Typography } from '@anynines/a9s-design-system'

interface Props {
  title: string
  actions: JSX.Element[]
}

const AdminHeader: React.FC<Props> = (props) => {
  const { title, actions } = props

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 2,
        p: 5,
        mb: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {actions}
      </Box>
    </Box>
  )
}

export default AdminHeader
