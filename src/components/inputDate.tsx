import { useRef, useState } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority"
import DatePicker from "react-datepicker";
import { ptBR } from "date-fns/locale"
import "react-datepicker/dist/react-datepicker.css";
import CalendarBlank from "@/assets/icons/calendarBlank.svg?react"
import CaretDown from "@/assets/icons/caretDown.svg?react"
import { textVariants } from "./text"
import { Icon } from "./icon"

export const inputDateVariants = cva(
  "relative p-3 flex items-center justify-start gap-2 rounded-lg bg-transparent",
  {
    variants: {
      variant: {
        primary: "text-gray-200 border border-gray-500 focus-within:border-yellow-dark"
      },
      size: {
        sm: "w-38 h-12",
        lg: "w-full h-12"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    }
  }
)

interface InputDateProps extends VariantProps<typeof inputDateVariants> {}

export function InputDate({ variant, size }: InputDateProps) {
  const datePickerRef = useRef<DatePicker | null>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={inputDateVariants({ variant, size })}
      onClick={() => datePickerRef.current?.setOpen(true)}
    >
      <Icon svg={CalendarBlank} size="sm" />

      <DatePicker
        ref={datePickerRef}
        className={cx(textVariants({ variant: "text-md" }), "w-20 outline-none")}
        selected={startDate}
        onChange={(date: Date | null) => date && setStartDate(date)}
        locale={ptBR}
        dateFormat="dd-MM-yyyy"
        onCalendarOpen={() => setIsOpen(true)}
        onCalendarClose={() => setIsOpen(false)}
        onKeyDown={(e) => e.preventDefault()}
        minDate={(new Date())}
        disabledKeyboardNavigation
      />

      <Icon
        svg={CaretDown}
        size="sm"
        variant="terciary"
        className={
          cx("absolute right-3 top-3.5 transition-transform duration-300", isOpen && "rotate-180")
        }
      />
    </div>
  )
}