'use client'

import { Link } from '@/features/i18n/routing'
import { Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
const VerificationNoticeStep = () => {
     const t = useTranslations('pages.auth.checkEmail')

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <Mail size={45} className="stroke-yellow-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-10/12 flex-col items-center gap-4 text-center">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('title')}
                    </h2>
                    <p className="text-slate-700">{t('paraOne')}</p>
                    <p className="text-slate-700">{t('paraTwo')}</p>
                    <p className="flex gap-2 text-slate-800">
                         {t('help')}
                         <Link
                              href="/contact"
                              className="text-blue-400 underline"
                         >
                              {t('helpLink')}
                         </Link>
                    </p>
               </div>
          </div>
     )
}

export default VerificationNoticeStep
