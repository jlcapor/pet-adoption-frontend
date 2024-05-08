import SiteFooter from "@/components/layouts/site-footer"
import SiteHeader from "@/components/layouts/site-header"
import getCurrentUser from "@/lib/actions/getCurrentUser"

interface AuthLayoutProps {
  children: React.ReactNode
}
  
  export default async function AuthLayout({ children }: AuthLayoutProps) {
    const session = await getCurrentUser()

    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader session={session} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    )
  }