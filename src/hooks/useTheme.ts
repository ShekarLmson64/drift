import darkTheme from '@/theme/dark.theme'
import lightTheme from '@/theme/light.theme'
import { useTheme } from '@/context/themewrapper.context'

const useCustomTheme = () => {
  const { isDarkMode } = useTheme()

  const theme = isDarkMode ? darkTheme : lightTheme

  return theme
}

export default useCustomTheme
