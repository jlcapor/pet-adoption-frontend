import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/session"

export default async function ProtectedAuthLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getCurrentUser()

  if (user) {
    redirect("/")
  }

  return <>{children}</>
}
