import { Listcard } from "@/components/ListCard";
import { InputDate, Text } from "@/components/ui";

import CloudSun from "@/assets/icons/cloudSun.svg?react";

export function Schedule() {
  return (
    <div className="flex-1 py-6 px-4 xl:px-20 2xl:px-40 lg:overflow-y-scroll">
      <header className="flex items-center justify-between gap-4 mb-8">
        <span>
          <Text as="h2" variant="title-lg" className="text-gray-100">
            Sua agenda
          </Text>

          <Text as="p" variant="text-sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </span>

        <InputDate size="sm" />
      </header>

      <main className="space-y-8">
        <Listcard icon={CloudSun} title="Manhã" timeInterval="09h-12h" />

        <Listcard icon={CloudSun} title="Tarde" timeInterval="09h-12h" />

        <Listcard icon={CloudSun} title="Noite" timeInterval="09h-12h" />
      </main>
    </div>
  );
}
