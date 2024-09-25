import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'

export default async function LocaleLayout({
     children,
}: {
     children: React.ReactNode
}) {
     const locale = await getLocale()
     const messages = await getMessages({ locale })

     return (
          <html lang={locale}>
               <body className="size-full">
                    <NextIntlClientProvider messages={messages}>
                         {children}
                    </NextIntlClientProvider>
               </body>
          </html>
     )
}
