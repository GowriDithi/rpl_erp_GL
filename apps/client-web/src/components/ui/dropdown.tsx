import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
  separator?: boolean
}

interface DropdownProps {
  options: DropdownOption[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  placeholder?: string
  label?: string
  multiple?: boolean
  disabled?: boolean
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export function Dropdown({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  label,
  multiple = false,
  disabled = false,
  className,
  variant = "outline"
}: DropdownProps) {
  const selectedValues = React.useMemo(() => {
    if (multiple) {
      return Array.isArray(value) ? value : []
    }
    return typeof value === "string" ? [value] : []
  }, [value, multiple])

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue]
      onValueChange?.(newValues)
    } else {
      onValueChange?.(optionValue)
    }
  }

  const displayValue = React.useMemo(() => {
    if (selectedValues.length === 0) return placeholder
    
    if (multiple) {
      if (selectedValues.length === 1) {
        const option = options.find((opt) => opt.value === selectedValues[0])
        return option?.label || selectedValues[0]
      }
      return `${selectedValues.length} selected`
    }
    
    const option = options.find((opt) => opt.value === selectedValues[0])
    return option?.label || selectedValues[0]
  }, [selectedValues, options, multiple, placeholder])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          className={cn("justify-between", className)}
          disabled={disabled}
        >
          <span className="truncate">{displayValue}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {label && (
          <>
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        
        {multiple ? (
          options.map((option, index) => (
            <React.Fragment key={option.value}>
              <DropdownMenuCheckboxItem
                checked={selectedValues.includes(option.value)}
                onCheckedChange={() => handleSelect(option.value)}
                disabled={option.disabled}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
              {option.separator && index < options.length - 1 && (
                <DropdownMenuSeparator />
              )}
            </React.Fragment>
          ))
        ) : (
          <DropdownMenuRadioGroup
            value={selectedValues[0] || ""}
            onValueChange={(val) => onValueChange?.(val)}
          >
            {options.map((option, index) => (
              <React.Fragment key={option.value}>
                <DropdownMenuRadioItem
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </DropdownMenuRadioItem>
                {option.separator && index < options.length - 1 && (
                  <DropdownMenuSeparator />
                )}
              </React.Fragment>
            ))}
          </DropdownMenuRadioGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}