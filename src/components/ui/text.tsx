import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans p-0 m-0", {
  variants: {
    variant: {
      "title-lg": "text-[32px] leading-6 font-bold",
      "title-md": "text-[16px] leading-6 font-bold",
      "title-sm": "text-sm leading-5 font-bold",
      "text-md": "text-[16px] leading-6 font-normal",
      "text-title-sm": "text-sm leading-5 font-normal",
    },
  },
  defaultVariants: {
    variant: "text-md",
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export function Text({ as = "span", variant, className, children, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children
  )
}
