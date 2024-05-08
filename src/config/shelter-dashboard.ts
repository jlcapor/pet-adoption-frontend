import { Icons } from "@/components/icons"
import { type SidebarNavItem } from "@/types"

export const shelterDashboardConfig = {
    sidebarNav: [
       {
        title: "Perfil",
        href: "/dashboard/profile",
        icon: Icons.user,
        items: [],
       },
       {
        title: "Mascotas",
        href: "/dashboard/pets",
        icon: Icons.pawPrint,
        items: [],
       },
       
    ] satisfies SidebarNavItem[],
}