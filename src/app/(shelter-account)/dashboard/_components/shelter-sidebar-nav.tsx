"use client"
import SidebarNav from "@/components/layouts/sidebar-nav"
import { ScrollArea } from "@/components/ui/scroll-area"
import { shelterDashboardConfig } from "@/config/shelter-dashboard"
import { cn } from "@/lib/utils"

interface ShelterSidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}
export function ShelterSidebarNav({
  children,
  className,
  ...props
}: ShelterSidebarNavProps) {
  return (
    <aside className={cn("h-screen w-full", className)} {...props}>
      <div className="flex flex-col gap-2.5 px-4 pt-2 lg:px-6 lg:pt-4">
        {children}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] py-2.5 pr-6">
        <SidebarNav items={shelterDashboardConfig.sidebarNav} className="p-1 pt-4" />
      </ScrollArea>
    </aside>
  )
}

export default ShelterSidebarNav