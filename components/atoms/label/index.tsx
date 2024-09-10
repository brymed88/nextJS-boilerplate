import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
type LabelProps={
    value:string
    className?:string
}

const Label = ({value,className}:LabelProps) => {
  return (
   <span className={cn('py-2',className)}>
    {value}
   </span>
  )
}

export default Label
