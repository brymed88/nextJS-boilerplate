import { useTranslations } from 'next-intl'

const DashboardBillingPage = () => {
     const t = useTranslations('pages.dashboard.billing')
     return <div className="text-4xl text-white">{t('title')}</div>
}

export default DashboardBillingPage
