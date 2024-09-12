'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ZodSchema } from 'zod'

type FormComponentProps<T> = {
     submitCallback: (data: T) => void
     zodSchema: T
     defaultValues: T
}

const HookFormComponent = ({
     children,
     zodSchema,
     defaultValues,
     submitCallback,
     ...props
}: PropsWithChildren &
     FormComponentProps<any> &
     React.FormHTMLAttributes<HTMLFormElement>) => {
     const methods = useForm<typeof zodSchema>({
          resolver: zodResolver(zodSchema),
          defaultValues: zodSchema,
     })
     const { isValid } = methods.formState

     const onSubmit = (data: ZodSchema) => isValid && submitCallback(data)

     return (
          <FormProvider {...methods}>
               <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
                    {children}
               </form>
          </FormProvider>
     )
}

export default HookFormComponent
