import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow",
      secondary: "fill-yellow-dark",
      terciary: "fill-gray-400",
      danger: "fill-red",
    },
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
    },
    animate: {
      true: "animate-spin",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    animate: false,
  },
});

interface IconProps
  extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
  variant,
  svg: SVGComponent,
  animate,
  className,
  size,
  ...props
}: IconProps) {
  return (
    <SVGComponent
      className={iconVariants({ variant, animate, className, size })}
      {...props}
    />
  );
}
