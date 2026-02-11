import { ListAppointments } from "./components/ListAppointments";
import { Sidebar } from "./components/Sidebar";

export function Home() {
  return (
    <main className="p-2 h-screen flex flex-col lg:flex-row gap-2 rounded-3">
      <Sidebar />
      <ListAppointments />
    </main>
  );
}
