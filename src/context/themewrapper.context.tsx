import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import darkTheme from '@/theme/dark.theme'
import lightTheme from '@/theme/light.theme'

interface ThemeContextType {
  isDarkMode: boolean | null
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderWrapperProps {
  children: React.ReactNode
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    const getAppliedTheme: string | null =
      global?.window?.localStorage?.getItem('systemTheme')
    setIsDarkMode(getAppliedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newMode = !isDarkMode
    global?.window?.localStorage?.setItem(
      'systemTheme',
      newMode ? 'dark' : 'light',
    )
    setIsDarkMode(newMode)
  }

  const theme =
    isDarkMode === null ? lightTheme : isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderWrapper')
  }
  return context
}
