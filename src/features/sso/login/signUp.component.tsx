import React, { useState } from 'react'
import { CustomInputField, DetailStack, TitleColumn } from './loginScreen.styles'
import { useMobileCheck } from '@/customHooks/mobileCheck'
import { handler as RegisterHandler } from '../api/handlers/register.service';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, CircularProgress, FormControl, FormHelperText, IconButton, InputAdornment, Stack, Typography } from '@mui/material'
import { DesktopPxToVw, MobilePxToVw } from '@/utils/pxToVw';
import { handler as ProfileHandler } from '../api/handlers/profile.service';
import { useRouter } from 'next/router';
import { validateField } from '@/utils/validateField';

export default function SignUp({ setIsSignIn }: any) {
    const isMobile = useMobileCheck()
    const router = useRouter()
    const [loading, setLoading]: any = useState(false)
    const inputFields = [
        {
            name: "firstName",
            placeholder: "First Name",
            fullWidth: false,
            errorText: "Invalid First Name",
        },
        {
            name: "lastName",
            placeholder: "Last Name",
            fullWidth: false,
            errorText: "Invalid Last Name",
        },
        {
            name: "email",
            placeholder: "Enter your email",
            fullWidth: true,
            errorText: "Invalid Email Id",
        },
        {
            name: "password",
            placeholder: "Password",
            fullWidth: true,
            errorText: "Invalid Password",
        }
    ]
    //**states */
    const [showPassword, setShowPassword]: any = useState<Boolean>(false)
    const [payload, setPayload]: any = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        registeredAt: "DRIFT"
    })
    const [errors, setErrors]: any = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    })

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
                global?.window?.localStorage?.setItem("firstName", data?.firstName)
                global?.window?.localStorage?.setItem("lastName", data?.lastName)
                router?.reload()
            }
        } catch (error) {
            console.log("error at user profile", error)
        } finally {
            setLoading(false)
        }
    }
    const handleRegister = async () => {
        setLoading(true)
        try {
            const { error, data } = await RegisterHandler.apiCall(payload)
            if (error === false) {
                global?.window?.localStorage?.setItem("accessToken", data?.token)
                setProfileDetails()
            }
        } catch (error) {
            console.log("error at SSO Login", error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <TitleColumn>
                <Typography fontWeight={600} variant='h6'>REGISTER WITH US</Typography>
                <Typography variant='body2'>Enter your details to register</Typography>
            </TitleColumn>
            <DetailStack>
                {
                    inputFields?.map((field: any, index: number) =>
                        <FormControl variant="outlined"
                            fullWidth={field?.fullWidth}
                            sx={{
                                flexBasis: field?.fullWidth ? "unset" : "50%",
                                paddingRight: (!isMobile && index === 0) ? DesktopPxToVw(20) : 0
                            }}>
                            <CustomInputField
                                id={field?.name}
                                name={field?.name}
                                onChange={handlePayload}
                                type={(field?.name !== "password" || showPassword) ? 'text' : 'password'}
                                disabled={loading}
                                endAdornment={
                                    field?.name === "email"
                                        ? <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                        : field?.name === "password"
                                            ? <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            : <></>
                                }
                                placeholder={field?.placeholder}
                            />
                            <FormHelperText>{errors[field?.name] ? field?.errorText : ""}</FormHelperText>
                        </FormControl>
                    )
                }
                <Button
                    fullWidth
                    disabled={loading}
                    variant="contained"
                    onClick={handleRegister}
                    sx={{ backgroundColor: "#000" }}
                    endIcon={loading ? <CircularProgress size={isMobile ? MobilePxToVw(20) : DesktopPxToVw(20)} /> : <></>}>
                    Register
                </Button>
            </DetailStack>
            <TitleColumn>
                <Stack flexDirection={"row"} columnGap={"6px"}>
                    <Typography variant='body2'>Already have an account?</Typography>
                    <Typography
                        variant='body2'
                        fontWeight={600}
                        sx={{ textDecoration: "underline", cursor: "pointer" }}
                        onClick={() => setIsSignIn(true)}
                    >
                        Sign In
                    </Typography>
                </Stack>
                <Typography variant='caption'>If you are already an existing user of Drift Clothing, kindly use the same credentials to sign in.</Typography>
            </TitleColumn>
        </>
    )
}
