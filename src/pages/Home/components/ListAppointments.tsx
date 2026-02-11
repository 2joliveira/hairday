import { useState } from "react";
import { Listcard } from "@/components/ListCard";
import { InputDate, Text } from "@/components/ui";
import { useAppointments } from "@/hooks/use-appointments";
import type { Appointment } from "@/models/appointment";

import CloudSun from "@/assets/icons/cloudSun.svg?react";

export function ListAppointments() {
  const [date, setDate] = useState(new Date());
  const { appointments } = useAppointments(date);

  const parsedAppointments = appointments.reduce<{
    morning: Appointment[];
    afternoon: Appointment[];
    night: Appointment[];
  }>(
    (acc, item) => {
      if (item.hour < 13) {
        acc.morning.push(item);
      } else if (item.hour < 19) {
        acc.afternoon.push(item);
      } else {
        acc.night.push(item);
      }

      return acc;
    },
    {
      morning: [],
      afternoon: [],
      night: [],
    },
  );

  return (
    <div className="flex-1 py-6 px-4 xl:px-20 2xl:px-40 lg:overflow-y-scroll">
      <header className="flex items-center justify-between gap-4 mb-8">
        <span>
          <Text as="h2" variant="title-lg" className="text-gray-100">
            Sua agenda
          </Text>

          <Text as="p" variant="text-sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </span>

        <InputDate value={date} onChange={setDate} size="sm" />
      </header>

      <main className="space-y-8">
        <Listcard
          items={parsedAppointments.morning}
          icon={CloudSun}
          title="Manhã"
          timeInterval="09h-12h"
        />

        <Listcard
          items={parsedAppointments.afternoon}
          icon={CloudSun}
          title="Tarde"
          timeInterval="09h-12h"
        />

        <Listcard
          items={parsedAppointments.night}
          icon={CloudSun}
          title="Noite"
          timeInterval="09h-12h"
        />
      </main>
    </div>
  );
}
