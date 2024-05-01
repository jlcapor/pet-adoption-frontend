"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const workspaceItems = [
  {
    title: "Projects",
    href: "/",
    
  },
  {
    title: "Billing",
    href: "/billing",
    
  },
  {
    title: "Danger Zone",
    href: "/danger",
    
  },
  {
    title: "Settings",
    href: "/settings",
    
  },
] as const;

const projectItems = [
  {
    title: "Dashboard",
    href: "/",
    
  },
  {
    title: "API Keys",
    href: "/api-keys",
    
  },
  {
    title: "Danger Zone",
    href: "/danger",
    
  },
  {
    title: "Settings",
    href: "/settings",
   
  },
] as const;

export function SidebarNav() {
  const params = useParams<{
    workspaceId: string;
    projectId?: string;
  }>();
  const path = usePathname();

  // remove the workspaceId and projectId from the path when comparing active links in sidebar
  const pathname =
    path
      .replace(`/${params.workspaceId}`, "")
      .replace(`/${params.projectId}`, "") || "/";

  const items = params.projectId ? projectItems : workspaceItems;
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        // const Icon = item.icon;

        let fullPath = `/${params.workspaceId}`;
        if (params.projectId) {
          fullPath += `/${params.projectId}`;
        }
        fullPath += item.href;

        return (
          item.href && (
            <Link
              key={index}
              href={fullPath}
              aria-disabled={"disabled" in item}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent" : "transparent",
                  "disabled" in item && "cursor-not-allowed opacity-80",
                )}
              >
                {/* <Icon className="mr-2 h-4 w-4" /> */}
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}