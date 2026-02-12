import z from "zod";

import type { Icon } from "@/components/ui";
import SunHorizon from "@/assets/icons/sunHorizon.svg?react";
import CloudSun from "@/assets/icons/cloudSun.svg?react";
import MoonStars from "@/assets/icons/moonStars.svg?react";

export const APPOINTMENTS_KEY = "appointments";

export type PeriodKey = "morning" | "afternoon" | "night";

interface PeriodProps {
  period: string;
  range: string;
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export const PERIODS: Record<PeriodKey, PeriodProps> = {
  morning: { period: "Manhã", range: "09h-12h", icon: SunHorizon },
  afternoon: { period: "Tarde", range: "13h-18h", icon: CloudSun },
  night: { period: "Noite", range: "19h-21h", icon: MoonStars },
};

export const appointment = z.object({
  id: z.uuidv4(),
  date: z.date(),
  hour: z.number("Selecione um horário !"),
  client_name: z
    .string({ error: "Este campo é obrigatório." })
    .min(3, { error: "O nome precisa ter mais que 3 letras." }),
});

export type Appointment = z.infer<typeof appointment>;
