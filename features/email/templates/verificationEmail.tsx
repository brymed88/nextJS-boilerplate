import {
     Body,
     Button,
     Container,
     Head,
     Html,
     Preview,
     Section,
     Tailwind,
     Text,
} from '@react-email/components'
import EmailFooterTemplate from './_components/footer'
import EmailHeaderTemplate from './_components/header'

type VerifyEmailProps = {
     verifyLink: string
}

const VerificationEmail = ({ verifyLink }: VerifyEmailProps) => {
     const textStyles = 'text-base text-slate-800'

     return (
          <Html>
               <Head />
               <Tailwind>
                    <Preview>
                         {process.env.NEXT_PUBLIC_SITE_NAME || ''} Verify your
                         email
                    </Preview>
                    <Body className="bg-slate-100 py-4">
                         <Container className="rounded-md border-2 border-solid border-slate-200 bg-white p-8">
                              <EmailHeaderTemplate />
                              <Section className="py-4">
                                   <Text>Hello,</Text>
                                   <Text>
                                        Thank you for registering with{' '}
                                        {process.env.NEXT_PUBLIC_SITE_NAME}!
                                   </Text>
                                   <Text>
                                        Please verify your email with the link
                                        below.
                                   </Text>
                                   <Button
                                        className="font-bolder my-2 cursor-pointer rounded-sm bg-green-700 p-3 text-white"
                                        href={verifyLink}
                                   >
                                        Verify email
                                   </Button>

                                   <Text className="pt-2 text-sm italic text-red-800">
                                        Note: Verification link is only valid
                                        for 24 hours!
                                   </Text>
                              </Section>
                              <EmailFooterTemplate />
                         </Container>
                    </Body>
               </Tailwind>
          </Html>
     )
}

export default VerificationEmail
