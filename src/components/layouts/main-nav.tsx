'use client'
import { siteConfig } from '@/config/site'

import type { MainNavItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { PawPrint } from 'lucide-react';
import { cn } from '@/lib/utils'

type MainNavProps = {
  items: MainNavItem[]
}

export default function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex gap-6 lg:gap-10">
      <Link href="/" className="hidden items-center space-x-2 lg:flex">
        <PawPrint className='h-8 w-8 mr-1' aria-hidden="true"/>
        <span className="hidden text-xl font-bold lg:inline-block">
          {siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items?.map((item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center transition-colors hover:text-foreground/80 h-auto capitalize",
                  pathname === item.href &&
                    "font-medium text-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
