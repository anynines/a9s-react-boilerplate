import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@anynines/a9s-design-system'
import { CssBaseline } from '@mui/material'
import { anyninesDark, anyninesLight } from '@avarteqgmbh/happy-token-system'

export interface ModeContextProps {
  dark: boolean
  toggleDark?: () => void
}

export const ModeContext = React.createContext<ModeContextProps>({
  dark: true,
})

const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = React.useState(false)
  const toggleDark = (): void => {
    setDark(!dark)
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValue = {
    dark: false,
    toggleDark,
  }

  return (
    <ModeContext.Provider value={providerValue}>
      <MuiThemeProvider theme={dark ? anyninesDark : anyninesLight}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ModeContext.Provider>
  )
}

export default ThemeProvider
