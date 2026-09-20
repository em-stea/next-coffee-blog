import { defineSlotRecipe } from "@chakra-ui/react";

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "body", "title", "description", "footer"],
  base: {
    root: {
      borderRadius: "16px",
      overflow: "hidden",
    },
  },
  variants: {
    variant: {
      featured: {
        root: {
          w: { base: "full", lg: "500px" },
          h: { base: "400px", lg: "550px" },
          border: "1px solid",
          borderColor: "neutral.700",
        },
        header: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          px: 4,
          pt: 4,
          pb: 0,
        },
        footer: {
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
        },
      },
      fundamental: {
        root: {
          border: "1px solid",
          borderColor: "neutral.100",
          borderTop: "4px solid",
          borderTopColor: "amber.500",
          // boxShadow: "7px 7px 10px 0 rgba(0, 0, 0, 0.9)",
          h: "full",
          _hover: {
            bg: "neutral.800",
            transition: "background-color 0.5s ease",
          },
        },
        header: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        },
      },
      duo: {
        root: {
          border: "1px solid",
          borderColor: "neutral.100",
          borderTop: "4px solid",
          borderTopColor: "amber.500",
        },
        header: {
          p: 0,
          h: { base: "auto", desktop: "28.5rem" },
        },
        body: {
          px: { base: 4, desktop: 6 },
          py: { base: 6, desktop: 6 },
        },
        footer: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          px: { base: 4, desktop: 6 },
        },
      },
    },
  },
  defaultVariants: {
    variant: "fundamental",
  },
});
