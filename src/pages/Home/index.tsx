import { ListAppointments } from "./components/ListAppointments";
import { Sidebar } from "./components/Sidebar";

import Logo from "@/assets/Logo.png";

export function Home() {
  return (
    <main className="p-2 h-full sm:h-screen flex flex-col lg:flex-row gap-2 rounded-3">
      <img className="absolute w-34.75 h-14" src={Logo} alt="Logo" />
      <Sidebar />
      <ListAppointments />
    </main>
  );
}
