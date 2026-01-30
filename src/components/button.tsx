import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "./text"

export const buttonVariants = cva("flex justify-center items-center", {
  variants: {
    variant: {
      primary: "h-14 w-85 rounded-lg text-gray-900 bg-yellow hover:border-2 hover:border-yellow-light",
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

interface ButtonProps extends
  Omit<React.ComponentProps<"button">, "disabled">,
  VariantProps<typeof buttonVariants> { }

export function Button({ variant, disabled, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={
        cx(buttonVariants({ variant, disabled, className }), textVariants({ variant: "title-sm" }))
      }
      {...props}
    >
      {children}
    </button>
  )
}