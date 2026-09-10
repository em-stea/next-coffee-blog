import { defineSlotRecipe } from "@chakra-ui/react";

export const tagSlotRecipe = defineSlotRecipe({
  className: "tag",
  slots: ["root", "label", "closeTrigger", "startElement", "endElement"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      maxW: "fit-content",
      borderRadius: "8px",
    },
    label: {
      lineClamp: 1,
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "neutral.0",
          color: "amber.500",
          gap: "2",
          py: 1,
          px: 3,
        },
        label: {
          textStyle: "tag.1",
          textTransform: "uppercase",
          pb: "2px",
        },
      },
      featured: {
        root: {
          bg: "neutral.900",
          border: "1px solid",
          borderColor: "neutral.0",
          color: "neutral.0",
          py: 1,
          px: 3,
          position: "absolute",
          top: 3,
          left: 3,
          zIndex: 1,
        },
        label: {
          textStyle: "tag.1",
        },
      },
      fundamental: {
        root: {
          bg: "coffee.700",
          border: "1px solid",
          borderColor: "neutral.0",
          color: "neutral.0",
          px: 3,
          py: 1,
        },
        label: {
          textStyle: "tag.1",
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
