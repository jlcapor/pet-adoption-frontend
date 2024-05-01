"use client"
import * as React from "react"
import { MainNavItem } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
    items?: MainNavItem[]
}
export function MobileNav({ items }: MobileNavProps) {
    const [open, setOpen] = React.useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
                <Icons.menu aria-hidden="true" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-1 pr-0 pt-9">
            <div className="w-full px-7">
                <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setOpen(false)}
                >
                    <Icons.pawPrint className="mr-2 size-6" aria-hidden="true" />
                    <span className="font-bold">{siteConfig.name}</span>
                    <span className="sr-only">Home</span>
                </Link>
            </div>
            </SheetContent>
        </Sheet>
    )
}