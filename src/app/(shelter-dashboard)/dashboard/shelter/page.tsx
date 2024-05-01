import { Shell } from "@/components/shell";
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation";

export default async function SheltersPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login")
  }


  return (
    <Shell variant="sidebar">
      <h1>Shelters</h1>
    </Shell>
  )
}
