import React from 'react'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Shell } from '../shell'
import { Icons } from '../icons'
import { ModeToggle } from '../mode-toggle'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell>
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
          <Link href="/" className="flex w-fit items-center space-x-2">
            <Icons.pawPrint className="size-6" aria-hidden="true" />
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
          </Link>
          </section>
        </section>
        <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">

        </section>
        <section className="space-y-3">

        </section>
        <section className="flex items-center space-x-4">
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">

          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.gitHub className="size-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.linkedin className="size-4" aria-hidden="true" />
              <span className="sr-only">Linkedin</span>
            </Link>
            <ModeToggle />
          </div>
        </section>
      </Shell>
       
    </footer>
  )
}
