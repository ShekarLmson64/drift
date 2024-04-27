import { Box } from '@mui/material'
import React from 'react'
import renderCardVariant from './renderCardVariant'
import { useMobileCheck } from '@/hooks/mobileCheck'

export default function Card(props: any) {
  const {
    variant,
    largeVariant,
    ...data
  } = props
  const isMobile = useMobileCheck()
  const cardVariant = isMobile ? variant : largeVariant

  return (
    <>
      {cardVariant && renderCardVariant(cardVariant, data)}
    </>
  )
}
