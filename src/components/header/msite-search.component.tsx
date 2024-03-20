import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';
import { CustomSearch, MobileMenuStack, PositionBox, SearchIconWrapper, StyledInputBase } from './header.styles'
import Link from 'next/link';
import Dimage from '../custom/customImage/customImage';
import { MobilePxToVw } from '@/utils/pxToVw';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@/context/themewrapper.context'


export default function MobileSearch({ handleClose }: any) {
    const { isDarkMode } = useTheme()
    const [focused, setFocused]: any = useState<boolean>(false)
    const [value, setValue]: any = useState<string>("")
    const handleSearchValue = (e: any) => {
        setValue(e.target.value)
    }
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
                    height={'auto'}
                    styles={{
                        maxWidth: MobilePxToVw(160),
                        mixBlendMode: isDarkMode ? "screen" : "unset",
                        filter: isDarkMode ? "invert(1)" : "invert(0)"
                    }}
                />
            </Link>
            <CustomSearch onClick={() => setFocused(true)}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    focused
                        ? <StyledInputBase
                            value={value}
                            onChange={handleSearchValue}
                            onBlur={() => setFocused(false)}
                            inputRef={(input) => input && input?.focus()}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        : <Stack className='typewriter-stack' flexDirection={"row"}
                            columnGap={MobilePxToVw(6)}>
                            <Typography>Search for</Typography>
                            <Typewriter
                                options={{
                                    strings: ["shirts", "jeans", "hoodies", "trousers", "balaclava", "t-shirts", "jackets"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Stack>
                }
            </CustomSearch>
        </MobileMenuStack>
    )
}
