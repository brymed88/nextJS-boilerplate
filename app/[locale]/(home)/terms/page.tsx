import { generateMeta } from '@/lib/generateMeta'

export const generateMetadata = async () => await generateMeta('terms')

const TermsPage = () => {
     const headerStyles = 'font-bold mt-4 text-lg'

     return (
          <section className="flex w-full flex-col items-center justify-center py-12">
               <p>Terms and conditions page</p>
               <p>Add translations and build out the page</p>
          </section>
     )
}

export default TermsPage