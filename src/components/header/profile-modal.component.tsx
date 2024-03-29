import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { ModalStack, PositionBox, RowStack } from './header.styles'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { Button, Stack, Typography } from '@mui/material'
import { getItem } from '@/utils/manageLocalStorage'
import {
  Edit as EditIcon,
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
    <ModalStack>
      <PositionBox onClick={handleClose}>
        <CloseRoundedIcon />
      </PositionBox>
      <Stack alignItems={'center'} width='100%' rowGap={DesktopPxToVw(100)}>
        <Stack alignItems={"center"} rowGap={2}>
          <Dimage
            src={"/sample/default-profile.svg"}
            alt={"profile-icon"}
            width={'100%'}
            height={'100%'}
            styles={{ maxWidth: isMobile ? MobilePxToVw(160) : DesktopPxToVw(140) }}
          />
          <RowStack>
            <Typography>{`${getItem("firstName")} ${getItem("lastName")}` || "User"}</Typography>
            <EditIcon fontSize="small" />
          </RowStack>
        </Stack>
        <Button
          variant='contained'
          onClick={handleLogout}
          sx={{ backgroundColor: '#000' }}
        >
          <Typography px={3}>
            Log out
          </Typography>
        </Button>
      </Stack>
    </ModalStack>
  )
}
