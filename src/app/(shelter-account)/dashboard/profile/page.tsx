import * as React from "react"
import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/server/auth";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shell } from "@/components/shell";
import ProfileShelterForm from "../_components/shelter/ProfileShelterForm";
import getDepatments from "@/lib/actions/getDepartments";
import getCities from "@/lib/actions/getCities";

export default async function ShelterProfilePage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn ?? "/login")
  }
  
   const shelter = await db.shelter.findFirst({
    where: {
      userId: user.id,
    },
  });


  if (!shelter) return null;

  const promises = Promise.all([getDepatments(), getCities()]).then(
    ([depatments, cities]) => ({ depatments, cities })
  )
  return (
    <Shell variant="sidebar">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              {shelter && <ProfileShelterForm shelter={shelter} promises={promises}/>}
            </CardContent>
          </Card>
        </div>
      </div>
    </Shell>

  )
}


