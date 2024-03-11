import React, { useState } from 'react'
import { DetailStack, TitleColumn } from './loginScreen.styles'
import { useMobileCheck } from '@/customHooks/mobileCheck'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw';

export default function SignUp({ setIsSignIn }: any) {
    const isMobile = useMobileCheck()
    const [showPassword, setShowPassword]: any = useState<Boolean>(false)
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <TitleColumn>
                <Typography variant='h4'>REGISTER WITH US</Typography>
                <Typography variant='body2'>Enter your details to register</Typography>
            </TitleColumn>
            <Stack rowGap={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)}>
                <DetailStack>
                    <FormControl variant="outlined" fullWidth>
                        <OutlinedInput
                            placeholder='First Name'
                        />
                    </FormControl>
                    <FormControl variant="outlined" fullWidth>
                        <OutlinedInput
                            placeholder='Last Name'
                        />
                    </FormControl>
                </DetailStack>
                <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                        endAdornment={
                            <InputAdornment position="end">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        placeholder='Enter your email'
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        placeholder="Password"
                    />
                </FormControl>
            </Stack>
            <TitleColumn>
                <Stack flexDirection={"row"} columnGap={"6px"}>
                    <Typography variant='body2'>Already have an account?</Typography>
                    <Typography
                        variant='body2'
                        fontWeight={600}
                        sx={{ textDecoration: "underline", cursor: "pointer" }}
                        onClick={() => setIsSignIn(true)}>
                        Sign In
                    </Typography>
                </Stack>
                <Typography variant='caption'>If you are already an existing user of Drift Clothing, kindly use the same credentials to sign in.</Typography>
            </TitleColumn>
        </>
    )
}
