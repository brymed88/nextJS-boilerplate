import AuthForm from '@/features/auth/components/authForm'
import {
     AuthSteps,
     authStepTypes,
} from '@/features/auth/components/authForm/types'
import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('auth')

type AuthPageProps = {
     searchParams: { [key: string]: string | undefined }
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
     //Gaurd for incoming step
     const step = (
          !searchParams.step ? 'login'
          : authStepTypes.includes(searchParams.step) ? searchParams.step
          : undefined) as AuthSteps

     return (
          <section className="flex size-full justify-center md:pt-20">
               <AuthForm step={step} />
          </section>
     )
}

export default AuthPage
