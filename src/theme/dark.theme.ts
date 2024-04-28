import { createTheme } from '@mui/material/styles'
import themeOverrides from './common.overrides'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#000',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
    secondary: {
      light: '#fff',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    background: {
      paper: '#282828',
      default: '#212121',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.54)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
  },
  ...themeOverrides,
})

export default darkTheme
