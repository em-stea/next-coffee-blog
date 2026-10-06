import { defineSlotRecipe } from "@chakra-ui/react";

export const accordionSlotRecipe = defineSlotRecipe({
  className: "chakra-accordion",
  slots: [
    "root",
    "item",
    "itemTrigger",
    "itemContent",
    "itemBody",
    "itemIndicator",
  ],
  base: {
    root: {
      width: "full",
    },
    item: {
      overflowAnchor: "none",
    },
    itemTrigger: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      width: "full",
      outline: "0",
      gap: "3",
      cursor: "pointer",
      _focusVisible: {
        outline: "none",
        boxShadow: "none",
      },
    },
    itemContent: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
      },
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      _open: {
        rotate: "180deg",
      },
    },
  },
  variants: {
    variant: {
      default: {
        item: {
          py: "6",
          px: "20",
          borderTop: "1px solid",
          borderColor: "neutral.700",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
