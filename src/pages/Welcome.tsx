import React from 'react'
import { Button, Container, Typography } from '@anynines/a9s-design-system'
import Base from '../layouts/Base'

const Welcome: React.FC = () => {
  return (
    <Base>
      <Container sx={{ mt: 8 }}>
        <Typography gutterBottom variant="h1">
          👋 a9s React Boilerplate
        </Typography>
        <Typography variant="subtitle1">
          Welcome to the anynines React Boilerplate, developed to give you a
          well prepare playground for any React frontend you might need. It
          comes with these things prepared:
        </Typography>
        <ul>
          <li>
            <Typography variant="subtitle1">
              Build upon Create React App (CRA)
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1">
              Fully typed with TypeScript
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1">
              Formatting rules applied by ESLint and Prettier on save
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1">
              Comprehensive UI Components from a9s Design System
            </Typography>
          </li>
          <li>
            <Typography variant="subtitle1">
              Design System is based on Material UI and designed in Figma
            </Typography>
          </li>
        </ul>
        <Button>Click me</Button>
      </Container>
    </Base>
  )
}

export default Welcome
