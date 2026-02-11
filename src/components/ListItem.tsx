import { ButtonIcon, Text } from "./ui";

import TrashIcon from "@/assets/icons/trash.svg?react";

interface ListItemProps {
  hour: number;
  clientName: string;
}

export function ListItem({ hour, clientName }: ListItemProps) {
  return (
    <div className="h-8 flex items-center justify-between gap-5 text-gray-200">
      <Text variant="title-md">{hour}</Text>
      <Text variant="text-md" className="flex-1">{clientName}</Text>
      <ButtonIcon icon={TrashIcon} />
    </div>
  )
}