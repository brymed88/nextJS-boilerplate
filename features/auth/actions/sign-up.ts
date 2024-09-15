'use server'
import { redirect } from '@/features/i18n/routing'
import { lucia } from '@/lib/lucia'
import { generateId } from 'lucia'
import { cookies } from 'next/headers'
import { Argon2id } from 'oslo/password'
import { AuthDataType } from '../types'

const signUp = async (formData: AuthDataType) => {
     if (!formData.email || !formData.password || !formData.vPassword)
          throw new Error('invalid data')

     if (formData.password !== formData.vPassword)
          throw new Error('Passwords do not match')

     //TODO: add functionality for email verification
     try {
          const hashedPassword = await new Argon2id().hash(formData.password)
          const userId = generateId(15)

          await prisma?.user.create({
               data: {
                    id: userId,
                    email: formData.email,
                    password_hash: hashedPassword,
               },
          })

          const session = await lucia.createSession(userId, {
               email: formData.email,
          })
          const sessionCookie = lucia.createSessionCookie(session.id)

          cookies().set(
               sessionCookie.name,
               sessionCookie.value,
               sessionCookie.attributes
          )
     } catch (err) {
          console.log(err)
     }

     redirect('/dashboard')
}

export { signUp }
