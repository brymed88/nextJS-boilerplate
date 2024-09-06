'use client'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
const FullWidthMenu = ({ hasSession }: { hasSession: boolean }) => {
    const t = useTranslations('menu')

    return (
        <section className="fixed w-full bg-green-400">
            <header className="flex h-10 w-full items-center px-6 py-8">
                <Image src="/next.svg" height={60} width={60} alt="logo" />
                <span className="grow" />
                <nav className="flex items-center gap-4 md:gap-6">
                    <Link href="/">{t('home')}</Link>
                    <Link href="/about">{t('about')}</Link>
                    <Link href="/auth" className="font-medium">
                        {t('accountBtn', { loggedIn: +hasSession })}
                    </Link>
                </nav>
            </header>
        </section>
    )
}

export default FullWidthMenu
