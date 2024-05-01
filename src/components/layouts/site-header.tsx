"use client"
import React from 'react'
import type { Session } from "next-auth"
import MainNav from './main-nav'
import { siteConfig } from '@/config/site'
import AuthDropdown from './auth-dropdown'
import { MobileNav } from './mobile-nav'

type SiteHeaderProps = {
  session: Session | null
}
export default function SiteHeader({ session }: SiteHeaderProps) {
 
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav}/>
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <AuthDropdown session={session}/>
          </nav>
        </div>
      </div>
    </header>
  )
}
