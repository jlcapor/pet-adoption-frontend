import { LogOutButtons } from "../_components/LogOutButtons";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";

export default function SignOutPage() {
    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="max-w-lg w-full px-4 mt-[-195px]">
            <PageHeader
                id="sign-out-page-header"
                aria-labelledby="sign-out-page-header-heading"
                className="text-center py-4"
            >
                <PageHeaderHeading size="sm">Cerrar sesión</PageHeaderHeading>
                <PageHeaderDescription size="sm">
                    ¿Estás seguro de que deseas cerrar sesión?
                </PageHeaderDescription>
            </PageHeader>
            <LogOutButtons />
        </div>
    </div>
    )
  }
  