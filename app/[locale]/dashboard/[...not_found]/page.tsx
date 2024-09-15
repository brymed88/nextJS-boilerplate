import { Ghost } from 'lucide-react'
import { useTranslations } from 'next-intl'

const NotFoundDashboard = () => {
     const t = useTranslations('pages.404')
     return (
          <section className="flex min-h-full flex-col items-center justify-center gap-4 py-40 text-slate-400">
               <Ghost size={140} className="stroke-slate-400" />
               <p className="text-8xl">{t('title')}</p>
               <h1 className="text-3xl">{t('message')}</h1>
          </section>
     )
}

export default NotFoundDashboard
