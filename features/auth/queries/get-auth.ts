import { cookies } from 'next/headers'
import { cache } from 'react'

import { lucia } from '@/lib/lucia'
import type { Session, User } from 'lucia'

export const getAuth = cache(
     async (): Promise<
          { user: User; session: Session } | { user: null; session: null }
     > => {
          const sessionId =
               cookies().get(lucia.sessionCookieName)?.value ?? null
          if (!sessionId) {
               return {
                    user: null,
                    session: null,
               }
          }

          const result = await lucia.validateSession(sessionId)
          console.log(result)
          try {
               if (result.session && result.session.fresh) {
                    const sessionCookie = lucia.createSessionCookie(
                         result.session.id
                    )
                    cookies().set(
                         sessionCookie.name,
                         sessionCookie.value,
                         sessionCookie.attributes
                    )
               }
               if (!result.session) {
                    const sessionCookie = lucia.createBlankSessionCookie()
                    cookies().set(
                         sessionCookie.name,
                         sessionCookie.value,
                         sessionCookie.attributes
                    )
               }
          } catch (e) {
               console.log(e)
          }
          return result
     }
)
