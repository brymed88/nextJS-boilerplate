import LocaleChanger from '@/components/atoms/localeChanger'
import { cn } from '@/lib/utils'
import { Menu, XIcon } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'

const MobileMenuLayout = ({ children }: PropsWithChildren) => {
     const [menuToggled, setMenuToggled] = useState(false)

     return (
          <>
               <div
                    className={cn(
                         'absolute right-[-100%] top-10 flex w-full flex-col bg-indigo-700/95 p-4 pb-10 transition-all',
                         menuToggled && 'right-0 shadow-md'
                    )}
               >
                    <div onClick={() => setMenuToggled(false)} className="py-8">
                         {children}
                    </div>
                    <LocaleChanger className="max-w-20 self-end" />
               </div>
               <span
                    onClick={() => setMenuToggled(!menuToggled)}
                    className="cursor-pointer"
               >
                    {!menuToggled ?
                         <Menu className="stroke-slate-100" size={32} />
                    :    <XIcon
                              className={cn(
                                   'stroke-slate-100',
                                   menuToggled && 'animate-bounce'
                              )}
                              size={32}
                         />
                    }
               </span>
          </>
     )
}

export default MobileMenuLayout
