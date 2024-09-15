import { useTranslations } from 'next-intl'

const Footer = () => {
     const t = useTranslations('footer')
     return (
          <footer className="flex h-20 w-full items-center justify-center bg-slate-900 text-slate-200">
               {t('placeholder')}
          </footer>
     )
}

export default Footer
