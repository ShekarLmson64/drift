import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchIcon from '@mui/icons-material/Search';
import { CustomSearch, MobileMenuStack, PositionBox, SearchIconWrapper, StyledInputBase } from './header.styles'
import Link from 'next/link';
import Dimage from '../custom/customImage/customImage';
import { MobilePxToVw } from '@/utils/pxToVw';
import { InputAdornment, Stack, Typography } from '@mui/material';

export default function MobileSearch({ handleClose }: any) {
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
                    height={'100%'}
                    styles={{ maxWidth: MobilePxToVw(160) }}
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
