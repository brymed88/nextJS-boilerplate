'use server'

import { db } from '@/lib/db'
import { lucia } from '@/lib/lucia'
import { cookies } from 'next/headers'
import { redirect } from '@/features/i18n/routing'
import { Argon2id } from 'oslo/password'
import { AuthDataType } from '../types'

const signIn = async (formData: AuthDataType) => {
     if (!formData.email || !formData.password) throw new Error('invalid data')

     try {
          const user = await db.user.findUnique({
               where: { email: formData.email },
          })

          if (!user) {
               throw new Error('Incorrect email or password')
          }

          const validPassword = await new Argon2id().verify(
               user.password_hash,
               formData.password
          )

          if (!validPassword) {
               throw new Error('Incorrect email or password')
          }

          const session = await lucia.createSession(user.id, {})

          const sessionCookie = lucia.createSessionCookie(session.id)

          cookies().set(
               sessionCookie.name,
               sessionCookie.value,
               sessionCookie.attributes
          )
     } catch (error) {
          console.log(error)
     }

     redirect('/dashboard')
}

export { signIn }
