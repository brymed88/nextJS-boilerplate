'use client'

import UseProfileImage from '@/hooks/useProfileImage'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { House, Receipt, Settings, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import DesktopDashboardMenu from './layout/desktop'
import MobileDashboardMenu from './layout/mobile'
import { DashboardNavLinkType } from './types'

const iconStyles = { size: '22', className: 'stroke-slate-200' }

const DashboardMenu = () => {
     const { width } = useWindowDimensions()
     const t = useTranslations('menu.dashboard')
     const isDesktop = width ? width > 768 || false : undefined
     const profileImg = UseProfileImage()

     const dashboardNav: DashboardNavLinkType[] = [
          {
               url: '/dashboard',
               label: t('home'),
               icon: <House {...iconStyles} />,
          },
          {
               url: '/dashboard/profile',
               label: t('profile'),
               icon: <User {...iconStyles} />,
          },
          {
               url: '/dashboard/billing',
               label: t('billing'),
               icon: <Receipt {...iconStyles} />,
          },
          {
               url: '/dashboard/settings',
               label: t('settings'),
               icon: <Settings {...iconStyles} />,
          },
     ]

     if (isDesktop === undefined)
          return (
               <div className="relative flex h-20 w-full items-center bg-slate-800 transition-all duration-500 ease-in-out md:min-h-screen md:w-64 md:flex-col">
                    <div className="ml-4 mt-[-40px] flex items-center gap-2 text-slate-300 md:absolute md:top-[50%]">
                         <span className="animate-pulse text-6xl delay-0 duration-1000">
                              .
                         </span>
                         <span className="animate-pulse text-6xl delay-200 duration-1000">
                              .
                         </span>
                         <span className="animate-pulse text-6xl delay-300 duration-1000">
                              .
                         </span>
                    </div>
               </div>
          )

     if (isDesktop)
          return (
               <DesktopDashboardMenu
                    navLinks={dashboardNav}
                    profileImg={profileImg}
               />
          )

     return (
          <MobileDashboardMenu
               navLinks={dashboardNav}
               profileImg={profileImg}
          />
     )
}

export default DashboardMenu
