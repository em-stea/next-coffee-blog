"use client";

import { CupIcon } from "@/shared/components/icons";
import { ROUTES } from "@/shared/lib/route";
import { Box, HStack, Show, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { HEADER_MAIN_LINKS, HEADER_SIDE_LINK } from "./data";
import { HeaderItem } from "./display-link";
import { HeaderMobile } from "./header-mobile";
import { NavBarIcon } from "./navbar-icon-mobile";
import useBreakpoint from "@/shared/hooks/use-breakpoint";

export default function Header() {
  const stickyBox = useRef<HTMLDivElement>(null);
  const { isLargerThanMD } = useBreakpoint();

  const {
    open: isOpenMenu,
    onClose: onCloseMenu,
    onToggle: onToggleMenu,
  } = useDisclosure();

  return (
    <HStack
      bgColor="basic-0-opacity.60"
      boxShadow="none"
      gap={0}
      position="fixed"
      zIndex="1000"
      top="0"
      w="full"
      backdropFilter="blur(10px)"
      ref={stickyBox}
    >
      <Box w="full" minW="full" py={{ base: 4, desktop: 5 }}>
        {/* Desktop */}
        <HStack
          w="full"
          px="11"
          alignItems="center"
          justifyContent="space-between"
          display={{ base: "none", desktop: "flex" }}
        >
          <HeaderItem data={{ href: ROUTES.home, variant: "logo" }} />

          <HStack gap={8} alignItems="center">
            {HEADER_MAIN_LINKS.map((link) => (
              <HeaderItem key={link.href} data={link} />
            ))}
            <HeaderItem data={HEADER_SIDE_LINK} />
          </HStack>
        </HStack>

        <Show when={!isLargerThanMD}>
          <HStack
            w="full"
            justifyContent="space-between"
            px="4"
            py={{ base: "3", desktop: 0 }}
          >
            <Link href={ROUTES.home} onClick={onCloseMenu} aria-label="Home">
              <CupIcon boxSize="36px" color="neutral.900" />
            </Link>

            <NavBarIcon isOpen={isOpenMenu} onClick={onToggleMenu} />
          </HStack>
        </Show>
      </Box>

      <HeaderMobile isOpenMenu={isOpenMenu} onCloseMenu={onCloseMenu} />
    </HStack>
  );
}
