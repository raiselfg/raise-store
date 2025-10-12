// app/products/components/filter-checkbox.tsx
"use client";

import { Checkbox } from "@/shared/components/ui/checkbox";

interface FilterCheckboxProps {
  id: string;
  label: string;
  type: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function FilterCheckbox({
  id,
  label,
  checked,
  onCheckedChange,
  disabled,
}: FilterCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={`text-sm font-medium leading-none ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
