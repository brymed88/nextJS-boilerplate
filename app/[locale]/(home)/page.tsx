import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('home')

export default function Home() {
    return <div>Home page</div>
}
