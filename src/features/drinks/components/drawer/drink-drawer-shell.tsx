"use client";

import { CloseButton, Drawer } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export function DrinkDrawerShell({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <Drawer.Root
      placement="bottom"
      open
      variant="drinkDetail"
      closeOnInteractOutside={false}
      onOpenChange={(details) => {
        if (!details.open) router.back();
      }}
    >
      <Drawer.Backdrop onClick={() => router.back()} />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.CloseTrigger asChild>
              <CloseButton
                size="md"
                color="neutral.0"
                _hover={{ color: "amber.500" }}
              />
            </Drawer.CloseTrigger>
          </Drawer.Header>
          {children}
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
