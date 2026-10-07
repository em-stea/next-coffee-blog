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
      fontSize: "25px",
      _open: {
        rotate: "180deg",
      },
    },
    itemBody: {
      display: "flex",
      flexDirection: { base: "column", desktop: "row" },
      gap: "10",
      pt: "2",
      pb: "10",
      px: { base: "6", desktop: "20" },
    },
  },
  variants: {
    variant: {
      default: {
        item: {
          borderTop: "1px solid",
          borderColor: "neutral.700",
        },
        itemTrigger: {
          py: "8",
          px: { base: "6", desktop: "20" },
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
