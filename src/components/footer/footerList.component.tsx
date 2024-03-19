import React from 'react'
import { ColumnStack, FooterStack, StyledText } from './footer.styles'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { DesktopPxToVw } from '@/utils/pxToVw'

export default function FooterList({ items }: any) {
  return (
    <FooterStack>
      {
        items?.map((footerItem: any, index: number) =>
          <ColumnStack key={`${footerItem?.title}-${index}`}>
            <Typography mb={DesktopPxToVw(10)} fontWeight={600}>{footerItem?.title}</Typography>
            {
              footerItem?.options?.map((option: any) =>
                <Link href={option?.url} key={option?.title}>
                  <StyledText>
                    {option?.title}
                  </StyledText>
                </Link>
              )
            }
          </ColumnStack>
        )
      }
    </FooterStack>
  )
}
