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
import { Session } from "next-auth";
import { UserAvatar } from "../UserAvatar";



interface AuthDropdownProps extends ButtonProps {
  session: Session | null
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
                  user={{ name: session.user.name || null, image: session.user.image || null }}
                  className="h-10 w-10"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="text-sm font-medium leading-none">
                    {session.user.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/shelter">
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
