import React from 'react'
import { ButtonStack, CustomSearch, HeaderStack, MainBox, SearchIconWrapper, SpacerBox, StyledInputBase } from './header.styles'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw } from '@/utils/pxToVw'
import HeaderMenu from './header-menu.component'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'
import { AccountCircleOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material'

export default function Header() {
  const isUser = true
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
            <ShoppingCartOutlined fontSize="medium" />
            {
              isUser ? <AccountCircleOutlined fontSize="medium" /> : <Typography>Login</Typography>
            }
          </ButtonStack>
        </HeaderStack>
      </MainBox>
      <SpacerBox />
    </Box>
  )
}
