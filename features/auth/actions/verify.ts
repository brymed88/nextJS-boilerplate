'use server'
import { db } from '@/lib/db'
import { ResponseHandler } from '@/lib/utils'
import { createDate, isWithinExpirationDate, TimeSpan } from 'oslo'

const verify = async (verifyCode: string, type?: string | undefined) => {
     if (!verifyCode) return ResponseHandler('invalid verification code', true)

     try {
          const userVerification = await db.verification_Token.findUnique({
               where: { id: verifyCode },
          })

          if (!userVerification)
               return ResponseHandler('invalid verification code', true)

          if (!isWithinExpirationDate(userVerification.expires_at))
               return ResponseHandler('verification code expired', true)

          //Remove token after verification
          await db.verification_Token.delete({
               where: { id: verifyCode },
          })

          if (type === 'reset')
               return ResponseHandler(
                    { id: userVerification.userId, msg: 'success' },
                    false
               )

          const updateUser = await db.user.update({
               where: { id: userVerification.userId },
               data: {
                    verified: createDate(new TimeSpan(0, 'd')),
               },
          })

          if (!updateUser)
               return ResponseHandler('error updating user verified', true)

          return ResponseHandler('success', false)
     } catch (err) {
          console.log(err)
          return ResponseHandler('critical error', true)
     }
}
export { verify }
