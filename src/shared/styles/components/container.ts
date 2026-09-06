import { defineRecipe } from "@chakra-ui/react";

export const containerRecipe = defineRecipe({
  base: {
    maxWidth: { base: "full", desktop: "1440px" },
  },
  variants: {
    variant: {
      default: {
        paddingInline: { base: 4, desktop: 16, lg: 16 },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
