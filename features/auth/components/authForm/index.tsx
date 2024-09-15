import { AuthSteps } from '../../types'
import LoginStep from './steps/login'
import ResetStep from './steps/reset'
import SignupStep from './steps/signup'
import VerifyStep from './steps/verify'

type AuthFormProps = {
     step?: AuthSteps
}

const AuthForm = ({ step }: AuthFormProps) => {
     return (
          <div className="flex w-full px-4 py-8 md:max-w-[500px] md:rounded-lg md:shadow-lg">
               {(step === 'login' || step === undefined) && <LoginStep />}
               {step === 'signup' && <SignupStep />}
               {step === 'verify' && <VerifyStep />}
               {step === 'reset' && <ResetStep />}
          </div>
     )
}

export default AuthForm
