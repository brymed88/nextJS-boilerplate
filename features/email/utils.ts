import { SendEmail } from './actions/sendEmail'
import PasswordResetNotification from './templates/passResetNotification'
import PasswordResetRequest from './templates/passResetRequest'
import VerificationEmail from './templates/verificationEmail'
import { genericEmailType, verifyEmailType } from './types'

export const SendVerifyEmail = async ({
     userEmail,
     verifyLink,
}: verifyEmailType) => {
     const email = await SendEmail({
          to: [userEmail],
          subject: 'New account verification',
          bodyTemplate: VerificationEmail({ verifyLink: verifyLink }),
     })

     if (!email) return null

     return true
}

export const SendResetEmail = async ({
     userEmail,
     verifyLink,
}: verifyEmailType) => {
     const email = await SendEmail({
          to: [userEmail],
          subject: 'Password reset request verification',
          bodyTemplate: PasswordResetRequest({ verifyLink: verifyLink }),
     })

     if (!email) return null

     return true
}

export const SendResetNotificationEmail = async ({
     userEmail,
}: genericEmailType) => {
     const email = await SendEmail({
          to: [userEmail],
          subject: 'Password reset request received',
          bodyTemplate: PasswordResetNotification(),
     })

     if (!email) return null

     return true
}
