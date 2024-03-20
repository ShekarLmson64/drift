import React, { useState } from 'react'
import { TitleColumn } from './loginScreen.styles'
import { useMobileCheck } from '@/hooks/mobileCheck'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw'
import { handler as LoginHandler } from '../api/handlers/login.service'
import { handler as ProfileHandler } from '../api/handlers/profile.service'
import { useRouter } from 'next/router'
import { validateField } from '@/utils/validateField'

export default function SignIn({ setIsSignIn }: any) {
  const router = useRouter()
  const isMobile = useMobileCheck()
  //** FYI: Typescript automatically infirm the states types based on initial value  */
  //states
  const [showPassword, setShowPassword]: any = useState(false)
  const [loading, setLoading]: any = useState(false)
  const [payload, setPayload]: any = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors]: any = useState({
    email: false,
    password: false
  })
  //handler functions
  const handlePayload = (e: any) => {
    const { value, name } = e?.target
    setPayload({
      ...payload,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    })
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const setProfileDetails = async () => {
    setLoading(true)
    try {
      const { error, data } = await ProfileHandler.apiCall()
      if (error === false) {
        global?.window?.localStorage?.setItem('firstName', data?.firstName)
        global?.window?.localStorage?.setItem('lastName', data?.lastName)
        router?.reload()
      }
    } catch (error) {
      console.log('error at user profile', error)
    } finally {
      setLoading(false)
    }
  }
  const handleLogin = async () => {
    setLoading(true)
    if (payload.password !== "") {
      try {
        const { error, data } = await LoginHandler.apiCall(payload)
        if (error === false) {
          global?.window?.localStorage?.setItem("accessToken", data?.token)
          setProfileDetails()
        }
      } catch (error) {
        console.log("error at SSO Login", error)
      } finally {
        setLoading(false)
      }
    } else {
      setErrors({
        ...errors,
        password: true
      })
      setLoading(false)
    }
  }
  //jsx
  return (
    <>
      <TitleColumn>
        <Typography fontWeight={600} variant='h6'>Sign in to Drift</Typography>
        <Typography variant='body2'>Enter your registered email and password</Typography>
      </TitleColumn>
      <Stack rowGap={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)}>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            onChange={handlePayload}
            id="email"
            name="email"
            type="email"
            error={errors?.["email"]}
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
            placeholder="Enter your email"
            disabled={loading}
          />
          <FormHelperText>{errors["email"] ? "Invalid Email" : ""}</FormHelperText>
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            error={errors?.["password"]}
            onChange={handlePayload}
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
            disabled={loading}
            placeholder="Password"
          />
          <FormHelperText>{errors["password"] ? "Invalid Password" : ""}</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{ backgroundColor: "#000" }}
          disabled={loading || errors["email"]}
          endIcon={loading ? <CircularProgress size={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)} /> : <></>}>
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
            onClick={() => !loading && setIsSignIn(false)}>
            Sign Up
          </Typography>
        </Stack>
        <Typography variant='caption'>If you are already an existing user of Drift Clothing, kindly use the same credentials to sign in.</Typography>
      </TitleColumn>
    </>
  )
}
