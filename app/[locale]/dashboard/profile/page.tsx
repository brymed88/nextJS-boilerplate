import { useTranslations } from 'next-intl'

const DashboardProfilePage = () => {
     const t = useTranslations('pages.dashboard.profile')
     return <div className="text-4xl text-white">{t('title')}</div>
}

export default DashboardProfilePage
