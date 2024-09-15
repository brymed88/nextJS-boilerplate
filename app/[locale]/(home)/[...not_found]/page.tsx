import { Ghost } from 'lucide-react'
//TODO:add translations
const NotFound = () => {
     return (
          <section className="flex min-h-full flex-col items-center justify-center gap-4 py-40 text-slate-400">
               <Ghost size={140} className="stroke-red-400" />
               <p className="text-8xl">404</p>
               <h1 className="text-3xl">Page not found</h1>
          </section>
     )
}
export default NotFound
