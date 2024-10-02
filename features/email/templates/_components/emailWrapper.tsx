import { Body, Container, Head, Html, Tailwind } from '@react-email/components'

import { PropsWithChildren } from 'react'
import Footer from './footer'
import Header from './header'

export default function EmailWrapper({ children }: PropsWithChildren) {
     return (
          <Html>
               <Head />
               <Tailwind>
                    <Body className="bg-slate-100 py-4">
                         <Container className="rounded-md border-2 border-solid border-slate-200 bg-white p-8">
                              <Header />
                              {children}
                              <Footer />
                         </Container>
                    </Body>
               </Tailwind>
          </Html>
     )
}
