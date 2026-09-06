import { ROUTES } from "@/shared/lib/route";

export interface LinkProps {
  title: string;
  href: string;
  variant: "text";
}

export interface ButtonLinkProps {
  title: string;
  href: string;
  variant: "button";
}

export interface LogoProps {
  href: string;
  variant: "logo";
}

export type HeaderProps = LinkProps | LogoProps | ButtonLinkProps;

export const HEADER_MAIN_LINKS: HeaderProps[] = [
  { href: ROUTES.home, variant: "logo" },
  { title: "DRINKS", href: ROUTES.coffeeDrinks, variant: "text" },
  { title: "VARIETIES", href: ROUTES.coffeeVarieties, variant: "text" },
  { title: "BREW", href: ROUTES.brewMethods, variant: "text" },
  { title: "GRINDERS", href: ROUTES.grinders, variant: "text" },
];

export const HEADER_SIDE_LINK: ButtonLinkProps = {
  title: "ACCESSORIES",
  href: ROUTES.accessories,
  variant: "button",
};
