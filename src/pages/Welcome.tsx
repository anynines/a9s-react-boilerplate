import React from 'react'
import { Container, Typography } from '@anynines/a9s-design-system'
import Base from '../layouts/Base'

const Welcome: React.FC = () => {
  return (
    <Base>
      <Container sx={{ mt: 8 }}>
        <Typography gutterBottom variant="h1">
          👋 Welcome dear Devs
        </Typography>
        <Typography variant="subtitle1">
          This is your playground to be productive from scratch.{' '}
        </Typography>
        <Typography variant="subtitle1">
          Add: Reference to Mui, to Design System, to Figma, to Workflow (How to
          reach out to the team?)
        </Typography>
        <Typography variant="subtitle1">FAQ? Theming</Typography>
        <Typography variant="subtitle1">
          Add some base structure (Authland, Adminland, Table)
        </Typography>
      </Container>
    </Base>
  )
}

export default Welcome
