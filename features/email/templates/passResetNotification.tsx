import {
     Body,
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

const PasswordResetNotification = () => {
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
                                   <Text className={textStyles}>Hello,</Text>
                                   <Text className={textStyles}>
                                        Your account password has been updated!
                                   </Text>
                                   <Text className={textStyles}>
                                        If you feel this was done in error,
                                        please reach out to support at the email
                                        below.
                                   </Text>
                              </Section>
                              <EmailFooterTemplate />
                         </Container>
                    </Body>
               </Tailwind>
          </Html>
     )
}

export default PasswordResetNotification
