import { ListItem } from "./ListItem";
import { Icon, Text } from "./ui";
import { iconVariants } from "./ui/icon";

interface ListcardProps {
  icon: React.ComponentProps<typeof Icon>["svg"];
  title: string;
  timeInterval: string;
}

const mockitems = [
  { id: 0, hour: "09:00", clientName: "Livia Curtis" },
  { id: 1, hour: "09:00", clientName: "Livia Curtis" },
  { id: 2, hour: "09:00", clientName: "Livia Curtis" },
  { id: 3, hour: "09:00", clientName: "Livia Curtis" },
  { id: 4, hour: "09:00", clientName: "Livia Curtis" },
  { id: 5, hour: "09:00", clientName: "Livia Curtis" },
];

export function Listcard({ icon, title, timeInterval }: ListcardProps) {
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

      <main className="p-5 gap-1">
        {mockitems.map((item) => (
          <ListItem
            key={item.id}
            hour={item.hour}
            clientName={item.clientName}
          />
        ))}
      </main>
    </div>
  );
}
