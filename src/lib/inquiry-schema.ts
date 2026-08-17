import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(200),
  tour: z.string().trim().max(200).optional(),
  date: z.string().trim().max(40).optional(),
  guests: z.coerce.number().int().min(1).max(99).optional(),
  hotel: z.string().trim().max(200).optional(),
  message: z.string().trim().max(5000).optional(),
  source: z.string().trim().max(80).optional(),
  website: z.string().max(0).optional(),
});

export type InquiryPayload = z.infer<typeof inquirySchema>;
