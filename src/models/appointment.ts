import z from "zod";

export const APPOINTMENTS_KEY = "appointments";

export const appointment = z.object({
  id: z.uuidv4(),
  date: z.date(),
  hour: z.number(),
  client_name: z.string(),
})

export type Appointment = z.infer<typeof appointment>
