"use client";

import {
  Box,
  CloseButton,
  Drawer,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { HEADER_MAIN_LINKS, HEADER_SIDE_LINK } from "./data";
import { HeaderItem } from "./display-link";

interface HeaderMobileProps {
  isOpenMenu: boolean;
  onCloseMenu: () => void;
}

export const HeaderMobile: FC<HeaderMobileProps> = ({
  isOpenMenu,
  onCloseMenu,
}) => {
  return (
    <Drawer.Root
      open={isOpenMenu}
      onOpenChange={(details) => {
        if (!details.open) onCloseMenu();
      }}
      placement="end"
      size="xs"
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" color="neutral.0" />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body>
              <Stack as="nav" gap={5}>
                {HEADER_MAIN_LINKS.map(
                  (link) =>
                    link.variant === "text" && (
                      <Link href={link.href} key={link.title}>
                        <Text
                          onClick={onCloseMenu}
                          color="neutral.0"
                          textStyle="subtitle.2"
                          cursor="pointer"
                          letterSpacing="0.04em"
                        >
                          {link.title}
                        </Text>
                      </Link>
                    ),
                )}

                <Box w="full" onClick={onCloseMenu}>
                  <HeaderItem data={HEADER_SIDE_LINK} />
                </Box>
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
