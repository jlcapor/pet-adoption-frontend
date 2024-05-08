import { Icons } from "@/components/icons";
import { type MainNavItem } from "@/types";


export const siteConfig = {
  name: "PetBuddy",
  description: "",
  url: "",
  ogImage: "",
  links: {
    linkedin: "https://www.linkedin.com/in/jose-luis-capote-dsw/",
    github: "https://github.com/jlcapor",
  },
  mainNav: [
    {
      title: "inicio",
      href: "/",
      icon:Icons.home,
    },
    {
      title: "mascotas",
      href: "/pets",
      icon:Icons.pet,
    },
    {
      title: "refugios",
      href: "/shelter",
      icon:Icons.shelter,
    },
    
  ] satisfies MainNavItem[],

  socialLinks: [
    {
        title: "github",
        href: "https://github.com/jlcapor",
        icon: Icons.github
    },
    {
        title: "linkedin",
        href: "https://www.linkedin.com/in/jose-luis-capote-dsw/",
        icon: Icons.linkedin
    },
    
  ] satisfies MainNavItem[],
};
