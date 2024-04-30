import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DropDown() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Type of Pharmacy" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          <SelectItem value="apple">small-scale pharmacy</SelectItem>
          <SelectItem value="banana">large-scale pharmacy</SelectItem>
          <SelectItem value="blueberry">co-opperative pharmacy</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
