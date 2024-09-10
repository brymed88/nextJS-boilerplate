import Footer from '@/components/templates/footer'
import FullWidthMenu from '@/components/templates/fullWidthMenu'
import { PropsWithChildren } from 'react'

export default async function HomeLayout({ children }: PropsWithChildren) {
     return (
          <main className="flex size-full flex-col items-center">
               <FullWidthMenu hasSession={false} />
               <section className="mt-16 flex min-h-screen w-full flex-col items-center">
                    {children}
               </section>
               <Footer />
          </main>
     )
}
