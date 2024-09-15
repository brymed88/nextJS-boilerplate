import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React, { PropsWithChildren } from 'react'

type ButtonProps = {
     isLoading?: boolean
     className?: string
}

const Button = ({
     isLoading,
     className,
     children,
     ...props
}: PropsWithChildren & React.ComponentProps<'button'> & ButtonProps) => {
     return (
          <button
               className={cn(
                    'flex items-center gap-2 rounded-md bg-green-400 px-4 py-2',
                    className
               )}
               {...props}
          >
               {isLoading && (
                    <Loader2
                         size={16}
                         className="animate-spin"
                         data-testid="loading-icon"
                    />
               )}
               {children}
          </button>
     )
}

export default Button
