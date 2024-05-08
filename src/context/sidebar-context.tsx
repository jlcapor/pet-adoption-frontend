"use client"
import * as React from "react"

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  open: false,
  setOpen: () => {
    throw new Error("SidebarContext not initialized")
  },
})

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState(false)

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

