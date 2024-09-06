import { Loader2 } from 'lucide-react'
import React from 'react'

type ButtonProps = {
    isLoading?: boolean
}

const Button = ({ isLoading, ...props }: React.ComponentProps<'button'> & ButtonProps) => {
    return (
        <button {...props}>
            {isLoading && <Loader2 size={16} className="animate-spin" />}
            {props.value}
        </button>
    )
}

export default Button
