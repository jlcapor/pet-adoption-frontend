import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Shell } from "@/components/shell";
import ShelterTabs from "@/components/shelter-tabs";
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation";

interface ShelterLayoutProps extends React.PropsWithChildren {
    params: {
      shelterId: string
    }
  }
export default async function ShelterLayout({children, params}: ShelterLayoutProps) {
    const shelterId = params.shelterId
  const user = await getCurrentUser();
  if (!user) {
    redirect("/signin")
  }
  return (
    <Shell variant="sidebar" className="gap-4">
        <PageHeader>
            <PageHeaderHeading size="sm">Dashboard</PageHeaderHeading>
            <PageHeaderDescription size="sm">
                Administra tu Refugio
            </PageHeaderDescription>
        </PageHeader>
        <ShelterTabs shelterId={shelterId} />
        <div className="overflow-hidden">{children}</div>
    </Shell>
  )
}
