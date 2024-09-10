'use client'

import Button from '@/components/atoms/button'
import Label from '@/components/atoms/label'
import { Link } from '@/features/i18n/routing'
import { CircleHelp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState, useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type ResetInputs = {
     email: string
}
const ResetStep = () => {
     const t = useTranslations('pages.auth.reset')
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm<ResetInputs>()

     const [isLoading,startResetTransition] = useTransition()
     const [isSuccess,setIsSuccess] = useState(false)

     const onSubmit: SubmitHandler<ResetInputs> = (data) => console.log(data)

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <CircleHelp size={45} className="stroke-blue-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-full flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('resetH2')}
                    </h2>
                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="flex w-10/12 flex-col items-center justify-center md:w-8/12"
                         noValidate
                    >
                         <Label
                              value={t('emailAddressLabel')}
                              className="w-full py-3 text-slate-700"
                         />
                         <input
                              {...register('email', { required: true })}
                              className="w-full rounded-md bg-slate-100 p-2"
                         />
                         {errors.email && (
                              <span className="w-full py-2 text-sm text-red-500">
                                   {t('emailAddressError')}
                              </span>
                         )}

                         <div className="mt-6 flex w-full items-center justify-between gap-2">
                              <Link
                                   href="/auth"
                                   className="cursor-pointer text-sky-600"
                              >
                                   {t('backToLogin')}
                              </Link>
                              <Button className="bg-slate-800 text-white hover:bg-slate-700">
                                   {t('resetBtnText')}
                              </Button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default ResetStep
