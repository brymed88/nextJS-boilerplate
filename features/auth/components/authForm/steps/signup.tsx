'use client'

import Button from '@/components/atoms/button'
import HookFormComponent from '@/components/atoms/hookForm'
import HookFormInput from '@/components/atoms/hookFormInput'
import Label from '@/components/atoms/label'
import { signUp } from '@/features/auth/actions/sign-up'
import type { AuthDataType } from '@/features/auth/types'
import { Link } from '@/features/i18n/routing'
import { UsersRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import z from 'zod'

const minPasswordLength = 4

const SignupSchema = z
     .object({
          email: z.string().email({ message: 'fieldRequired' }),
          password: z.string().min(minPasswordLength, {
               message: `passwordErrorLength,${minPasswordLength}`,
          }),
          vpassword: z.string().min(minPasswordLength, {
               message: `passwordErrorLength,${minPasswordLength}`,
          }),
          accept: z.literal(true),
     })
     .refine((data) => data.password === data.vpassword, {
          message: 'passwordErrorMismatch',
          path: ['vpassword'],
     })

type SignupSchemaType = z.infer<typeof SignupSchema>

const SignupStep = () => {
     const t = useTranslations('pages.auth.signup')
     const [isLoading, startSignupTransition] = useTransition()

     const onSubmit = (data: SignupSchemaType) =>
          startSignupTransition(async () => {
               if (!data.email || !data.password) return //TODO: implement toast

               const formData: AuthDataType = {
                    email: data.email,
                    password: data.password,
                    vPassword: data.vpassword,
               }

               const res = await signUp(formData)

               console.log(res)
          })

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <UsersRound size={45} className="stroke-blue-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-full flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('signupH2')}
                    </h2>
                    <HookFormComponent
                         zodSchema={SignupSchema}
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
                              value={t('emailAddressLabel')}
                              className="w-full py-3 text-slate-700"
                         />
                         <HookFormInput name="email" />

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

                         <span className="flex w-full items-center gap-3 pt-4">
                              <HookFormInput
                                   name="accept"
                                   type="checkbox"
                                   className="size-5"
                              />
                              <Link
                                   href="/terms"
                                   target="_blank"
                                   className="cursor-pointer text-sky-600"
                              >
                                   {t('termsText')}
                              </Link>
                         </span>

                         <div className="mt-6 flex w-full items-center justify-between gap-2">
                              <Link
                                   href="/auth"
                                   className="cursor-pointer text-sky-600"
                              >
                                   {t('backToLogin')}
                              </Link>
                              <Button
                                   className="bg-slate-800 text-white hover:bg-slate-700"
                                   isLoading={isLoading}
                              >
                                   {t('createBtnText')}
                              </Button>
                         </div>
                    </HookFormComponent>
               </div>
          </div>
     )
}

export default SignupStep
