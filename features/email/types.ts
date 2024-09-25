import { ReactElement } from 'react'

export type ResendEmailType = {
     to: string[]
     subject: string
     bodyTemplate: ReactElement
}

export type verifyEmailType = {
     userEmail: string
     verifyLink: string
}

export type genericEmailType = {
     userEmail: string
}
