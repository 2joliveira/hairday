import { hourToTime } from "@/utils/hourToTime";
import { ButtonIcon, Text } from "./ui";

import TrashIcon from "@/assets/icons/trash.svg?react";
import type { Appointment } from "@/models/appointment";
import { useAppointment } from "@/hooks/use-appointment";

interface ListItemProps {
  item: Appointment;
}

export function ListItem({ item }: ListItemProps) {
  const { id, hour, client_name } = item;
  const { deleteAppointement } = useAppointment();

  function removeAppointment() {
    deleteAppointement(id);
  }

  return (
    <div className="h-8 flex items-center justify-between gap-5 text-gray-200">
      <Text variant="title-md">{hourToTime(hour)}</Text>
      <Text variant="text-md" className="flex-1">
        {client_name}
      </Text>
      <ButtonIcon onClick={removeAppointment} icon={TrashIcon} />
    </div>
  );
}
