'use client'

import { Icons } from '@/components/icons'
import AuthDropdown from '@/components/layouts/auth-dropdown'
import { siteConfig } from '@/config/site'
import type { UserWithRole } from '@/types'
import Link from 'next/link'
import React from 'react'
// import { ShelterSidebarSheet } from './shelter-sidebar-sheet'

interface ShelterHeaderProps {
  session: UserWithRole | null
  children: React.ReactNode
}
export default function ShelterHeader({ session, children  } : ShelterHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="hidden items-center space-x-2 lg:flex">
          <Icons.pawPrint className="h-8 w-8 mr-1"/>
          <span className="hidden text-xl font-bold lg:inline-block">
            {siteConfig.name}
          </span>
          <span className="sr-only">Home</span>
        </Link>
        {/* <ShelterSidebarSheet/> */}
        {children}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <AuthDropdown session={session} />
          </nav>
        </div>
      </div>
    </header>
  )
}