import React, { useState } from 'react'
import { LoginStack, PositionBox, TitleColumn } from './loginScreen.styles'
import { useMobileCheck } from '@/hooks/mobileCheck'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import SignIn from './signIn.component'
import SignUp from './signUp.component'

export default function LoginScreen({ handleClose }: any) {
  const isMobile = useMobileCheck()
  const [isSignIn, setIsSignIn]: any = useState<Boolean>(true)
  return (
    <LoginStack>
      <PositionBox onClick={handleClose}>
        <CloseRoundedIcon />
      </PositionBox>
      {isSignIn ? (
        <SignIn setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp setIsSignIn={setIsSignIn} />
      )}
    </LoginStack>
  )
}
