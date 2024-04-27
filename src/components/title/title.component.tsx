import { useMobileCheck } from '@/hooks/mobileCheck'
import { Typography } from '@mui/material'
import React from 'react'
import { TitleStack } from './title.styles'

export default function Title({ title, titleVariant }: any) {
  const isMobile = useMobileCheck()
  const titles = typeof title === typeof "" ? [title] : (isMobile ? title?.mobile || title?.desktop : title?.desktop)
  return (
    <TitleStack width={'100'}>
      {titles?.map((singleTitle: any) => (
        <Typography
          key={singleTitle}
          fontWeight={800}
          variant={isMobile ? 'h4' : 'h3'}
        >
          {singleTitle}
        </Typography>
      ))}
    </TitleStack>
  )
}
