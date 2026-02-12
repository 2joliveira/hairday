import type { Appointment } from "@/models/appointment";
import { ListItem } from "./ListItem";
import { Icon, Text } from "./ui";
import { iconVariants } from "./ui/icon";

interface ListcardProps {
  icon: React.ComponentProps<typeof Icon>["svg"];
  title: string;
  timeInterval: string;
  items: Appointment[];
}

export function Listcard({ icon, title, timeInterval, items }: ListcardProps) {
  return (
    <div className="border border-gray-600 rounded-lg">
      <header className="px-5 py-3 flex items-center justify-between gap-3 border-b border-b-gray-600">
        <Icon size="md" svg={icon} className={iconVariants({})} />

        <Text as="p" variant="text-sm" className="flex-1 text-gray-300 pt-1">
          {title}
        </Text>

        <Text as="p" variant="text-sm" className="text-gray-400 pt-1">
          {timeInterval}
        </Text>
      </header>

      {items.length < 1 ? (
        <Text
          as="p"
          variant="text-sm"
          className="h-8 p-2 w-full text-center text-gray-500"
        >
          {`Não há agendamentos no período da ${title} !`}{" "}
        </Text>
      ) : (
        <main className="p-5 gap-1">
          {items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
            />
          ))}
        </main>
      )}
    </div>
  );
}
