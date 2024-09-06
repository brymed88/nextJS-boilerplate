import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('about')

const AboutPage = () => {
    return <div>About Page</div>
}

export default AboutPage
