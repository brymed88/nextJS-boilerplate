'use client'

import Button from '@/components/atoms/button'
import Label from '@/components/atoms/label'
import { Link } from '@/features/i18n/routing'
import { UsersRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignupInputs = {
     email: string
     password: string
     vpassword: string
     accept: boolean
}

const SignupStep = () => {
     const t = useTranslations('pages.auth.signup')
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm<SignupInputs>()

     const onSubmit: SubmitHandler<SignupInputs> = (data) => console.log(data)

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <UsersRound size={45} className="stroke-blue-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-full flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('signupH2')}
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

                         <Label
                              value={t('passwordLabel')}
                              className="w-full py-3 text-slate-700"
                         />
                         <input
                              {...register('password', { required: true })}
                              className="w-full rounded-md bg-slate-100 p-2"
                         />
                         {errors.email && (
                              <span className="w-full py-2 text-sm text-red-500">
                                   {t('passwordError')}
                              </span>
                         )}

                         <Label
                              value={t('vPasswordLabel')}
                              className="w-full py-3 text-slate-700"
                         />
                         <input
                              {...register('vpassword', { required: true })}
                              className="w-full rounded-md bg-slate-100 p-2"
                         />
                         {errors.email && (
                              <span className="w-full py-2 text-sm text-red-500">
                                   {t('vPasswordError')}
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
                                   {t('createBtnText')}
                              </Button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default SignupStep
