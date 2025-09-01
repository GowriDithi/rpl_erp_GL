import * as React from "react"
import PhoneInput, { Country } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface PhoneNumberProps {
  value?: string
  onChange?: (value: string | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  defaultCountry?: Country
}

export function PhoneNumber({
  value,
  onChange,
  placeholder = "Enter phone number",
  disabled = false,
  className,
  defaultCountry = "US"
}: PhoneNumberProps) {
  return (
    <div className={cn("relative", className)}>
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        inputComponent={Input}
        numberInputProps={{
          className: "border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        }}
      />
    </div>
  )
}