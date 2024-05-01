"use client"

import { useRouter, useSelectedLayoutSegment } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { ScrollArea } from "./ui/scroll-area"
import { cn } from "@/lib/utils"
import Link from "next/link"


interface ShelterTabsProps {
    shelterId: string 
}
export default function ShelterTabs({shelterId}: ShelterTabsProps) {
  const router = useRouter()
  const segment = useSelectedLayoutSegment()

  const tabs = [
    {
        title: "Refugio",
        href: `/dashboard/shelter/${shelterId}`,
        isActive: segment === null,
    },
    {
        title: "Mascotas",
        href: `/dashboard/shelter/${shelterId}/pets`,
        isActive: segment === "pets",
      },
  ]
  return (
    <Tabs
      defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
      className="sticky top-0 z-30 size-full overflow-auto bg-background"
      onValueChange={(value) => router.push(value)}
    >
      <ScrollArea
        orientation="horizontal"
        className="pb-2.5"
        scrollBarClassName="h-2"
      >
        <TabsList className="inline-flex items-center justify-center space-x-1.5 text-muted-foreground">
          {tabs.map((tab) => (
            <div
              role="none"
              key={tab.href}
              className={cn(
                "border-transparent py-1.5",
                tab.isActive && "border-foreground"
              )}
            >
              <TabsTrigger
                value={tab.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                  tab.isActive && "text-foreground"
                )}
                asChild
              >
                <Link href={tab.href}>{tab.title}</Link>
              </TabsTrigger>
            </div>
          ))}
        </TabsList>
      </ScrollArea>
      
    </Tabs>
  )
}