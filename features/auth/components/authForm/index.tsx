import ErrorStep from './steps/error'
import LoginStep from './steps/login'
import ResetStep from './steps/reset'
import SignupStep from './steps/signup'
import VerifyStep from './steps/verify'
import { AuthSteps } from './types'

type AuthFormProps = {
     step?: AuthSteps
}
const AuthForm = ({ step }: AuthFormProps) => {
     return (
          <div className="flex w-full md:shadow-lg px-4 py-8 md:max-w-[500px] md:rounded-lg">
               {step === undefined && <ErrorStep />}
               {step === 'login' && <LoginStep />}
               {step === 'signup' && <SignupStep />}
               {step === 'verify' && <VerifyStep />}
               {step === 'reset' && <ResetStep />}
          </div>
     )
}

export default AuthForm
