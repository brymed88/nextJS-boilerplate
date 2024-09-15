'use server'

import { redirect } from '@/features/i18n/routing'
import { lucia } from '@/lib/lucia'
import { cookies } from 'next/headers'
import { getAuth } from '../queries/get-auth'

export const signOut = async () => {
     const { session } = await getAuth()

     if (!session) {
          redirect('/auth')
          return
     }

     await lucia.invalidateSession(session.id)

     const sessionCookie = lucia.createBlankSessionCookie()

     cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
     )

     redirect('/auth')
}
