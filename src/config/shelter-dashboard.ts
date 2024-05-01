import { Icons } from "@/components/icons"
import { type SidebarNavItem } from "@/types"

export const shelterDashboardConfig = {
    sidebarNav: [
       {
        title: "Refugio",
        href: "/dashboard/shelter",
        icon: Icons.shelter,
        items: [],
       },
       
    ] satisfies SidebarNavItem[],
}