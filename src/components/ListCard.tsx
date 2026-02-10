import { Icon, Text } from "./ui";
import { iconVariants } from "./ui/icon";

interface ListcardProps {
  icon: React.ComponentProps<typeof Icon>["svg"];
  title: string;
  timeInterval: string;
}

export function Listcard({ icon, title, timeInterval }: ListcardProps) {
  return (
    <div className="mt-8 border border-gray-600 rounded-lg">
      <header className="px-3 py-5 flex items-center border-b-gray-600 justify-between">
        <span className="flex gap-2 items-center justify-center">
          <Icon size="md" svg={icon} className={iconVariants({})} />
          <Text as="p" variant="text-sm" className="text-gray-300 pt-1">{title}</Text>
        </span>

        <Text as="p" variant="text-sm" className="text-gray-400 pt-1">{timeInterval}</Text>
      </header>

      <main>
        
      </main>
    </div>
  );
}
