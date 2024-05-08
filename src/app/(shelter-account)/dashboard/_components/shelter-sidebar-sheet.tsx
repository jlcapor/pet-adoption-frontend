'use client'

import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"
import { Button, ButtonProps } from "@/components/ui/button"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { useSidebar } from "@/hooks/use-sidebar"
import { useMediaQuery } from "@/hooks/use-media-query"

export interface ShelterSidebarSheetProps extends ButtonProps {
  children: React.ReactNode
}

export  function ShelterSidebarSheet({
  children,
  className,
  ...props }: ShelterSidebarSheetProps) {
  const { open, setOpen } = useSidebar()
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  if (isDesktop) return null
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
           variant="ghost"
           size="icon"
           className={cn(
             "size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden",
             className
           )}
           {...props}
        >
          <Icons.menu aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0 pt-9">
        <div className="w-full px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <Icons.pawPrint className="mr-2 size-8" aria-hidden="true" />
            <span className="text-xl font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
          </Link>
        </div>
        {children}
      </SheetContent>
    </Sheet>
  )
}