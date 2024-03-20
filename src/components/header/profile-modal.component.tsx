import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { MobileMenuStack, PositionBox, RowStack } from './header.styles'
import Link from 'next/link'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { Button, Stack, Typography } from '@mui/material'
import { getItem } from '@/utils/manageLocalStorage'
import {
  Edit as EditIcon,
  AccountCircleTwoTone as AccountCircleIcon,
} from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useMobileCheck } from '@/hooks/mobileCheck'

export default function ProfileModal({ handleClose }: any) {
  const router = useRouter()
  const isMobile = useMobileCheck()
  const handleLogout = () => {
    global?.window?.localStorage?.removeItem('accessToken')
    router?.reload()
  }
  return (
    <MobileMenuStack>
      <PositionBox onClick={handleClose}>
        <CloseRoundedIcon />
      </PositionBox>
      <Link href={'/'} onClick={handleClose}>
        <Dimage
          src={'/icons/home-icon.png'}
          alt={'home-icon'}
          width={'100%'}
          height={'100%'}
          styles={{ maxWidth: MobilePxToVw(160) }}
        />
      </Link>
      <Stack alignItems={'center'} width='100%' rowGap={DesktopPxToVw(100)}>
        <Stack alignItems={'center'}>
          <AccountCircleIcon
            sx={{ fontSize: isMobile ? MobilePxToVw(200) : DesktopPxToVw(100) }}
          />
          <RowStack>
            <Typography>
              {`${getItem('firstName')} ${getItem('lastName')}` || 'User'}
            </Typography>
            <EditIcon fontSize='small' />
          </RowStack>
        </Stack>
        <Button
          fullWidth
          variant='contained'
          onClick={handleLogout}
          sx={{ backgroundColor: '#000' }}
        >
          Log out
        </Button>
      </Stack>
    </MobileMenuStack>
  )
}
