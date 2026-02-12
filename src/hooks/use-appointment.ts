import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "@/models/appointment";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(
    APPOINTMENTS_KEY,
    [],
  );

  function createAppointment(appointment: Appointment) {
    setAppointments([...appointments, appointment]);
  }

  return {
    createAppointment,
  };
}
