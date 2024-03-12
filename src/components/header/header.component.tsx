import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import HeaderMenu from './header-menu.component'
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircleOutlined, ShoppingCartOutlined, MenuRounded } from '@mui/icons-material';
import { Box, Drawer, InputAdornment, Stack, Typography } from '@mui/material'
import LoginScreen from '@/features/sso/login/loginScreen.component'
import { useLoggedIn } from '@/customHooks/useLoggedIn'
import { useMobileCheck } from '@/customHooks/mobileCheck'
import MobileMenu from './msite-menu.component'
import MobileSearch from './msite-search.component'
import { ButtonStack, CustomSearch, HeaderStack, IconWrapper, MainBox, SearchIconWrapper, SpacerBox, StyledInputBase } from './header.styles'

export default function Header() {
  const isUserLogged = useLoggedIn()
  const isMobile = useMobileCheck()
  const router = useRouter()
  useEffect(() => {
    if (isUserLogged) {
      setShowLogin(false)
    }
  }, [isUserLogged])

  //** states
  const [showLogin, setShowLogin]: any = useState<boolean>(false)
  const [showMenu, setShowMenu]: any = useState<boolean>(false)
  const [showSearch, setShowSearch]: any = useState<boolean>(false)
  const [focused, setFocused]: any = useState<boolean>(false)
  const [value, setValue]: any = useState<string>("")

  const handleClose = () => {
    setShowLogin(false)
    setShowMenu(false)
    setShowSearch(false)
  }
  const handleOpen = () => {
    setShowLogin(true)
  }
  const openMenu = () => {
    setShowMenu(true)
  }
  const openSearch = () => {
    setShowSearch(true)
  }
  const handleLogout = () => {
    global?.window?.localStorage?.removeItem("accessToken")
  }
  const handleSearchValue = (e: any) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    if (router?.isReady) {
      handleClose()
    }
  }, [router?.query])

  return (
    <Box>
      <MainBox>
        <HeaderStack>
          <ButtonStack>
            {isMobile && <MenuRounded onClick={openMenu} fontSize="medium" />}
            <Link href={"/"}>
              <Dimage
                src={"/icons/home-icon.png"}
                alt={"home-icon"}
                width={'100%'}
                height={'100%'}
                styles={{ maxWidth: isMobile ? MobilePxToVw(160) : DesktopPxToVw(140) }}
              />
            </Link>
          </ButtonStack>
          {!isMobile &&
            <>
              <HeaderMenu />
              <CustomSearch>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  value={value}
                  onChange={handleSearchValue}
                  onClick={() => setFocused(true)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  sx={{
                    "& .MuiInputAdornment-positionStart": {
                      position: "absolute",
                      left: DesktopPxToVw(100),
                      zIndex: "1"
                    },
                    "& .Typewriter": {
                      display: "flex",
                      alignSelf: "end"
                    }
                  }}
                  startAdornment={
                    focused ? <></> :
                      <InputAdornment position="start">
                        <Stack flexDirection={"row"} columnGap={DesktopPxToVw(6)}>
                          <Typography>Search for</Typography>
                          <Typewriter
                            options={{
                              strings: ["shirts", "jeans", "hoodies", "trousers", "balaclava", "t-shirts", "jackets"],
                              autoStart: true,
                              loop: true,
                            }}
                          />
                        </Stack>
                      </InputAdornment>
                  }
                  inputProps={{ 'aria-label': 'search' }}
                />
              </CustomSearch>
            </>
          }
          <ButtonStack>
            {isMobile &&
              <IconWrapper onClick={openSearch}>
                <SearchIcon fontSize="medium" />
              </IconWrapper>
            }
            <IconWrapper>
              <Link href={"/cart"}>
                <ShoppingCartOutlined fontSize="medium" />
              </Link>
            </IconWrapper>
            <IconWrapper>
              {
                isUserLogged
                  ? <AccountCircleOutlined fontSize="medium" onClick={handleLogout} />
                  : <Typography fontWeight={600} onClick={handleOpen}>LOGIN</Typography>
              }
            </IconWrapper>
          </ButtonStack>
        </HeaderStack>
      </MainBox>
      <SpacerBox />
      <Drawer open={showMenu} onClose={handleClose} anchor="left">
        <MobileMenu handleClose={handleClose} />
      </Drawer>
      <Drawer open={showLogin} onClose={handleClose} anchor="right">
        <LoginScreen handleClose={handleClose} />
      </Drawer>
      <Drawer open={showSearch} onClose={handleClose} anchor="right">
        <MobileSearch handleClose={handleClose} />
      </Drawer>
    </Box>
  )
}
