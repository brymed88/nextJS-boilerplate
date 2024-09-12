'use client'
import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { HTMLInputTypeAttribute, useState } from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'
type FormInputProps = {
     name: string
     className?: string
     type?: HTMLInputTypeAttribute
     options?: RegisterOptions
}

const HookFormInput = ({
     type = 'text',
     className,
     options,
     name,
     ...props
}: FormInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
     const [showIcon, setShowIcon] = useState(false)

     const t = useTranslations('zod')

     const {
          register,
          formState: { errors },
     } = useFormContext()

     const minLength =
          errors[name] &&
          type === 'password' &&
          (errors[name].message as string).split(',')[1]

     const translateError = () => {
          if (!errors[name]) return

          if (type === 'password') {
               const errorArr = (errors[name].message as string).split(',')
               return t(errorArr[0], { num: errorArr[1] || 1 })
          }
          return t(errors[name].message)
     }

     return type !== 'checkbox' ?
               <div className="relative flex w-full flex-col items-center gap-2">
                    <input
                         className={cn(
                              'w-full rounded-md bg-slate-100 p-2',
                              className
                         )}
                         type={!showIcon ? type : 'text'}
                         data-testid={`form-input-${name}`}
                         {...register(name, options)}
                         {...props}
                    />
                    {type === 'password' && (
                         <span className="absolute right-[2%] flex size-10 items-center justify-center text-slate-400">
                              {showIcon ?
                                   <EyeIcon
                                        width={22}
                                        onClick={() => setShowIcon(!showIcon)}
                                   />
                              :    <EyeOffIcon
                                        width={22}
                                        onClick={() => setShowIcon(!showIcon)}
                                   />
                              }
                         </span>
                    )}
                    {errors[name] && errors[name]?.message && (
                         <span className="my-2 flex w-full items-start font-semibold text-red-500">
                              {translateError()}
                         </span>
                    )}
               </div>
          :    <>
                    <input
                         className={cn(
                              'size-5 border-2',
                              className,
                              errors[name] && 'appearance-none border-red-400'
                         )}
                         type="checkbox"
                         data-testid={`form-input-${name}`}
                         {...register(name, options)}
                         {...props}
                    />
               </>
}

export default HookFormInput
