import { Button, Section, Text } from '@react-email/components'
import EmailWrapper from './_components/emailWrapper'

type PasswordResetProps = {
     verifyLink?: string
}
const PasswordResetRequest = ({ verifyLink }: PasswordResetProps) => {
     const textStyles = 'text-base text-slate-800'
     return (
          <EmailWrapper>
               <Section className="py-4">
                    <Text className={textStyles}>Hello,</Text>
                    <Text
                         className={textStyles}
                    >{`We've received a request to reset your password.`}</Text>
                    <Text className={textStyles}>
                         {`If you didn't make the request, or initiated this request by accident, please ignore this message. Otherwise, you can reset your password below.`}
                    </Text>
                    <Text className="pt-2 text-sm italic text-red-800">
                         Note: Verification link is only valid for 24 hours!
                    </Text>
                    <Button
                         className="font-bolder my-4 cursor-pointer rounded-md bg-red-600 p-3 text-white"
                         href={verifyLink}
                    >
                         Reset your password
                    </Button>
               </Section>
          </EmailWrapper>
     )
}

export default PasswordResetRequest
