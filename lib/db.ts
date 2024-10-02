import { PrismaClient } from '@prisma/client'

declare global {
     // eslint-disable-next-line no-var
     var prisma: ReturnType<typeof prismaClientSingleton> | undefined
}

const prismaClientSingleton = () => {
     return new PrismaClient()
}

export const db = global.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') global.prisma = db
