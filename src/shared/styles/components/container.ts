import { defineRecipe } from "@chakra-ui/react";

export const containerRecipe = defineRecipe({
  base: {
    maxWidth: { base: "full", desktop: "1440px" },
  },
  variants: {
    variant: {
      default: {
        paddingInline: { base: 4, desktop: 10, lg: 10 },
        paddingBlock: { base: 14, desktop: 20, lg: 20 },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
