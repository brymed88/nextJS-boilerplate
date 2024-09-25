'use client'

import { useState } from 'react'
import { AuthSteps } from '../../types'
import LoginStep from './steps/login'
import PasswordResetStep from './steps/passwordReset'
import ResetStep from './steps/reset'
import SignupStep from './steps/signup'
import VerificationNoticeStep from './steps/verificationNotice'
import VerifyStep from './steps/verify'

type AuthFormProps = {
     step?: AuthSteps
     verifyCode?: string
     type?: string
}

const AuthForm = ({ step, verifyCode, type }: AuthFormProps) => {
     const [userId, setUserId] = useState('')

     const setUser = (userId: string) => userId && setUserId(userId)

     return (
          <div className="flex w-full px-4 py-8 md:max-w-[500px] md:rounded-lg md:shadow-lg">
               {(step === 'login' || step === undefined) && <LoginStep />}
               {step === 'signup' && <SignupStep />}
               {step === 'verify' && (
                    <VerifyStep
                         verifyCode={verifyCode}
                         type={type}
                         setUserId={setUser}
                    />
               )}
               {step === 'reset' && <ResetStep />}
               {step === 'checkEmail' && <VerificationNoticeStep />}
               {step === 'passwordReset' && (
                    <PasswordResetStep userId={userId} />
               )}
          </div>
     )
}

export default AuthForm
