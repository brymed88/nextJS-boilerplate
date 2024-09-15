'use client'

import Button from '@/components/atoms/button'
import HookFormComponent from '@/components/atoms/hookForm'
import HookFormInput from '@/components/atoms/hookFormInput'
import Label from '@/components/atoms/label'
import { Link } from '@/features/i18n/routing'
import { CircleHelp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import z from 'zod'

const ResetSchema = z.object({
     email: z.string().email({ message: 'fieldRequired' }),
})

type ResetSchemaType = z.infer<typeof ResetSchema>

const ResetStep = () => {
     const t = useTranslations('pages.auth.reset')

     const onSubmit = (data: ResetSchemaType) => console.log(data)

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <CircleHelp size={45} className="stroke-blue-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-11/12 flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('resetH2')}
                    </h2>
                    <HookFormComponent
                         zodSchema={ResetSchema}
                         className="flex w-10/12 flex-col items-center justify-center md:w-9/12"
                         defaultValues={{ email: '' }}
                         submitCallback={onSubmit}
                    >
                         <Label
                              value={t('emailAddressLabel')}
                              className="w-full py-3 text-slate-700"
                         />
                         <HookFormInput name="email" className="w-full" />

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
                    </HookFormComponent>
               </div>
          </div>
     )
}

export default ResetStep
