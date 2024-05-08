
import ShelterHeader from "./_components/shelter-header"
import { redirect } from "next/navigation"
import SiteFooter from "@/components/layouts/site-footer"
import ShelterSidebarNav from "./_components/shelter-sidebar-nav"
import { ShelterSidebarSheet } from "./_components/shelter-sidebar-sheet"
import { SidebarProvider } from "@/context/sidebar-context"
import getCurrentUser from "@/lib/actions/getCurrentUser"



interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardShelterLayout({children}: DashboardLayoutProps) {
  const session = await getCurrentUser()
  if (!session) {
    redirect("/login")
  }
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <ShelterHeader session={session}>
            <ShelterSidebarSheet className="lg:hidden">
              <ShelterSidebarNav className="pl-4">
                
              </ShelterSidebarNav>
            </ShelterSidebarSheet>
        </ShelterHeader>
        <div className="container flex-1 items-start lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <ShelterSidebarNav className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky lg:block">
            
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
  