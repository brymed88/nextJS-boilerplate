import { locales } from '@/features/i18n/routing'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'

import menuTranslations from '../features/i18n/messages/en/menu/index.json'
import menuTranslationsPT from '../features/i18n/messages/pt/menu/index.json'

import zodTranslations from '../features/i18n/messages/en/zod/index.json'
import zodTranslationsPT from '../features/i18n/messages/pt/zod/index.json'

import pageTranslations from '../features/i18n/messages/en/pages/index.json'
import pageTranslationsPT from '../features/i18n/messages/pt/pages/index.json'

import footerTranslations from '../features/i18n/messages/en/footer/index.json'
import footerTranslationsPT from '../features/i18n/messages/pt/footer/index.json'

//NOTE: update the above imports and below section with new translation as needed for testing purposes

type MessagesType = {
     [key: (typeof locales)[number]]: AbstractIntlMessages
}

const messages: MessagesType = {
     en: {
          pages: pageTranslations,
          menu: menuTranslations,
          zod: zodTranslations,
          footer: footerTranslations,
     },
     pt: {
          pages: pageTranslationsPT,
          menu: menuTranslationsPT,
          zod: zodTranslationsPT,
          footerTranslations: footerTranslationsPT,
     },
}

const IntlMockProvider = ({
     locale,
     children,
}: PropsWithChildren & { locale: (typeof locales)[number] }) => {
     return (
          <NextIntlClientProvider locale={locale} messages={messages[locale]}>
               {children}
          </NextIntlClientProvider>
     )
}

export default IntlMockProvider
