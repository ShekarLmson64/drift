import React, { useState, useEffect } from 'react'
import menuItems from './header_menu.json'
import Link from 'next/link'
import { MenuStack } from './header.styles'
import { Box, Collapse, Stack, Typography } from '@mui/material'
import { DesktopPxToVw } from '@/utils/pxToVw'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'

export default function HeaderMenu() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  const debounceDelay = 200 // Adjust this value as needed
  const debounceSetValue = () => {
    setTimeout(() => {
      setShow(false)
    }, debounceDelay)
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        global?.window?.pageYOffset ||
        global?.document?.documentElement?.scrollTop
      if (scrollTop > 0) {
        debounceSetValue()
      }
    }
    // Adds event listener to detect scroll
    window.addEventListener('scroll', handleScroll)
    // Removes event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <MenuStack>
      {menuItems?.map((item: any) => (
        <Box key={item?.label}>
          {item?.type === 'link' ? (
            <Link href={item?.url}>
              <Typography whiteSpace={"nowrap"}>{item?.label}</Typography>
            </Link>
          ) : (
            <Stack>
              <Stack
                sx={{ cursor: 'pointer' }}
                flexDirection={'row'}
                onClick={handleShow}
              >
                <Typography>{item?.label}</Typography>
                {show ? (
                  <KeyboardArrowUpRoundedIcon />
                ) : (
                  <KeyboardArrowDownRoundedIcon />
                )}
              </Stack>
              <Box
                width={'100vw'}
                position={'fixed'}
                left={0}
                top={DesktopPxToVw(90)}
              >
                <Collapse in={show}>
                  <MenuStack px={DesktopPxToVw(100)} py={DesktopPxToVw(20)}>
                    {item?.options?.map((option: any) => (
                      <Link href={option?.url} key={option?.label}>
                        <Typography>{option?.label}</Typography>
                      </Link>
                    ))}
                  </MenuStack>
                </Collapse>
              </Box>
            </Stack>
          )}
        </Box>
      ))}
    </MenuStack>
  )
}
