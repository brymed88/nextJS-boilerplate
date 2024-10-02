import { Section, Text } from '@react-email/components'
import EmailWrapper from './_components/emailWrapper'

const PasswordResetNotification = () => {
     const textStyles = 'text-base text-slate-800'
     return (
          <EmailWrapper>
               <Section className="py-4">
                    <Text className={textStyles}>Hello,</Text>
                    <Text className={textStyles}>
                         Your account password has been updated!
                    </Text>
                    <Text className={textStyles}>
                         If you feel this was done in error, please reach out to
                         support at the email below.
                    </Text>
               </Section>
          </EmailWrapper>
     )
}

export default PasswordResetNotification
