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
    },
  },
  defaultVariants: {
    variant: "navbar",
  },
});
