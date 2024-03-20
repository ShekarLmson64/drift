import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import useCustomTheme from '@/hooks/useTheme'
import { ThemeProviderWrapper } from '@/context/themewrapper.context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderWrapper>
      <Component {...pageProps} />
    </ThemeProviderWrapper>
  )
}
