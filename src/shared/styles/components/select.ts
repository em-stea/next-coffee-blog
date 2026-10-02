import { defineSlotRecipe } from "@chakra-ui/react";

export const selectSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "control",
    "trigger",
    "valueText",
    "indicator",
    "indicatorGroup",
    "positioner",
    "content",
    "item",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
  ],
  base: {},
  variants: {
    variant: {
      default: {
        control: {
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "neutral.400",
        },
        indicator: {
          color: "neutral.400",
        },

        item: {
          color: "neutral.200",
          cursor: "pointer",
          px: 4,
          py: 2.5,
          _highlighted: {
            bg: "neutral.800",
            color: "neutral.100",
          },
          _hover: {
            background: "neutral.800",
          },
        },
        trigger: {
          color: "neutral.200",
          _placeholderShown: {
            color: "neutral.600",
          },
        },
        content: {
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "neutral.400",
          background: "neutral.900",
          p: 0,
        },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
