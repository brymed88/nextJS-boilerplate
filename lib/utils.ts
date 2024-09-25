import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs))
}

type ResponseType = {
     hasError: boolean
     data: string | { id: string; msg: string } //TODO: may need to update later for additional return types and or generic return
}

export const ResponseHandler = (
     data: string | { id: string; msg: string },
     error?: unknown
): ResponseType => {
     return { hasError: error ? true : false, data: data }
}
