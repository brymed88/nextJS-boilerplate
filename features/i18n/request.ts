import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { loadI18nTranslations } from '@/features/i18n/loader'
import { locales } from './routing'

export default getRequestConfig(async ({ locale }) => {
     if (!locales.includes(locale as any)) notFound()

     const messages = loadI18nTranslations('/features/i18n/messages/', locale)

     return {
          messages,
     }
})
