import type { Pet, Role, Shelter, User } from "@prisma/client";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label?: string
  onClick?: () => void;
};


export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;


export type ShelterWithPets = Shelter & {
  pets: Pet[];
}

export type PickedPet = Pick<Pet, "id" | "name">

export type PickedShelter = Shelter & {
  pets: PickedPet[]
}


export type UserWithRole = Pick<User, 'id' | 'name' | 'email' | 'image'> & {
  role: Role
}



