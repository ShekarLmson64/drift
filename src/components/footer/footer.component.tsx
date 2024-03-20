import React from 'react'
import { ColumnStack, DynamicStack, FooterBox } from './footer.styles'
import FooterList from './footerList.component'
import footerData from './footerItems.json'
import { Box, Stack, Typography, alpha } from '@mui/material'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { useMobileCheck } from '@/hooks/mobileCheck'
import useCustomTheme from '@/hooks/useTheme'
import { useTheme } from '@/context/themewrapper.context'

export default function Footer() {
  const { description, items, rights } = footerData
  const isMobile = useMobileCheck()
  const { isDarkMode, toggleTheme: toggleSiteTheme } = useTheme()

  return (
    <FooterBox>
      <DynamicStack>
        <ColumnStack maxWidth={isMobile ? 'unset' : DesktopPxToVw(400)}>
          <Dimage
            src={'/icons/home-icon.png'}
            alt={'home-icon'}
            width={'100%'}
            height={'auto'}
            styles={{
              maxWidth: isMobile ? MobilePxToVw(160) : DesktopPxToVw(120),
              mixBlendMode: isDarkMode ? "screen" : "unset",
              filter: isDarkMode ? "invert(1)" : "invert(0)"
            }}
          />
          <Typography variant='body2'>{description}</Typography>
        </ColumnStack>
        <FooterList items={items} />
      </DynamicStack>
      <Box py={isMobile ? MobilePxToVw(30) : DesktopPxToVw(30)}>
        <hr />
      </Box>
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Typography variant='caption'>{rights}</Typography>
      </Stack>
    </FooterBox>
  )
}
