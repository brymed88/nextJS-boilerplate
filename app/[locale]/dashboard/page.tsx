import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('dashboard')

const DashboardPage = () => {
     return <div className="text-4xl text-white">Dashboard</div>
}

export default DashboardPage
