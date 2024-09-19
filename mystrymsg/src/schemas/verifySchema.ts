import {z} from "zod"

export const verifySchema = z.object({
  code : z.string().length(6,'Verification code mst be 6 digits')
})