'use server'

import { ReactElement } from 'react'
import { Resend } from 'resend'
import { ResendEmailType } from '../types'

const resend = new Resend(process.env.RESEND_API_KEY)

export const SendEmail = async ({
     to,
     subject,
     bodyTemplate,
}: ResendEmailType) => {
     try {
          const { data, error } = await resend.emails.send({
               from: `${process.env.RESEND_FROM_EMAIL}`,
               to: to,
               subject: subject,
               react: bodyTemplate as ReactElement,
          })

          if (error) return Response.json({ error })

          return Response.json({ data })
     } catch (error) {
          return Response.json({ error })
     }
}
