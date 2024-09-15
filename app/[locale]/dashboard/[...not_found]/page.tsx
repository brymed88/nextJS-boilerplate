import { Ghost } from 'lucide-react'

//TODO:add translations
const NotFoundDashboard = () => {
     return (
          <section className="absolute top-[30%] flex flex-col items-center justify-center gap-4 text-slate-200">
               <Ghost size={140} className="stroke-slate-200" />
               <p className="text-8xl">404</p>
               <h1 className="text-3xl">Page not found</h1>
          </section>
     )
}

export default NotFoundDashboard
