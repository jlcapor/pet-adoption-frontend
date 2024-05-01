import Container from "@/components/Container"
import { siteConfig } from "@/config/site"
import { PawPrint } from "lucide-react"
import Link from "next/link"

interface AuthLayoutProps {
  children: React.ReactNode
}
  
  export default async function AuthLayout({ children }: AuthLayoutProps) {
    
    return (
        <Container>
          <div className="w-full flex items-center justify-center py-4">
            <div className="w-full lg:mx-32 flex justify-between items-center p-3 text-sm">
                <Link href="/">
                  <div className="flex items-center h-full cursor-pointer gap-2">
                    <PawPrint className='h-8 w-8'/>
                    <span className=" text-2xl font-semibold sm:block ">
                      {siteConfig.name}
                    </span>
                  </div>
                </Link>
            </div>
          </div>
          {children}
        </Container>
    )
  }