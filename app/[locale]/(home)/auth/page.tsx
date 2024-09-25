import AuthForm from '@/features/auth/components/authForm'
import { AuthSteps, authStepTypes } from '@/features/auth/types'
import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('auth')

type AuthPageProps = {
     searchParams: { [key: string]: string | undefined }
}

const AuthPage = ({ searchParams }: AuthPageProps) => {
     const step = (
          searchParams.code ? 'verify'
          : !searchParams.step ? 'login'
          : authStepTypes.includes(searchParams.step) ? searchParams.step
          : 'login') as AuthSteps

     const verifyCode = searchParams.code

     return (
          <section className="flex size-full justify-center md:pt-20">
               <AuthForm
                    step={step}
                    verifyCode={verifyCode}
                    type={searchParams.type}
               />
          </section>
     )
}

export default AuthPage
