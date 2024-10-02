import { Button, Section, Text } from '@react-email/components'
import EmailWrapper from './_components/emailWrapper'

type VerifyEmailProps = {
     verifyLink: string
}

const VerificationEmail = ({ verifyLink }: VerifyEmailProps) => {
     return (
          <EmailWrapper>
               <Section className="py-4">
                    <Text>Hello,</Text>
                    <Text>
                         Thank you for registering with{' '}
                         {process.env.NEXT_PUBLIC_SITE_NAME}!
                    </Text>
                    <Text>Please verify your email with the link below.</Text>
                    <Button
                         className="font-bolder my-2 cursor-pointer rounded-sm bg-green-700 p-3 text-white"
                         href={verifyLink}
                    >
                         Verify email
                    </Button>

                    <Text className="pt-2 text-sm italic text-red-800">
                         Note: Verification link is only valid for 24 hours!
                    </Text>
               </Section>
          </EmailWrapper>
     )
}

export default VerificationEmail
