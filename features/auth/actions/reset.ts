'use server'

import { SendResetEmail } from '@/features/email/utils'
import { db } from '@/lib/db'
import { ResponseHandler } from '@/lib/utils'
import { generateIdFromEntropySize } from 'lucia'
import { createDate, TimeSpan } from 'oslo'
import { z } from 'zod'
import { AuthDataType } from '../types'

const emailSchema = z.string().email({ message: 'Invalid email' })

const reset = async (formData: AuthDataType) => {
     if (!formData.email) return ResponseHandler('invalid data', true)

     try {
          emailSchema.parse(formData.email) //validate email address

          const user = await db.user.findUnique({
               where: { email: formData.email },
          })

          if (!user) return ResponseHandler('invalid user', true)

          const tokenId = generateIdFromEntropySize(10) //16 chars long

          const updateUser = await db.user.update({
               where: { id: user.id },
               data: {
                    Verification_Token: {
                         create: {
                              id: tokenId,
                              expires_at: createDate(new TimeSpan(1, 'd')),
                         },
                    },
               },
          })

          if (!updateUser)
               return ResponseHandler(
                    'failed to create verification token',
                    true
               )

          const sendVerificationEmail = await SendResetEmail({
               userEmail: updateUser.email,
               verifyLink: `${process.env.NEXT_PUBLIC_SITE_URL}/auth?step=verify&code=${tokenId}&type=reset`,
          })

          if (!sendVerificationEmail)
               return ResponseHandler('failed to send verification email', true)

          return ResponseHandler('verify-email-sent')
     } catch (error) {
          console.log(error)
          return ResponseHandler('critical error', true)
     }
}

export { reset }
