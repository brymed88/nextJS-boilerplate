import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('dashboard')

const DashboardPage = () => {
    return <div>Dashboard</div>
}

export default DashboardPage
