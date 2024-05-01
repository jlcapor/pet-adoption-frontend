import { getServerSession } from "next-auth/next"

import { authOptions } from "@/server/auth";
import { db } from "@/server/db";

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function  getCurrentUser() {
  try {
   const session = await getSession();
   
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      include: {
        role: true,
      }
    });
    
    if (!currentUser) {
      return null;
    }

    return currentUser
      
  } catch (error: any) {
    return null;
  }
}