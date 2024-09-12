'use client'
import Button from '@/components/atoms/button'
import { Link } from '@/features/i18n/routing'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useWindowScrollPositions } from '@/hooks/useWindowScrollPositions'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
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
     const t = useTranslations('menu')

     const isDesktop = width ? width > 768 || false : undefined

     if (isDesktop === undefined)
          return (
               <section className="fixed flex w-full justify-center bg-indigo-700 text-slate-200">
                    <div className="flex h-10 w-full max-w-[1200px] items-center gap-8 px-6 py-8">
                         <Image
                              src="/next.svg"
                              height={60}
                              width={60}
                              alt="logo"
                         />
                         <span className="grow" />
                         <Loader2 size={32} className="animate-spin" />
                    </div>
               </section>
          )

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
                    {!isDesktop && (
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
                                        href="/auth"
                                        className="w-full rounded-md bg-indigo-500 p-2 text-center"
                                   >
                                        {t('accountBtn', {
                                             loggedIn: +hasSession,
                                        })}
                                   </Link>
                                   {hasSession && (
                                        <Button className="w-36 rounded-md bg-red-500 p-3 px-4">
                                             Logout
                                        </Button>
                                   )}
                              </nav>
                         </MobileMenuLayout>
                    )}
                    {isDesktop && (
                         <DesktopMenuLayout>
                              <nav className="flex items-center gap-6">
                                   <Link href="/">{t('home')}</Link>
                                   <Link href="/about">{t('about')}</Link>
                                   <Link href="/auth">
                                        {t('accountBtn', {
                                             loggedIn: +hasSession,
                                        })}
                                   </Link>
                              </nav>
                         </DesktopMenuLayout>
                    )}
               </header>
          </section>
     )
}

export default FullWidthMenu
