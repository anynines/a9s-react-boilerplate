import React from 'react'
import { FloatingActionButton } from '@anynines/a9s-design-system'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded'
import { ModeContext } from '../Theme'

const ToggleMode: React.FC = () => {
  const { dark, toggleDark } = React.useContext(ModeContext)

  return (
    <FloatingActionButton
      size="small"
      aria-label="dark-mode"
      onClick={toggleDark}
    >
      {dark ? (
        <Brightness2RoundedIcon fontSize="small" />
      ) : (
        <WbSunnyRoundedIcon fontSize="small" />
      )}
    </FloatingActionButton>
  )
}

export default ToggleMode
