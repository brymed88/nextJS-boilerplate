import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import './globals.css'

export default async function LocaleLayout({
     children,
     params: { locale },
}: {
     children: React.ReactNode
     params: { locale: string }
}) {
     const messages = await getMessages({ locale })

     return (
          <html lang={locale}>
               <body className="size-full">
                    <NextIntlClientProvider messages={messages} locale={locale}>
                         {children}
                    </NextIntlClientProvider>
               </body>
          </html>
     )
}
