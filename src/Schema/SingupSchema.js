import { z } from "zod";

export const usernameValidation = z.string()
.min(4, "username must have at least 4 words")
.max(20, "username under the 20 letter")
.regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const singUpSchema = z.object({
  username: usernameValidation ,
  email: z.string
  .email({message: "invalid email" }),
  password:z.string
  .min(6, "password should have 6 character must")
  .max(12, "password is not more than 12 digits")
 
})