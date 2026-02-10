import {
  Button,
  InputDate,
  InputText,
  Text,
  TimeSelect,
} from "@/components/ui";
import { hourToTime } from "@/utils/hourToTime";

import UserSquare from "@/assets/icons/userSquare.svg?react";

export function ScheduleAppointment() {
  return (
    <div className="h-full w-full lg:w-124.5 py-6 px-6 lg:px-18 flex flex-col items-start justify-between bg-gray-700 rounded-xl">
      <header className="mb-6 flex flex-col gap-1">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>
        
        <Text as="p" variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </header>

      <form className="space-y-8 mb-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Text as="p" className="text-gray-200">
            Data
          </Text>
          <InputDate />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Text as="p" className="text-gray-200">
            Horários
          </Text>

          <Text as="p" variant="text-sm" className="text-gray-300">
            Manhã
          </Text>
          <div className="flex flex-wrap gap-2">
            {[9, 10, 11, 12].map((time) => (
              <TimeSelect>{hourToTime(time)}</TimeSelect>
            ))}
          </div>

          <Text as="p" variant="text-sm" className="text-gray-300">
            Tarde
          </Text>
          <div className="flex flex-wrap gap-2">
            {[13, 14, 15, 16, 17, 18].map((time) => (
              <TimeSelect>{hourToTime(time)}</TimeSelect>
            ))}
          </div>

          <Text as="p" variant="text-sm" className="text-gray-300">
            Noite
          </Text>
          <div className="flex flex-wrap gap-2">
            {[19, 20, 21].map((time) => (
              <TimeSelect>{hourToTime(time)}</TimeSelect>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Text as="p" className="text-gray-200">
            Cliente
          </Text>
          <InputText icon={UserSquare} placeholder="Nome do cliente" className="w-full" />
        </div>
      </form>

      <Button className="w-full">AGENDAR</Button>
    </div>
  );
}
