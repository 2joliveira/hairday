import { APPOINTMENTS_KEY, type Appointment } from "@/models/appointment";
import useLocalStorage from "use-local-storage";

export function useAppointments(date?: Date) {
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);
  const currentDate = date ?? new Date();

  return {
    appointments: appointments.filter(
      (appointment) => appointment.date === currentDate,
    ),
  };
}
