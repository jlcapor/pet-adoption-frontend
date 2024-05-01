"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { Check, ChevronsUpDown, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { CreateShelterDialog } from "../shelter/[shelterId]/_components/create-shelter-dialog";

interface ShelterSwitcherProps extends React.ComponentPropsWithoutRef<typeof PopoverTrigger> {
    userId: string
}

export default function ShelterSwitcher({ 
    userId, 
    className,
    ...props
}: ShelterSwitcherProps) {
  // const { shelterId } = useParams<{ shelterId: string }>()
  const [open, setOpen] = React.useState(false)

  return (
    <>
    {/* <CreateShelterDialog userId={userId}/> */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              aria-label="Select a shelter"
              className={cn("w-full justify-between", className)}
            >
                <CaretSortIcon
                    className="ml-auto size-3.5 shrink-0 opacity-50"
                    aria-hidden="true"
                />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">

        </PopoverContent>
      </Popover>
    </>
  )
}
