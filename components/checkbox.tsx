"use client"

import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function CheckBox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        <Link href="/">
        <h1 className="text-blue-300">forget password?</h1>
        </Link>

      </label>
    </div>
  )
}
