import React from 'react'
import Welcome from './pages/Welcome'
import ThemeProvider from './Theme'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Welcome />
    </ThemeProvider>
  )
}

export default App
