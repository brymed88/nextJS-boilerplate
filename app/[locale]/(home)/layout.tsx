import FullWidthMenu from '@/components/templates/fullWidthMenu'
import { PropsWithChildren } from 'react'
export default async function HomeLayout({ children }: PropsWithChildren) {
    //return here if not authorized?
    return (
        <main className="flex size-full flex-col">
            <FullWidthMenu hasSession={false} />
            <section className="mt-10 flex min-h-screen w-full flex-col items-center bg-slate-700 py-8">
                <p className="bg-pink-400 p-6">Home Layout</p>
                {children}
            </section>
        </main>
    )
}
