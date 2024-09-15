'use client'

import LocaleChanger from '@/components/atoms/localeChanger'
import LogoutBtn from '@/components/atoms/logoutBtn'
import { Link, usePathname } from '@/features/i18n/routing'
import { cn } from '@/lib/utils'
import { ChevronFirst } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { DashboardNavLinkType } from '../types'

type DesktopMenuProps = {
     navLinks: DashboardNavLinkType[]
     profileImg: string
}

const DesktopDashboardMenu = ({ navLinks, profileImg }: DesktopMenuProps) => {
     const pathName = usePathname()
     const [desktopMenuOpen, setDesktopMenuOpen] = useState(true)

     return (
          <section
               className={cn(
                    'relative flex min-h-full w-64 flex-col bg-slate-800 transition-all duration-200 ease-in-out',
                    !desktopMenuOpen && 'w-16'
               )}
          >
               <div className="flex h-full min-w-full flex-col items-center">
                    <span className="flex min-w-full justify-center px-2 py-4">
                         <Link
                              href="/dashboard/profile"
                              className="pt-10 transition-all ease-linear"
                         >
                              {
                                   <Image
                                        src={profileImg}
                                        width={100}
                                        height={100}
                                        alt="profile-img"
                                   />
                              }
                         </Link>
                    </span>

                    <div className="mt-4 flex w-full grow flex-col border-y border-y-slate-700 py-6">
                         {navLinks?.map((navItem) => (
                              <Link
                                   href={navItem.url}
                                   key={navItem.label}
                                   className="w-full px-1"
                              >
                                   <span
                                        className={cn(
                                             'flex w-full items-center justify-start rounded-md px-2 py-4 text-left font-medium text-slate-200 hover:text-slate-400',
                                             pathName === navItem.url &&
                                                  'bg-slate-700/60',
                                             !desktopMenuOpen &&
                                                  'justify-center'
                                        )}
                                   >
                                        {!desktopMenuOpen ?
                                             navItem.icon
                                        :    navItem.label}
                                   </span>
                              </Link>
                         ))}
                    </div>
               </div>

               <span
                    className={cn(
                         'ease absolute right-2 top-2 flex size-6 cursor-pointer items-center justify-center text-center',
                         !desktopMenuOpen && 'right-5'
                    )}
                    onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
               >
                    <ChevronFirst
                         size={24}
                         className={cn(
                              'stroke-slate-200',
                              !desktopMenuOpen && 'rotate-180 transition-all'
                         )}
                    />
               </span>
               <span
                    className={cn(
                         'my-6 flex w-10/12 items-center justify-center gap-4 self-center',
                         !desktopMenuOpen && 'flex-col'
                    )}
               >
                    <LogoutBtn
                         condensed={!desktopMenuOpen}
                         className="w-full justify-center"
                    />
                    <LocaleChanger className="w-full" dark />
               </span>
          </section>
     )
}

export default DesktopDashboardMenu
