'use server'
import { SignUpData } from "../types"


const signUp = async (formData: SignUpData) => {
     if (formData.password !== formData.vPassword) {
          throw new Error('Passwords do not match')
     }

     // TODO: add validation yourself

     // TODO: implement sign up logic
     // we will do this later
     console.log(formData)

     return { status: 200 }
}

export { signUp }
