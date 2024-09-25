'use client'

import { verify } from '@/features/auth/actions/verify'
import { Link, useRouter } from '@/features/i18n/routing'
import { CircleCheck, Loader2Icon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState, useTransition } from 'react'

type VerifyStepProps = {
     verifyCode?: string
     type?: string
     setUserId: (userId: string) => void
}
const VerifyStep = ({ verifyCode, type, setUserId }: VerifyStepProps) => {
     const t = useTranslations('pages.auth.verify')
     const [isVerifying, startVerificationTransition] = useTransition()
     const [isValid, setIsValid] = useState(false)
     const router = useRouter()
     const codeRef = useRef(false)

     const processVerificationCode = () =>
          startVerificationTransition(async () => {
               if (!verifyCode) return
               const res = await verify(verifyCode, type)

               if (res?.hasError) return //TODO: alternatively show failure toast / message

               if (type === 'reset') {
                    const { id } = res.data as { id: string; msg: string }
                    setUserId(id)
                    router.push('/auth?step=resetPassword')
                    return
               }

               setIsValid(true)
          })

     useEffect(() => {
          if (codeRef.current || !verifyCode) return
          codeRef.current = true
          processVerificationCode()
     })

     return (
          <div className="relative flex w-full flex-col items-center gap-6">
               <CircleCheck size={45} className="stroke-blue-400" />
               <span className="w-10/12 border-b border-slate-200" />

               <div className="flex w-11/12 flex-col items-center gap-2">
                    <h2 className="w-full text-center text-lg text-slate-500">
                         {t('verifyH2')}
                    </h2>
                    {isVerifying && (
                         <p className="flex w-10/12 items-center justify-center gap-2 py-4">
                              <Loader2Icon className="animate-spin" />
                              {t('processingVerification')}
                         </p>
                    )}

                    {!isVerifying && (
                         <div className="flex w-10/12 flex-col items-center justify-center">
                              <p className="flex gap-2 py-4 text-center">
                                   {!isValid ?
                                        t('failedVerification')
                                   :    t('successVerification')}
                              </p>
                              <Link href="/auth" className="text-blue-400">
                                   {t('returnBtn')}
                              </Link>
                         </div>
                    )}
               </div>
          </div>
     )
}

export default VerifyStep
