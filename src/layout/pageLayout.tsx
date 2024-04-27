import Footer from '@/components/footer/footer.component'
import Header from '@/components/header/header.component'
import { Box, useMediaQuery } from '@mui/material'
import React, { useMemo } from 'react'
import PageBody from './pageBody'
import { PageContext } from '@/lib/prepare-page-context'

export default function PageLayout({
  isMobileInitial,
  data,
  ...props
}: any) {
  const isMobile = isMobileInitial || useMediaQuery("(max-width:641px)", { noSsr: true })
  const pageContext = useMemo(
    () => ({
      isMobile
    }),
    [],
  )
  return (
    <Box>
      <PageContext.Provider value={pageContext}>
        <Header />
        <PageBody {...data} />
        <Footer />
      </PageContext.Provider>
    </Box>
  )
}
