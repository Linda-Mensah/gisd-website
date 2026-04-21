import { z } from "zod";

export const applyFormSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    townCity: z.string().min(2, "Town/City is required"),
    region: z.string().min(1, "Please select a region"),
    country: z.string().min(2, "Country is required"),
    phone: z.string().min(8, "Valid phone number required"),
    email: z.string().email("Valid email address required"),
    confirmEmail: z.string().email("Valid email address required"),
    selectedCourses: z
      .array(z.string())
      .min(1, "Please select at least one course"),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails don't match",
    path: ["confirmEmail"],
  });

export type ApplyFormData = z.infer<typeof applyFormSchema>;
