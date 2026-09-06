import Link from "next/link";
import { Box } from "@chakra-ui/react";
import {
  SiteFooterBrand,
  SiteFooterCopy,
  SiteFooterInner,
  SiteFooterNav,
  SiteFooterRoot,
} from "./site-footer.parts";

const FOOTER_LINKS = [
  { href: "/drinks", label: "Coffee drinks" },
  { href: "/varieties", label: "Varieties" },
  { href: "/brew-methods", label: "Brew methods" },
  { href: "/grinders", label: "Grinders" },
] as const;

export function SiteFooter() {
  return (
    <SiteFooterRoot>
      <SiteFooterInner>
        <Box>
          <SiteFooterBrand>Café Notes</SiteFooterBrand>
          <SiteFooterCopy>
            A quiet guide to drinks, beans, brew methods, and the tools behind
            a better cup.
          </SiteFooterCopy>
        </Box>
        <SiteFooterNav>
          {FOOTER_LINKS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </SiteFooterNav>
      </SiteFooterInner>
    </SiteFooterRoot>
  );
}
