import { cva, type VariantProps } from "class-variance-authority"
import { Text } from "./text"

export const timeSelectVarianats = cva("min-w-[78.5px] h-10 rounded-lg", {
  variants: {
    variant: {
      primary: "bg-gray-600 border border-gray-500 hover:bg-gray-500 text-gray-200"
    },
    selected: {
      true: "border-yellow text-yellow",
    },
    disabled: {
      true: "bg-transparent border-gray-500 text-gray-500 hover:bg-transparent cursor-not-allowed",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "primary",
    selected: false,
    disabled: false,
  }
})

interface TimeSelectProps extends
  Omit<React.ComponentProps<"button">, "disabled">,
  VariantProps<typeof timeSelectVarianats> {}

export function TimeSelect({ className, selected, children, disabled, ...props }: TimeSelectProps) {
  return (
    <button {...props} className={timeSelectVarianats({ className, selected, disabled })}>
      <Text as="p">
        {children}
      </Text>
    </button>)
}