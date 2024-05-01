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
    <aside className={cn("w-full", className)} {...props}>
      <div className="pr-6 pt-4 lg:pt-6">
        {children}
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)] py-2.5 pr-6">
        <SidebarNav items={shelterDashboardConfig.sidebarNav} className="p-1 pt-4" />
      </ScrollArea>
    </aside>
  )
}

export default ShelterSidebarNav
