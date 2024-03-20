import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { Stack } from '@mui/material'
import React from 'react'
import Title from '../title/title.component'
import renderGroupVariant from './renderGroupVariant'

export default function Group(props: any) {
  const isMobile = useMobileCheck()
  const title = {
    mobile: ['NEW ARRIVALS'],
    desktop: ['NEW ARRIVALS'],
  }
  return (
    <Stack
      rowGap={isMobile ? MobilePxToVw(40) : DesktopPxToVw(60)}
      p={isMobile ? MobilePxToVw(40) : DesktopPxToVw(60)}
    >
      <Title title={title} />
      {renderGroupVariant('', {})}
    </Stack>
  )
}
