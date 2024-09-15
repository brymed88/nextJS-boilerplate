import { useTranslations } from 'next-intl'

const DashboardSettingsPage = () => {
     const t = useTranslations('pages.dashboard.settings')
     return <div className="text-4xl text-white">{t('title')}</div>
}

export default DashboardSettingsPage
