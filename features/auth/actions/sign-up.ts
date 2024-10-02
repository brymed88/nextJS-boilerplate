'use server'
import { SendVerifyEmail } from '@/features/email/utils'
import { db } from '@/lib/db'
import { ResponseHandler } from '@/lib/utils'
import { generateIdFromEntropySize } from 'lucia'
import { createDate, TimeSpan } from 'oslo'
import { Argon2id } from 'oslo/password'
import z from 'zod'
import { AuthDataType } from '../types'

const emailSchema = z.string().email({ message: 'Invalid email' })

const signUp = async (formData: AuthDataType) => {
     console.log(formData)

     const { email, password, vPassword } = formData

     if (!email || !password || !vPassword || password !== vPassword)
          return ResponseHandler('credential mismatch', true)

     try {
          emailSchema.parse(email) //validate email address

          const existingUser = await db.user.findUnique({
               where: { email: email },
          })

          if (existingUser) return ResponseHandler('existing user', true)

          const hashedPassword = await new Argon2id().hash(password)
          const userId = generateIdFromEntropySize(10) // 16 chars long
          const tokenId = generateIdFromEntropySize(10) //16 chars long

          const createUser = await db.user.create({
               data: {
                    id: userId,
                    email: email,
                    password_hash: hashedPassword,
                    Verification_Token: {
                         create: {
                              id: tokenId,
                              expires_at: createDate(new TimeSpan(1, 'd')),
                         },
                    },
               },
          })

          if (!createUser) return ResponseHandler('failed to create user', true)

          const sendVerificationEmail = await SendVerifyEmail({
               userEmail: createUser.email,
               verifyLink: `${process.env.NEXT_PUBLIC_SITE_URL}/auth?step=verify&code=${tokenId}`,
          })

          if (!sendVerificationEmail)
               return ResponseHandler('failed to send verification email', true)

          return ResponseHandler('success')
     } catch (err) {
          console.log(err)
          return ResponseHandler('critical error', true)
     }
}

export { signUp }
