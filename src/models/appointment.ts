import z from "zod";

export const APPOINTMENTS_KEY = "appointments";

export const appointment = z.object({
  id: z.uuidv4(),
  date: z.date(),
  hour: z.number("Selecione um horário !"),
  client_name: z
    .string({ error: "Este campo é obrigatório." })
    .min(3, { error: "O nome precisa ter mais que 3 letras." }),
});

export type Appointment = z.infer<typeof appointment>;
