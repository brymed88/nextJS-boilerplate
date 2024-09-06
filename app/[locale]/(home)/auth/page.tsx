import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('auth')

const AuthPage = () => {
    return <div>Authorization</div>
}

export default AuthPage
