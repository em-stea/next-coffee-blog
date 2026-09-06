import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "8px",
    transitionProperty: "background, color, border-color",
    transitionDuration: "0.2s",
    cursor: "pointer",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "coffee.500",
      outlineOffset: "2px",
    },
  },
  variants: {
    variant: {
      solid: {
        textStyle: "body.2.semibold",
        bg: "neutral.900",
        color: "neutral.0",
        _hover: { bg: "coffee.900" },
      },
      outline: {
        textStyle: "body.2.semibold",
        bg: "transparent",
        color: "amber.500",
        borderWidth: "1px",
        borderColor: "amber.500",
        _hover: {
          bg: "transparent",
          color: "amber.400",
          borderColor: "amber.400",
        },
      },
      "text-link": {
        color: "neutral.0",
        textStyle: "button.1",
        px: 0,
        _hover: {
          color: "neutral.200",
        },
      },
    },
    size: {
      sm: {
        px: "0.75rem",
        py: "0.5rem",
      },
      md: {
        px: "1.25rem",
        py: "0.75rem",
      },
      lg: {
        px: "1.25rem",
        py: "0.75rem",
        minW: "200px",
      },
    },
    isInverted: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      isInverted: true,
      css: {
        bg: "amber.500",
        color: "coffee.900",
        _hover: {
          bg: "amber.400",
          color: "coffee.900",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    size: "md",
    isInverted: false,
  },
});
