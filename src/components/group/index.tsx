import { useMobileCheck } from '@/hooks/mobileCheck'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { Box, Stack } from '@mui/material'
import React from 'react'
import Title from '../title/title.component'
import renderGroupVariant from './renderGroupVariant'
import useCustomTheme from '@/hooks/useTheme'
import { useTheme } from '@/context/themewrapper.context'

export default function Group(props: any) {
  const {
    title,
    variant,
    largeVariant,
    items,
  } = props
  const isMobile = useMobileCheck()
  const theme = useCustomTheme()
  const { isDarkMode } = useTheme()
  const groupVariant = isMobile ? variant : largeVariant
  const isBackground = groupVariant === "greyBackgroundGroup"
  return (
    <Box mt={isBackground ? isMobile ? MobilePxToVw(40) : DesktopPxToVw(80) : 0}
      mx={title ? isMobile ? MobilePxToVw(20) : DesktopPxToVw(100) : 0}
      bgcolor={isBackground ? isDarkMode ? "#181818" : "#f0f0f0" : "none"}
      borderRadius={isBackground ? isMobile ? MobilePxToVw(30) : DesktopPxToVw(30) : 0}
      p={isBackground ? isMobile
        ? `0 ${MobilePxToVw(30)} ${MobilePxToVw(30)} ${MobilePxToVw(30)}`
        : `0 ${DesktopPxToVw(60)} ${DesktopPxToVw(60)} ${DesktopPxToVw(60)}` : 0}
    >
      {title && <Title title={title} />}
      {groupVariant && renderGroupVariant(groupVariant, items)}
    </Box>
  )
}
