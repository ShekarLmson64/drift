import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { Box, InputBase, Stack, Switch, styled } from '@mui/material'

export const MainBox = styled(Box)(() => ({
  width: '100%',
  zIndex: '9',
  position: 'fixed',
  top: 0,
  background: '#fff',
  padding: `${DesktopPxToVw(20)} ${DesktopPxToVw(120)}`, // 10px to top-bottom and 60px to right-left
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2)',
  '@media (max-width: 640px)': {
    padding: `${MobilePxToVw(20)} ${MobilePxToVw(30)}`,
  },
}))

export const SpacerBox = styled(Box)(() => ({
  width: '100%',
  height: DesktopPxToVw(90),
  '@media (max-width: 640px)': {
    height: MobilePxToVw(80),
  },
}))

export const HeaderStack = styled(Stack)(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
}))

export const MenuStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  columnGap: DesktopPxToVw(40),
  alignItems: 'center',
  '@media (max-width: 640px)': {
    padding: `0 ${MobilePxToVw(30)}`,
    flexDirection: 'column',
    rowGap: MobilePxToVw(40),
    alignItems: 'start',
  },
  background: theme.palette.background.paper,
}))

export const ButtonStack = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: DesktopPxToVw(40),
  '@media (max-width: 640px)': {
    columnGap: MobilePxToVw(20),
  },
}))

export const IconWrapper = styled(Box)(() => ({
  cursor: 'pointer',
}))

export const CustomSearch = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px 20px 20px 20px',
  backgroundColor: theme.palette.background.default,

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: DesktopPxToVw(600),
  '& .MuiInputAdornment-positionStart': {
    position: 'absolute',
    left: DesktopPxToVw(80),
    zIndex: '1',
  },
  '& .typewriter-stack': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
  },
  '@media (max-width: 640px)': {
    width: '100%',
  },
}))

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

export const PositionBox = styled(Box)(() => ({
  position: 'absolute',
  cursor: 'pointer',
  top: DesktopPxToVw(50),
  right: DesktopPxToVw(50),
  '@media (max-width: 640px)': {
    top: MobilePxToVw(40),
    right: MobilePxToVw(40),
  },
}))

export const MobileMenuStack = styled(Stack)(() => ({
  width: '100vw',
  '@media (max-width: 640px)': {
    padding: MobilePxToVw(40),
    rowGap: MobilePxToVw(50),
  },
}))
export const RowStack = styled(Stack)(() => ({
  width: 'fit-content',
  alignSelf: 'center',
  flexDirection: 'row',
  columnGap: DesktopPxToVw(20),
  alignItems: 'center',
  '@media (max-width: 640px)': {
    columnGap: MobilePxToVw(20),
  },
}))

export const ModalStack = styled(Stack)(() => ({
  width: '40vw',
  padding: DesktopPxToVw(100),
  rowGap: DesktopPxToVw(60),
  '@media (max-width: 640px)': {
    width: '100vw',
    padding: MobilePxToVw(80),
    rowGap: MobilePxToVw(50),
  },
}))

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#aab4be',
    borderRadius: 20 / 2,
  },
}))
