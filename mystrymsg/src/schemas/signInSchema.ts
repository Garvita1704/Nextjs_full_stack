import { identifierToKeywordKind } from "typescript"
import {z} from "zod"

export const signInSchema = z.object({
  identifier : z.string(),
  password : z.string()
})