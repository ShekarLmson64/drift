import Footer from '@/components/footer/footer.component'
import Header from '@/components/header/header.component'
import { Box } from '@mui/material'
import React from 'react'
import PageBody from './pageBody'

export default function PageLayout() {
  return (
    <Box>
      <Header />
      <PageBody />
      <Footer />
    </Box>
  )
}
