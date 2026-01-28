import { Icon, Text } from "./components";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";

export default function App() {
  return (
    <div className="grid gap-3">
      <Text variant="title-lg" className="text-gray-100">Teste</Text>

      <Icon svg={TrashIcon} size="md" variant="primary" />
      <Icon svg={SpinnerIcon} animate size="sm" variant="secondary" />
    </div>
  )
}
