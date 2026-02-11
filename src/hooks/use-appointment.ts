import { APPOINTMENTS_KEY, type Appointment } from "@/models/appointment";
import useLocalStorage from "use-local-storage";

export function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);

  function createAppointment(appointment: Appointment) {
    setAppointments([...appointments, appointment]);
  }

  return {
    createAppointment,
  };
}
