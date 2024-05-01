import { env } from '@/env';
import { db } from '@/server/db';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'
interface UpdateShelterPageProps {
  params: {
    shelterId: string
  }
}

async function getShelterFromParams(params: UpdateShelterPageProps["params"]) {
 
  try {
    const shelterId = decodeURIComponent(params.shelterId)
    const shelter = await db.shelter.findFirst({
      where: {
        id: shelterId
      },
      select: {
        id: true,
        name: true,
        description: true
      },
      
    });

    if (!shelter) return null
  
    return shelter
  } catch (error) {
    console.error('Error fetching shelter:', error);
  }
}

export async function generateMetadata({
  params,
}: UpdateShelterPageProps): Promise<Metadata> {
  const shelter = await getShelterFromParams(params)

  if (!shelter) {
    return {}
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: `Update ${shelter.name} shelter`,
    description: `Update your ${shelter.name} shelter name and description, or delete it`,
  }
}



export default async function UpdateShelterPage({ params }:UpdateShelterPageProps) {
  const shelter = await getShelterFromParams(params)
  if (!shelter) {
    notFound()
  }
  return (
    <div>
       {shelter.name}
    </div>
  )
}
