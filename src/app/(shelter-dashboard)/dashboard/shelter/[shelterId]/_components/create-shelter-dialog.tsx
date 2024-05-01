"use client"


import { Dialog } from "@/components/ui/dialog"

interface CreateShelterDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  userId: string
  showTrigger?: boolean
}

export function CreateShelterDialog({userId}: CreateShelterDialogProps){
    return (
        <Dialog>

        </Dialog>
    )
}