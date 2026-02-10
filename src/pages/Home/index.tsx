import { Schedule } from "./components/Schedule";
import { ScheduleAppointment } from "./components/ScheduleAppointment";

export function Home() {
  return (
    <main className="p-2 h-screen flex gap-2 rounded-3">
      <ScheduleAppointment />
      <Schedule />
    </main>
  );
}
