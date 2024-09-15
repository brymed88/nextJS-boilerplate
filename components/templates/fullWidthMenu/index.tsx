'use client'
import LogoutBtn from '@/components/atoms/logoutBtn'
import { Link } from '@/features/i18n/routing'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useWindowScrollPositions } from '@/hooks/useWindowScrollPositions'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import DesktopMenuLayout from './layouts/desktop'
import MobileMenuLayout from './layouts/mobile'

type MenuProps = {
     hasSession: boolean
}

//TODO: finish once session exists

const FullWidthMenu = ({ hasSession }: MenuProps) => {
     const { scrollY } = useWindowScrollPositions()
     const { width } = useWindowDimensions()
     const t = useTranslations('menu.main')
     const isDesktop = width ? width > 768 || false : undefined

     return (
          <section
               className={cn(
                    'fixed z-10 flex w-full justify-center bg-indigo-700 text-slate-200',
                    scrollY > 20 && isDesktop && 'shadow-lg'
               )}
          >
               <header className="flex h-10 w-full max-w-[1200px] items-center gap-8 px-6 py-8">
                    <Image src="/next.svg" height={60} width={60} alt="logo" />
                    <span className="grow" />
                    {isDesktop === undefined && (
                         <div className="mt-[-10px] flex h-1 items-center justify-center gap-2 text-white">
                              <span className="animate-pulse text-2xl delay-0 duration-1000">
                                   .
                              </span>
                              <span className="animate-pulse text-2xl delay-200 duration-1000">
                                   .
                              </span>
                              <span className="animate-pulse text-2xl delay-300 duration-1000">
                                   .
                              </span>
                         </div>
                    )}

                    {!isDesktop && isDesktop !== undefined && (
                         <MobileMenuLayout>
                              <nav className="flex flex-col items-center gap-4">
                                   <Link
                                        href="/"
                                        className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                   >
                                        {t('home')}
                                   </Link>
                                   <Link
                                        href="/about"
                                        className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                   >
                                        {t('about')}
                                   </Link>
                                   <Link
                                        href={
                                             hasSession ? '/dashboard' : '/auth'
                                        }
                                        className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                   >
                                        {t('accountBtn')}
                                   </Link>
                                   {hasSession && <LogoutBtn />}
                              </nav>
                         </MobileMenuLayout>
                    )}
                    {isDesktop && (
                         <DesktopMenuLayout>
                              <nav className="flex items-center gap-6">
                                   <Link href="/">{t('home')}</Link>
                                   <Link href="/about">{t('about')}</Link>

                                   <Link
                                        href={
                                             hasSession ? '/dashboard' : '/auth'
                                        }
                                   >
                                        {hasSession ?
                                             t('loggedIn')
                                        :    t('accountBtn')}
                                   </Link>
                                   {hasSession && <LogoutBtn />}
                              </nav>
                         </DesktopMenuLayout>
                    )}
               </header>
          </section>
     )
}

export default FullWidthMenu
