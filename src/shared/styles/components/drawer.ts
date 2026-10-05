import { defineSlotRecipe } from "@chakra-ui/react";

export const drawerSlotRecipe = defineSlotRecipe({
  slots: [
    "backdrop",
    "positioner",
    "content",
    "header",
    "body",
    "footer",
    "title",
    "description",
    "closeTrigger",
  ],
  variants: {
    variant: {
      navbar: {
        content: {
          bg: "coffee.900",
        },
        closeTrigger: {
          minWidth: "auto",
        },
      },
      drinkDetail: {
        backdrop: {
          bg: "neutral.900/80",
        },
        content: {
          bg: "neutral.900",
          borderTop: "1px solid",
          borderTopColor: "neutral.700",
          maxH: { base: "40rem", desktop: "fit-content" },
        },
        closeTrigger: {
          minWidth: "auto",
          mr: { base: "1", desktop: "5" },
          _hover: {
            bg: "none",
            outline: "none",
          },
          _focus: {
            outline: "none",
            boxShadow: "none",
          },
          _focusVisible: {
            outline: "none",
            boxShadow: "none",
          },
          _active: {
            outline: "none",
          },
        },
        header: {
          minH: "3.2rem",
        },
        body: {
          display: "flex",
          flexDirection: { base: "column", desktop: "row" },
          gap: "8",
          px: { base: "4", desktop: "8" },
          pt: "0",
          overflow: { base: "visible", desktop: "hidden" },
          overflowY: "auto",
        },
      },
    },
  },
  defaultVariants: {
    variant: "navbar",
  },
});
