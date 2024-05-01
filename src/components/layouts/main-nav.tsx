import { siteConfig } from '@/config/site'

import { MainNavItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { PawPrint } from 'lucide-react';
import { cn } from '@/lib/utils'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Icons } from '../icons'

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
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button
            variant="outline"
            size="sm"
            className="h-auto px-2 py-1.5 text-base lg:hidden"
          >
            <Icons.pawPrint className="mr-2 h-6 w-6" />
            <span className="font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={20}
          className="w-52 overflow-y-auto overflow-x-hidden rounded-sm dark:text-slate-200"
        >
          <DropdownMenuLabel>
            <Link
              href="/"
              className="flex items-center"
            >
              <Icons.pawPrint className="mr-2 h-6 w-6" aria-hidden="true"/>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
            {items?.map((item, index) =>
              item.href ? (
                <DropdownMenuItem
                  key={index}
                  asChild
                >
                  <Link
                    href={item.href}
                  >
                    {item.icon && (
                      <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                    <span className="line-clamp-1 capitalize">{item.title}</span>
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  key={index}
                  asChild
                  className="hover:bg-neutral-700 focus:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  <div onClick={item.onClick}>
                    {item.icon && (
                      <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
                    )}
                      <span className="line-clamp-1">{item.title}</span>
                    </div>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  )
}
