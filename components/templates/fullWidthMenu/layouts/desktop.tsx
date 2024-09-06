import LocaleChanger from '@/components/atoms/localeChanger'
import { PropsWithChildren } from 'react'

const DesktopMenuLayout = ({ children }: PropsWithChildren) => {
     return (
          <div className="flex gap-8">
               {children} <LocaleChanger />
          </div>
     )
}

export default DesktopMenuLayout
