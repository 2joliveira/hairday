import { cva, type VariantProps } from "class-variance-authority"
import { Text } from "./text"

export const buttonVariants = cva("inline-flex justify-center items-center", {
  variants: {
    variant: {
      primary: "h-14 w-85 rounded-lg bg-yellow hover:border-2 hover:border-yellow-light",
    },
    disabled: {
      false: "cursor-pointer",
      true: "bg-yellow-dark cursor-not-allowed hover:border-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  }
})

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
})

interface ButtonProps extends
  Omit<React.ComponentProps<"button">, "disabled">,
  VariantProps<typeof buttonVariants> { }

export function Button({ variant, disabled, children, className, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, disabled, className })} {...props}>
      <Text variant="title-sm" className={buttonTextVariants({ variant })}>{children}</Text>
    </button>
  )
}