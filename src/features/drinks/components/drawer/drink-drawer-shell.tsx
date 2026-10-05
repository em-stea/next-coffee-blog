"use client";

import { CloseButton, Drawer } from "@chakra-ui/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function DrinkDrawerShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const isReadyRef = useRef(false);

  useEffect(() => {
    // Forzamos un frame de espera para activar el Drawer y habilitar los cierres
    const timer = requestAnimationFrame(() => {
      setOpen(true);
      // Habilitamos la recepción de eventos de cierre en el siguiente tick
      setTimeout(() => {
        isReadyRef.current = true;
      }, 50);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  const handleClose = () => {
    if (!isReadyRef.current) return;

    setOpen(false);
  };
  return (
    <Drawer.Root
      placement="bottom"
      variant="drinkDetail"
      open={open}
      onOpenChange={(e) => {
        if (!e.open) {
          handleClose();
        }
      }}
    >
      <Drawer.Backdrop />
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
