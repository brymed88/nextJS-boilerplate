'use server'

import { SendResetNotificationEmail } from '@/features/email/resend'
import { db } from '@/lib/db'
import { ResponseHandler } from '@/lib/utils'
import { Argon2id } from 'oslo/password'
import { AuthDataType } from '../types'

const resetPassword = async (formData: AuthDataType) => {
     const { userId, password, vPassword } = formData

     if (!userId || !password || password !== vPassword)
          return ResponseHandler('invalid data', true)

     console.log(userId, password)
     try {
          const user = await db.user.findUnique({
               where: { id: userId },
          })

          if (!user) return ResponseHandler('invalid user', true)

          const hashedPassword = await new Argon2id().hash(password)

          const updateUser = await db.user.update({
               where: { id: user.id },
               data: {
                    password_hash: hashedPassword,
               },
          })
          //TODO: add new table for account related logging such as changing password etc..

          if (!updateUser)
               return ResponseHandler('failed to update user password', true)

          const sendVerificationEmail = await SendResetNotificationEmail({
               userEmail: updateUser.email,
          })

          if (!sendVerificationEmail)
               return ResponseHandler('failed to send verification email', true)

          return ResponseHandler('email-sent')
     } catch (error) {
          console.log(error)
          return ResponseHandler('critical error', true)
     }
}

export { resetPassword }
