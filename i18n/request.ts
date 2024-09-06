import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { loadI18nTranslations } from '@/i18n/loader'
import { locales } from './locales'

export default getRequestConfig(async ({ locale }) => {
     if (!locales.includes(locale as any)) notFound()

     const messages = loadI18nTranslations('/messages/', locale)

     return {
          messages,
     }
})