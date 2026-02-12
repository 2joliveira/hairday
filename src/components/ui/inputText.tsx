import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { Icon, iconVariants } from "./icon";

export const inputTextVariants = cva(
  `p-3 inline-flex justify-start items-center gap-2 outline-none`,
  {
    variants: {
      variant: {
        primary:
          "h-12 w-85 rounded-lg border border-gray-500 focus-within:border-yellow-dark text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface InputTextProps
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof inputTextVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function InputText({
  className,
  variant,
  icon,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextVariants({ className, variant })}>
      {icon && <Icon svg={icon} className={iconVariants({ size: "md" })} />}
      <input
        type="text"
        {...props}
        className={cx(textVariants(), "outline-none w-full h-full")}
      />
    </div>
  );
}
