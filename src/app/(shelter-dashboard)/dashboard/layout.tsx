
import { getSession } from "@/lib/session"
import ShelterHeader from "./_components/shelter-header"
import { redirect } from "next/navigation"
import SiteFooter from "@/components/layouts/site-footer"
import ShelterSidebarNav from "./_components/shelter-sidebar"
import { ShelterSidebarSheet } from "./_components/shelter-sidebar-sheet"
import { SidebarProvider } from "@/context/sidebar-context"
import ShelterSwitcher from "./_components/shelter-switcher"



interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({children}: DashboardLayoutProps) {
  const session = await getSession()
  if (!session) {
    redirect("/login")
  }
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <ShelterHeader session={session}>
            <ShelterSidebarSheet className="lg:hidden">
              <ShelterSidebarNav className="pl-4">
                <ShelterSwitcher userId={session.user.id}/>
              </ShelterSidebarNav>
            </ShelterSidebarSheet>
        </ShelterHeader>
        <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <ShelterSidebarNav className="top-[calc(theme('spacing.16')_+_0.1rem)] z-30 hidden border-r lg:sticky lg:block">
            <ShelterSwitcher userId={session.user.id}/>
          </ShelterSidebarNav>
          <main className="flex w-full flex-col overflow-hidden">
            {children}
          </main>
        </div>
        <SiteFooter />
      </div>
    </SidebarProvider>
  )
}
  


