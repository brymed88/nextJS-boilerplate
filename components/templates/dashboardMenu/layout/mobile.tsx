'use client'

import LogoutBtn from '@/components/atoms/logoutBtn'
import { Link, usePathname } from '@/features/i18n/routing'
import { cn } from '@/lib/utils'
import { Menu, XIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { DashboardNavLinkType } from '../types'
import LocaleChanger from '@/components/atoms/localeChanger'

type MobileMenuProps = {
     navLinks: DashboardNavLinkType[]
     profileImg: string
}

const MobileDashboardMenu = ({ navLinks, profileImg }: MobileMenuProps) => {
     const [menuOpen, setMenuOpen] = useState(false)
     const pathName = usePathname()

     return (
          <section className="relative flex h-20 w-full bg-slate-800 transition-all duration-200 ease-in-out">
               <div className="flex w-full items-center justify-between px-4 py-8">
                    <span className="flex size-12 items-center justify-center rounded-full bg-slate-800">
                         <Link href="/dashboard/profile">
                              {
                                   <Image
                                        src={profileImg}
                                        height={60}
                                        width={60}
                                        alt="profile-img"
                                   />
                              }
                         </Link>
                    </span>
                    <span
                         className="pr-4"
                         onClick={() => setMenuOpen(!menuOpen)}
                    >
                         {!menuOpen ?
                              <Menu className="stroke-slate-300" />
                         :    <XIcon
                                   className={cn(
                                        'stroke-slate-300',
                                        menuOpen && 'animate-bounce'
                                   )}
                              />
                         }
                    </span>
               </div>

               <div
                    className={cn(
                         'absolute left-[-200%] top-16 z-10 flex w-full grow flex-col items-center gap-px bg-slate-800 p-2 pb-6 transition-all duration-200 ease-in-out',
                         menuOpen && 'left-0'
                    )}
               >
                    <div className="my-4 flex w-full flex-col border-y border-y-slate-700 py-4">
                         {navLinks.map((navItem) => (
                              <Link
                                   href={navItem.url}
                                   key={navItem.label}
                                   className="w-full"
                                   onClick={() => setMenuOpen(!menuOpen)}
                              >
                                   <span
                                        className={cn(
                                             'flex gap-4 rounded-md px-2 py-4 font-medium text-slate-200 hover:font-bold',
                                             pathName === navItem.url &&
                                                  'bg-slate-700/60'
                                        )}
                                   >
                                        {navItem.icon}
                                        {navItem.label}
                                   </span>
                              </Link>
                         ))}
                    </div>
                    <span className='flex gap-2 justify-center items-center'>
                    <LogoutBtn />
                    <LocaleChanger/>
                    </span>
                   
               </div>
          </section>
     )
}

export default MobileDashboardMenu
