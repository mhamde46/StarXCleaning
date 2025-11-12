"use server";

import { z } from "zod";

const formSchema = z.object({
  serviceType: z.string(),
  propertySize: z.string(),
  bookingDate: z.date(),
  bookingTime: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export async function submitBooking(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid data provided." };
  }

  // Here you would typically process the booking:
  // - Save to a database
  // - Send confirmation emails
  // - Integrate with Google Calendar, etc.
  
  console.log("New Booking Request:", parsed.data);

  // Simulate a successful submission
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true };
}
