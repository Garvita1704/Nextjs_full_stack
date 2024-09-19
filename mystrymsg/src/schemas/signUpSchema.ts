import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2,"Username mjust be atleast 2 charaters")
.max(20, "Username must be at most 20 characters")
.regex(/^[a-zA-Z0-9_]+$/ ,"Username must not contain any special characters")


export const signUpSchema = z.object ({
  username : usernameValidation,
  email : z.string().email({message:"Invalid email"}),
    password : z.string().min(8,{ message: "Password must be at least 8 characters"}),

})