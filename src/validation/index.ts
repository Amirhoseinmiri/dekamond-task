import { z } from "zod";

export const phoneNumberSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number should be at least 10 digits")
    .max(11, "Phone number should not exceed 10 digits")
    .regex(/^[0-9]+$/, "Phone number should only contain numbers"),
});
