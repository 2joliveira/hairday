import Dismiss from "@/assets/icons/dismiss.svg?react";
import { Icon, Text } from "./ui";

interface ErrorProps {
  error: string;
}

export function Error({ error }: ErrorProps) {
  return (
    <div className="absolute -bottom-5 text-red flex items-center justify-center gap-1">
      <Icon variant="danger" size="xs" svg={Dismiss} />

      <Text as="p" variant="text-xs" className="pt-0.5">
        {error}
      </Text>
    </div>
  );
}
