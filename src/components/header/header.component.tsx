import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Dimage from '../custom/customImage/customImage'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import HeaderMenu from './header-menu.component'
import SearchIcon from '@mui/icons-material/Search'
import {
  AccountCircleOutlined,
  ShoppingCartOutlined,
  MenuRounded,
} from '@mui/icons-material'
import {
  Box,
  Drawer,
  InputAdornment,
  Stack,
  Switch,
  Typography,
} from '@mui/material'
import LoginScreen from '@/features/sso/login/loginScreen.component'
import { useLoggedIn } from '@/hooks/useLoggedIn'
import { useMobileCheck } from '@/hooks/mobileCheck'
import MobileMenu from './msite-menu.component'
import MobileSearch from './msite-search.component'
import {
  ButtonStack,
  CustomSearch,
  HeaderStack,
  IconWrapper,
  MainBox,
  MaterialUISwitch,
  SearchIconWrapper,
  SpacerBox,
  StyledInputBase,
} from './header.styles'
import ProfileModal from './profile-modal.component'
import useCustomTheme from '@/hooks/useTheme'
import { useTheme } from '@/context/themewrapper.context'

export default function Header() {
  const isUserLogged = useLoggedIn()
  const isMobile = useMobileCheck()
  const router = useRouter()
  const theme = useCustomTheme()
  const { isDarkMode, toggleTheme: toggleSiteTheme } = useTheme()

  useEffect(() => {
    if (isUserLogged) {
      setShowLogin(false)
    }
  }, [isUserLogged])

  //** states
  const [showLogin, setShowLogin]: any = useState<boolean>(false)
  const [showMenu, setShowMenu]: any = useState<boolean>(false)
  const [showSearch, setShowSearch]: any = useState<boolean>(false)
  const [showProfile, setShowProfile]: any = useState<boolean>(false)
  const [focused, setFocused]: any = useState<boolean>(false)

  const [value, setValue]: any = useState<string>('')

  const handleClose = () => {
    setShowLogin(false)
    setShowMenu(false)
    setShowSearch(false)
    setShowProfile(false)
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
  const openProfile = () => {
    setShowProfile(true)
  }
  const handleSearchValue = (e: any) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    if (router?.isReady) {
      handleClose()
    }
  }, [router?.query])

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleSiteTheme()
  }

  return (
    <Box>
      <MainBox sx={{ background: theme.palette.background.paper }}>
        <HeaderStack>
          <ButtonStack>
            {isMobile && <MenuRounded onClick={openMenu} fontSize='medium' />}
            <Link href={'/'}>
              <Dimage
                src={'/icons/home-icon.png'}
                alt={'home-icon'}
                width={'100%'}
                height={'100%'}
                styles={{
                  maxWidth: isMobile ? MobilePxToVw(160) : DesktopPxToVw(140),
                }}
              />
            </Link>
          </ButtonStack>
          {!isMobile && (
            <>
              <HeaderMenu />
              <CustomSearch onClick={() => setFocused(true)}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                {focused ? (
                  <StyledInputBase
                    value={value}
                    onChange={handleSearchValue}
                    onBlur={() => setFocused(false)}
                    inputRef={input => input && input?.focus()}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                ) : (
                  <Stack
                    className='typewriter-stack'
                    flexDirection={'row'}
                    columnGap={isMobile ? MobilePxToVw(6) : DesktopPxToVw(6)}
                  >
                    <Typography>Search for</Typography>
                    <Typewriter
                      options={{
                        strings: [
                          'shirts',
                          'jeans',
                          'hoodies',
                          'trousers',
                          'balaclava',
                          't-shirts',
                          'jackets',
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Stack>
                )}
              </CustomSearch>
            </>
          )}
          <ButtonStack>
            {isMobile && (
              <IconWrapper onClick={openSearch}>
                <SearchIcon fontSize='medium' />
              </IconWrapper>
            )}
            <IconWrapper>
              <Link href={'/cart'}>
                <ShoppingCartOutlined fontSize='medium' />
              </Link>
            </IconWrapper>
            <IconWrapper>
              {isUserLogged ? (
                <AccountCircleOutlined
                  fontSize='medium'
                  onClick={openProfile}
                />
              ) : (
                <Typography fontWeight={600} onClick={handleOpen}>
                  LOGIN
                </Typography>
              )}
            </IconWrapper>

            <MaterialUISwitch
              checked={isDarkMode as boolean}
              onChange={handleChangeTheme}
            />
          </ButtonStack>
        </HeaderStack>
      </MainBox>
      <SpacerBox />
      <Drawer open={showMenu} onClose={handleClose} anchor='left'>
        <MobileMenu handleClose={handleClose} />
      </Drawer>
      <Drawer open={showLogin} onClose={handleClose} anchor='right'>
        <LoginScreen handleClose={handleClose} />
      </Drawer>
      <Drawer open={showSearch} onClose={handleClose} anchor='right'>
        <MobileSearch handleClose={handleClose} />
      </Drawer>
      <Drawer open={showProfile} onClose={handleClose} anchor='right'>
        <ProfileModal handleClose={handleClose} />
      </Drawer>
    </Box>
  )
}
