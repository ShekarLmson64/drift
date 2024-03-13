import React, { useState } from 'react'
import { TitleColumn } from './loginScreen.styles'
import { useMobileCheck } from '@/customHooks/mobileCheck'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw';
import { handler as LoginHandler } from '../api/handlers/login.service';

export default function SignIn({ setIsSignIn }: any) {
    const isMobile = useMobileCheck()
    const [showPassword, setShowPassword]: any = useState<boolean>(false)
    const [email, setEmail]: any = useState<string>("")
    const [password, setPassword]: any = useState<string>("")
    const handleEmail = (value: string) => {
        setEmail(value)
    }
    const handlePassword = (value: string) => {
        setPassword(value)
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleLogin = async () => {
        const payload = {
            email,
            password
        }
        try {
            const { error, data } = await LoginHandler.apiCall(payload)
            if (error === false) {
                global?.window?.localStorage?.setItem("accessToken", data?.token)
            }
        } catch (error) {
            console.log("error at SSO Login", error)
        }
    }
    return (
        <>
            <TitleColumn>
                <Typography fontWeight={600} variant='h6'>Sign in to Drift</Typography>
                <Typography variant='body2'>Enter your registered email and password</Typography>
            </TitleColumn>
            <Stack rowGap={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)}>
                <FormControl variant="outlined" fullWidth>
                    <OutlinedInput
                        onChange={(e: any) => handleEmail(e.target?.value)}
                        id="email"
                        aria-describedby="email"
                        inputProps={{
                            'aria-label': 'email',
                        }}
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
                        onChange={(e: any) => handlePassword(e.target?.value)}
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
                <Button variant="contained" onClick={handleLogin} sx={{ backgroundColor: "#000" }}>
                    Proceed
                </Button>
            </Stack>
            <TitleColumn>
                <Stack flexDirection={"row"} columnGap={"6px"}>
                    <Typography variant='body2'>Don’t have an account?</Typography>
                    <Typography
                        variant='body2'
                        fontWeight={600}
                        sx={{ textDecoration: "underline", cursor: "pointer" }}
                        onClick={() => setIsSignIn(false)}>
                        Sign Up
                    </Typography>
                </Stack>
                <Typography variant='caption'>If you are already an existing user of Drift Clothing, kindly use the same credentials to sign in.</Typography>
            </TitleColumn>
        </>
    )
}
