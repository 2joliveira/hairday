import { cva, type VariantProps } from "class-variance-authority"
import { Icon } from "./icon"

export const buttonIcoVariants = cva(
  `cursor-pointer inline-flex justify-center items-center transition group`,
  {
    variants: {
      variant: {
        primary: "bg-transparent hover:bg-gray-500",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    }
  }
)

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-yellow hover:fill-yellow-dark",
    },
    size: {
      sm: "w-4 h-4",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

interface ButtonIconProps
  extends Omit<React.ComponentProps<"button">, "size">, VariantProps<typeof buttonIcoVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  className?: string;
}

export function ButtonIcon({ variant, size, icon, className, ...props }: ButtonIconProps) {
  return <button className={buttonIcoVariants({ variant, size, className })} {...props}>
    <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
  </button>
}