import { Listcard } from "@/components/ListCard";
import { InputDate, Text } from "@/components/ui";

import CloudSun from "@/assets/icons/cloudSun.svg?react";

export function Schedule() {
  return (
    <div className="flex-1 py-6 px-40">
      <header className="flex items-center justify-between">
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

      <main>
        <Listcard icon={CloudSun} title="Manhã" timeInterval="09h-12h" />
      </main>
    </div>
  );
}
