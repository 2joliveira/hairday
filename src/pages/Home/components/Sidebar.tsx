import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidV4 } from "uuid";
import { useAppointments } from "@/hooks/use-appointments";
import { useAppointment } from "@/hooks/use-appointment";
import {
  Button,
  InputDate,
  InputText,
  Text,
  TimeSelect,
} from "@/components/ui";
import { Error } from "@/components/Error";
import { hourToTime } from "@/utils/hourToTime";
import {
  appointment,
  PERIODS,
  type Appointment,
  type PeriodKey,
} from "@/models/appointment";
import UserSquare from "@/assets/icons/userSquare.svg?react";

export function Sidebar() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(appointment),
    defaultValues: {
      id: uuidV4(),
      date: new Date(),
      client_name: "",
    },
  });
  const { appointments } = useAppointments(new Date(watch("date")));
  const { createAppointment } = useAppointment();

  const onSubmit: SubmitHandler<Appointment> = (data) => {
    createAppointment(data);
    reset({
      id: uuidV4(),
      date: new Date(),
      client_name: "",
    });
  };

  const periods: Record<PeriodKey, number[]> = {
    morning: [9, 10, 11, 12],
    afternoon: [13, 14, 15, 16, 17, 18],
    night: [19, 20, 21],
  };

  return (
    <div className="h-full w-full lg:w-124.5 pt-20 pb-6 px-6 lg:px-18 flex flex-col items-start justify-between bg-gray-700 rounded-xl">
      <header className="mb-6 flex flex-col gap-1">
        <Text as="h2" variant="title-lg" className="text-gray-100">
          Agende um atendimento
        </Text>

        <Text as="p" variant="text-sm" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Text as="p" className="text-gray-200">
            Data
          </Text>
          <Controller
            control={control}
            name="date"
            render={({ field: { value, onChange } }) => (
              <InputDate
                value={new Date(value)}
                onChange={onChange}
                minDate={new Date()}
              />
            )}
          />
        </div>

        <div className="relative flex flex-col gap-4">
          <Controller
            control={control}
            name="hour"
            render={({ field: { value, onChange } }) => (
              <div>
                {(Object.keys(periods) as PeriodKey[]).map((label) => {
                  const hours = periods[label];

                  return (
                    <div key={label} className="flex flex-col gap-2">
                      <p className="text-sm text-gray-300">{PERIODS[label].period}</p>

                      <div className="flex flex-wrap gap-2">
                        {hours.map((hour) => {
                          const formatted = hourToTime(hour);

                          return (
                            <TimeSelect
                              key={hour}
                              type="button"
                              selected={value === hour}
                              onClick={() => onChange(hour)}
                              disabled={appointments.some(
                                (appointment) => appointment.hour === hour,
                              )}
                            >
                              {formatted}
                            </TimeSelect>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          />
          {errors.hour?.message && <Error error={errors.hour.message} />}
        </div>

        <div className="relative flex flex-col gap-2 w-full">
          <Text as="p" className="text-gray-200">
            Cliente
          </Text>
          <Controller
            control={control}
            name="client_name"
            render={({ field: { value, onChange } }) => (
              <InputText
                icon={UserSquare}
                placeholder="Nome do cliente"
                className="w-full"
                value={value}
                onChange={onChange}
              />
            )}
          />
          {errors.client_name?.message && (
            <Error error={errors.client_name.message} />
          )}
        </div>

        <Button type="submit" className="w-full">
          AGENDAR
        </Button>
      </form>
    </div>
  );
}
