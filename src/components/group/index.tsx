import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { Box, Stack } from '@mui/material'
import React from 'react'
import Title from '../title/title.component'
import renderGroupVariant from './renderGroupVariant'

export default function Group(props: any) {
  const {
    title,
    variant,
    largeVariant,
    items,
  } = props
  const isMobile = useMobileCheck()
  const groupVariant = isMobile ? variant : largeVariant
  return (
    <Box px={title ? isMobile ? MobilePxToVw(20) : DesktopPxToVw(60) : 0}>
      {title && <Title title={title} />}
      {groupVariant && renderGroupVariant(groupVariant, items)}
    </Box>
  )
}
