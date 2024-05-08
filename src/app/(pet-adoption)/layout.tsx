import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import getCurrentUser from "@/lib/actions/getCurrentUser";


export default async function PetAdoptionLayout({ children }: React.PropsWithChildren ) {
    const session = await getCurrentUser()
    
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader session={session}/>
                <main className="flex-1">
                    {children}
                </main>
            <SiteFooter/>
        </div>
    )
}