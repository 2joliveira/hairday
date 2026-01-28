import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    variant: { 
      primary: "fill-yellow",
      secondary: "fill-yellow-dark",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
    },
    animate: {
      false: "",
      true: 'animate-spin',
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    animate: false,
  }
})

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ svg: SVGComponent, animate, className, ...props }: IconProps) {
  return <SVGComponent className={iconVariants({ animate, className })} {...props} />
}