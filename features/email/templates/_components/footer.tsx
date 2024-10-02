import { Hr, Link, Text } from '@react-email/components'

export default function Footer() {
     return (
          <>
               <Hr className="my-3" />
               <Text className="text-base text-slate-800">
                    Best, <br />
                    {process.env.NEXT_PUBLIC_SITE_NAME} Team |{' '}
                    <Link
                         href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
                    >
                         {process.env.NEXT_PUBLIC_SUPPORT_EMAIL}
                    </Link>
               </Text>
          </>
     )
}
