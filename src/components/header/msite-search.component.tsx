import React from 'react'
import Typewriter from 'typewriter-effect';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';
import { CustomSearch, MobileMenuStack, PositionBox, SearchIconWrapper, StyledInputBase } from './header.styles'
import Link from 'next/link';
import Dimage from '../custom/customImage/customImage';
import { MobilePxToVw } from '@/utils/pxToVw';
import { InputAdornment, Stack, Typography } from '@mui/material';

export default function MobileSearch({ handleClose }: any) {
    return (
        <MobileMenuStack>
            <PositionBox onClick={handleClose}>
                <CloseRoundedIcon />
            </PositionBox>
            <Link href={"/"} onClick={handleClose}>
                <Dimage
                    src={"/icons/home-icon.png"}
                    alt={"home-icon"}
                    width={'100%'}
                    height={'100%'}
                    styles={{ maxWidth: MobilePxToVw(160) }}
                />
            </Link>
            <CustomSearch>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{
                        "& .MuiInputAdornment-positionStart": {
                            paddingLeft: MobilePxToVw(110)
                        }
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <Stack flexDirection={"row"} columnGap={MobilePxToVw(6)}>
                                <Typography>Search for</Typography>
                                <Typewriter
                                    options={{
                                        strings: ["shirts", "shoes", "trousers", "balaclava", "t-shirts"],
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
        </MobileMenuStack>
    )
}
