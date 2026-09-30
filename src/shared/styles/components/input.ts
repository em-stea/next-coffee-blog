import { defineRecipe } from "@chakra-ui/react";

export const inputRecipe = defineRecipe({
  variants: {
    variant: {
      default: {
        border: "1px solid",
        borderColor: "neutral.0",
        borderRadius: "8px",
        backgroundColor: "transparent",
        minW: "20rem",
        _placeholder: {
          color: "neutral.400",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
