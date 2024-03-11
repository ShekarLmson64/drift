import React from 'react'
import { ColumnStack, FooterStack } from './footer.styles'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { DesktopPxToVw } from '@/utils/pxToVw'

export default function FooterList({ items }: any) {
  return (
    <FooterStack>
      {
        items?.map((footerItem: any) =>
          <ColumnStack>
            <Typography mb={DesktopPxToVw(10)} fontWeight={600}>{footerItem?.title}</Typography>
            {
              footerItem?.options?.map((option: any) =>
                <Link href={option?.url} key={option?.title}>
                  <Typography>
                    {option?.title}
                  </Typography>
                </Link>
              )
            }
          </ColumnStack>
        )
      }
    </FooterStack>
  )
}
