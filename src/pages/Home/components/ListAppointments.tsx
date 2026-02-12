import { useState } from "react";
import { useAppointments } from "@/hooks/use-appointments";
import { Listcard } from "@/components/ListCard";
import { InputDate, Text } from "@/components/ui";
import {
  PERIODS,
  type Appointment,
  type PeriodKey,
} from "@/models/appointment";

export function ListAppointments() {
  const [date, setDate] = useState(new Date());
  const { appointments } = useAppointments(date);

  const parsedAppointments: Record<PeriodKey, Appointment[]> =
    appointments.reduce<{
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
        {(Object.keys(PERIODS) as PeriodKey[]).map((key) => {
          const { period, range, icon } = PERIODS[key];
          return (
            <Listcard
              key={key}
              items={parsedAppointments[key]}
              icon={icon}
              title={period}
              timeInterval={range}
            />
          );
        })}
      </main>
    </div>
  );
}
