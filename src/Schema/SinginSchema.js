import { z } from "zod";

export const SinginSchema = z.object({
  username:z.string(),
  password:z.string()
})