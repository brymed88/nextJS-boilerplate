export type AuthDataType = {
     email: string
     password: string
     vPassword?: string
}

export type AuthSteps = 'login' | 'signup' | 'verify' | 'reset' | undefined

export const authStepTypes = ['login', 'signup', 'verify', 'reset']
