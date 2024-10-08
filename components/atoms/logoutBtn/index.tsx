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

     return (
          <Button
               onClick={signOut}
               className={cn(
                    'flex items-center bg-red-800 text-white hover:bg-red-700',
                    className,
                    condensed && 'py-3'
               )}
          >
               {!condensed ?
                    t('logoutBtn')
               :    <LogOut size={16} data-testid="logout-icon" />}
          </Button>
     )
}

export default LogoutBtn
