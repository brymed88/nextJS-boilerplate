import Button from '@/components/atoms/button'
import { signOut } from '@/features/auth/actions/sign-out'
import { cn } from '@/lib/utils'
import { LogOut } from 'lucide-react'
import { useTranslations } from 'next-intl'

type LogoutBtnProps = {
     condensed?: boolean
     className?: string
}
const LogoutBtn = ({ condensed = false, className }: LogoutBtnProps) => {
     const t = useTranslations('menu')

     const logout = async () => {
          const res = await signOut()
     }

     return (
          <Button
               onClick={logout}
               className={cn(
                    'flex items-center bg-red-600 text-white hover:bg-red-500',
                    className
               )}
          >
               {!condensed ?
                    <span>{t('logoutBtn')}</span>
               :    condensed && <LogOut size={16} data-testid="logout-icon" />}
          </Button>
     )
}

export default LogoutBtn
