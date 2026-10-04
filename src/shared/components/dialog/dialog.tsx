"use client";

/* Styles live in this adapter because Radix Dialog is an external headless primitive that needs Chakra wrappers to map our theme variants onto its parts. */

import type { ComponentProps, ReactNode } from "react";

import { Button, chakra, CloseButton } from "@chakra-ui/react";
import * as RDialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

import { ChevronLeftIcon } from "../icons/directional/chevron-left";

const DialogOverlay = chakra(RDialog.Overlay, {
  base: {
    bg: "neutral.900/80",
    inset: 0,
    position: "fixed",
    zIndex: "overlay",
  },
});
const DialogPositioner = chakra("div", {
  base: {
    alignItems: "center",
    display: "grid",
    h: "100dvh",
    inset: 0,
    justifyContent: "center",
    overflowY: "auto",
    placeItems: "center",
    pointerEvents: "none",
    position: "fixed",
    zIndex: "modal",
    p: 4,
  },
});
const DialogContent = chakra(RDialog.Content, {
  base: {
    bg: "neutral.900",
    borderRadius: "8px",
    w: "40rem",
    border: "1px solid",
    borderColor: "neutral.700",
  },
});
const DialogHeaderRoot = chakra("div", {
  base: {
    alignItems: "center",
    color: "modal.text.primary-default-primary",
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "space-between",
    pb: 6,
    pt: 8,
    px: 8,
  },
});
const DialogHeaderTitleWrapper = chakra("div", {
  base: {
    alignItems: "flex-start",
    display: "flex",
    gap: 3,
    w: "full",
  },
});
const DialogBodyRoot = chakra("div", {
  base: {
    color: "neutral.0",
    overflowY: "hidden",
    pb: 8,
    pt: 0,
    px: 8,
    textStyle: "body.2",
  },
});
const DialogFooterRoot = chakra("div", {
  base: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    justifyContent: "flex-end",
    pb: 8,
    px: 8,
  },
});
const DialogCloseButton = chakra(CloseButton, {
  base: {
    h: "auto",
    minW: 0,
    _hover: {
      bg: "neutral.800",
    },
  },
});

interface DialogProps {
  children: ReactNode;
  trigger?: ReactNode;
  open?: boolean;
  disabled?: boolean;
  onClose?: () => void;
}

export function Dialog({ trigger, children, open, disabled }: DialogProps) {
  const router = useRouter();

  const handleOpenAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      router.back();
    }
  };

  return (
    <RDialog.Root open={open} onOpenChange={handleOpenChange}>
      {trigger && !disabled ? (
        <RDialog.Trigger asChild>{trigger}</RDialog.Trigger>
      ) : null}
      {trigger && disabled ? trigger : null}
      <RDialog.Portal>
        <DialogOverlay />

        <DialogPositioner>
          <DialogContent
            onOpenAutoFocus={handleOpenAutoFocus}
            onCloseAutoFocus={(event) => event.preventDefault()}
          >
            {children}
          </DialogContent>
        </DialogPositioner>
      </RDialog.Portal>
    </RDialog.Root>
  );
}

export function DialogHeader({
  children,
  closeTrigger = true,
  goBackTrigger = false,
  onGoBack,
}: {
  children: ReactNode;
  closeTrigger?: boolean;
  goBackTrigger?: boolean;
  onGoBack?: () => void;
}) {
  const router = useRouter();

  return (
    <DialogHeaderRoot>
      {goBackTrigger && (
        <DialogCloseButton
          size="md"
          onClick={onGoBack ?? (() => router.back())}
        >
          <ChevronLeftIcon color="neutral.0" />
        </DialogCloseButton>
      )}
      <DialogHeaderTitleWrapper>{children}</DialogHeaderTitleWrapper>
      {closeTrigger && (
        <RDialog.Close asChild>
          <DialogCloseButton size="sm" color="neutral.0" />
        </RDialog.Close>
      )}
    </DialogHeaderRoot>
  );
}

export function DialogBody({
  children,
  ...props
}: ComponentProps<typeof DialogBodyRoot>) {
  return <DialogBodyRoot {...props}>{children}</DialogBodyRoot>;
}

export function DialogFooter({ children }: { children: ReactNode }) {
  return <DialogFooterRoot>{children}</DialogFooterRoot>;
}

interface DialogButtonProps extends ComponentProps<typeof Button> {
  closeOnClick?: boolean;
}

export function DialogButton({
  children,
  closeOnClick = true,
  ...props
}: DialogButtonProps) {
  const button = <Button {...props}>{children}</Button>;

  if (!closeOnClick) return button;

  return <RDialog.Close asChild>{button}</RDialog.Close>;
}
