import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";

export default function SignOutLoading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-lg w-full px-4 mt-[-195px]">
            <PageHeader className="text-center">
                <PageHeaderHeading size="sm">Cerrar sesión</PageHeaderHeading>
                <PageHeaderDescription size="sm">
                    ¿Estás seguro de que deseas cerrar sesión?
                </PageHeaderDescription>
            </PageHeader>
            <div className="flex w-full items-center justify-center space-x-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
            </div>
        </div>
    </div>
  )
}
