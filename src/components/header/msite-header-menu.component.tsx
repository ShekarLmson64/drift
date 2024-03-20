import React, { useState, useEffect } from 'react'
import menuItems from './header_menu.json'
import Link from 'next/link'
import { MenuStack } from './header.styles'
import { Box, Collapse, Grid, Stack, Typography } from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import Dimage from '../custom/customImage/customImage'
import { MobilePxToVw } from '@/utils/pxToVw'

export default function MobileHeaderMenu() {
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
              <Typography>{item?.label}</Typography>
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
              <Collapse in={show}>
                <Grid
                  container
                  mt={MobilePxToVw(20)}
                  rowSpacing={MobilePxToVw(20)}
                >
                  {item?.options?.map((option: any) => (
                    <Grid item xs={6} >
                      <Link href={option?.url} key={option?.label}>
                        <Stack alignItems={'center'}>
                          <Dimage
                            src={option?.image}
                            alt={option?.label}
                            lazy={true}
                            width={MobilePxToVw(700)}
                            height={MobilePxToVw(700)}
                            styles={{ borderRadius: MobilePxToVw(10) }}
                          />
                          <Typography>{option?.label}</Typography>
                        </Stack>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Collapse>
            </Stack>
          )}
        </Box>
      ))}
    </MenuStack>
  )
}
