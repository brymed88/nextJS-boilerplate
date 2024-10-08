import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs))
}

type DataMessageType = string | { id: string; msg: string }

type ResponseType = {
     hasError: boolean
     data: DataMessageType //TODO: may need to update later for additional return types and or generic return
}

export const ResponseHandler = (
     data: DataMessageType,
     error?: boolean
): ResponseType => {
     return { hasError: !!error, data: data }
}
