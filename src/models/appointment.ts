export const APPOINTMENTS_KEY = "appointments";

export interface Appointment {
  id: string;
  date: Date;
  hour: string;
  client_name: string;
}
