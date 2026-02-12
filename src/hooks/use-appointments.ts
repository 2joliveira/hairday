import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "@/models/appointment";

export function useAppointments(date?: Date) {
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);
  const currentDate = date ?? new Date();

  return {
    appointments: appointments.filter(
      (appointment) =>
        new Date(appointment.date).getDate() === currentDate.getDate() &&
        new Date(appointment.date).getMonth() === currentDate.getMonth(),
    ),
  };
}
