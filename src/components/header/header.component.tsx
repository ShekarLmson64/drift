import React, { useState } from 'react'
import { ButtonStack, CustomSearch, HeaderStack, IconWrapper, MainBox, SearchIconWrapper, SpacerBox, StyledInputBase } from './header.styles'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw } from '@/utils/pxToVw'
import HeaderMenu from './header-menu.component'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
import { AccountCircleOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Drawer, Stack, Typography } from '@mui/material'
import LoginScreen from '@/features/sso/login/loginScreen.component'

export default function Header() {
  const isUser: Boolean = false
  const [showLogin, setShowLogin]: any = useState<Boolean>(false)
  const handleClose = () => {
    setShowLogin(false)
  }
  const handleOpen = () => {
    setShowLogin(true)
  }
  return (
    <Box>
      <MainBox>
        <HeaderStack>
          <Link href={"/"}>
            <Dimage
              src={"/icons/home-icon.png"}
              alt={"home-icon"}
              width={'100%'}
              height={'100%'}
              styles={{ maxWidth: DesktopPxToVw(120) }}
            />
          </Link>
          <HeaderMenu />
          <CustomSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </CustomSearch>
          <ButtonStack>
            <IconWrapper>
              <Link href={"/cart"}>
                <ShoppingCartOutlined fontSize="medium" />
              </Link>
            </IconWrapper>
            <IconWrapper>
              {
                isUser
                  ? <Stack flexDirection={"row"}>
                    <AccountCircleOutlined fontSize="medium" />
                    <Typography onClick={handleOpen}>MY ACCOUNT</Typography>
                  </Stack>
                  : <Typography fontWeight={600} onClick={handleOpen}>LOGIN</Typography>
              }
            </IconWrapper>
          </ButtonStack>
        </HeaderStack>
      </MainBox>
      <SpacerBox />
      <Drawer open={showLogin} onClose={handleClose} anchor="right">
        <LoginScreen handleClose={handleClose} />
      </Drawer>
    </Box>
  )
}
