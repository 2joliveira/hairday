import { Button, ButtonIcon, Icon, InputDate, InputText, Text, TimeSelect } from "@/components/ui";
import TrashIcon from "@/assets/icons/trash.svg?react";
import SpinnerIcon from "@/assets/icons/spinner.svg?react";
import UserSquareIcon from "@/assets/icons/userSquare.svg?react";

export default function App() {
  return (
    <div className="p-20 grid gap-3">
      <Text variant="title-lg" className="text-gray-100">Teste</Text>

      <Icon svg={TrashIcon} size="md" variant="primary" />
      <Icon svg={SpinnerIcon} animate size="sm" variant="secondary" />

      <ButtonIcon icon={TrashIcon} />

      <Button>TESTE</Button>

      <InputText icon={UserSquareIcon} placeholder="Nome do Cliente" />

      <InputDate size="sm" />

      <TimeSelect>9:00</TimeSelect>
      <TimeSelect selected>9:00</TimeSelect>
      <TimeSelect disabled>9:00</TimeSelect>

    </div>
  )
}
