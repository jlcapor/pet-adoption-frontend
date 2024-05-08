import { Button, type ButtonProps } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuGroup, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuShortcut, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';
import { cn } from "@/lib/utils";
import { DashboardIcon, ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { UserAvatar } from "../UserAvatar";
import type { UserWithRole } from "@/types";



interface AuthDropdownProps extends ButtonProps {
  session: UserWithRole | null
}
export default function AuthDropdown({session, className, ...props}: AuthDropdownProps) {
    return (
    <>
      {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className={cn("size-8 rounded-full", className)}
                {...props}
              >
                <UserAvatar
                  user={{ name: session.name , image: session.image }}
                  className="h-10 w-10"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="text-sm font-medium leading-none">
                    {session.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile">
                    <DashboardIcon className="mr-2 size-4" aria-hidden="true" />
                    Dashboard
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/signout">
                  <ExitIcon className="mr-2 size-4" aria-hidden="true" />
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button size="sm" className={cn(className)} {...props} asChild>
            <Link href="/login">
              Inicia sesión
              <span className="sr-only">Inicia sesión</span>
            </Link>
          </Button> 
        )}
    </>
  )
}
