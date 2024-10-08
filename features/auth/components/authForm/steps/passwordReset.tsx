'use client'

import Button from '@/components/atoms/button'
import HookFormComponent from '@/components/atoms/hookForm'
import HookFormInput from '@/components/atoms/hookFormInput'
import Label from '@/components/atoms/label'
import { resetPassword } from '@/features/auth/actions/resetPassword'
import type { AuthDataType } from '@/features/auth/types'
import { Link } from '@/features/i18n/routing'
import { UsersRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState, useTransition } from 'react'
import { z } from 'zod'

const minPasswordLength = 4

const ResetSchema = z
     .object({
          password: z.string().min(minPasswordLength, {
               message: `passwordErrorLength,${minPasswordLength}`,
          }),
          vpassword: z.string().min(minPasswordLength, {
               message: `passwordErrorLength,${minPasswordLength}`,
          }),
     })
     .refine((data) => data.password === data.vpassword, {
          message: 'passwordErrorMismatch',
          path: ['vpassword'],
     })

type ResetSchemaType = z.infer<typeof ResetSchema>

const PasswordResetStep = ({ userId }: { userId?: string }) => {
     const t = useTranslations('pages.auth.resetPassword')
     const [isLoading, startResetTransition] = useTransition()
     const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined)

     const onSubmit = (data: ResetSchemaType) =>
          startResetTransition(async () => {
               if (!data.password) return

               const formData: AuthDataType = {
                    userId: userId,
                    password: data.password,
                    vPassword: data.vpassword,
               }

               const res = await resetPassword(formData)

               if (res?.hasError) {
                    setIsSuccess(false)
                    return
               }
               setIsSuccess(true)
          })

     if (!userId)
          return (
               <div className="flex w-full flex-col items-center justify-center">
                    <p className="py-4 text-center text-slate-600">
                         {t('invalidProcess')}
                    </p>
                    <Link href="/auth" className="text-blue-400">
                         {t('returnBtn')}
                    </Link>
               </div>
          )

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <UsersRound size={45} className="stroke-blue-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-11/12 flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('signupH2')}
                    </h2>

                    {isSuccess !== undefined && !isLoading && (
                         <div className="flex w-10/12 flex-col items-center justify-center">
                              <p className="flex gap-2 py-4 text-center">
                                   {!isSuccess ? t('failMsg') : t('successMsg')}
                              </p>
                              <Link href="/auth" className="text-blue-400">
                                   {t('returnBtn')}
                              </Link>
                         </div>
                    )}

                    {isSuccess === undefined && (
                         <HookFormComponent
                              zodSchema={ResetSchema}
                              defaultValues={{
                                   email: '',
                                   password: '',
                                   vpassword: '',
                                   accept: undefined,
                              }}
                              submitCallback={onSubmit}
                              className="flex w-10/12 flex-col items-center justify-center md:w-9/12"
                         >
                              <Label
                                   value={t('passwordLabel')}
                                   className="w-full py-3 text-slate-700"
                              />
                              <HookFormInput name="password" type="password" />

                              <Label
                                   value={t('vPasswordLabel')}
                                   className="w-full py-3 text-slate-700"
                              />
                              <HookFormInput name="vpassword" type="password" />

                              <div className="mt-6 flex w-full items-center justify-end gap-2">
                                   <Button
                                        className="bg-slate-800 text-white hover:bg-slate-700"
                                        isLoading={isLoading}
                                   >
                                        {t('resetBtnText')}
                                   </Button>
                              </div>
                         </HookFormComponent>
                    )}
               </div>
          </div>
     )
}

export default PasswordResetStep
