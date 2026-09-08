import { defineSlotRecipe } from "@chakra-ui/react";

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "body", "title", "description", "footer"],
  variants: {
    variant: {
      featured: {
        root: {
          w: { base: "full", lg: "500px" },
          h: { base: "400px", lg: "550px" },
          overflow: "hidden",
          border: "1px solid",
          borderColor: "neutral.700",
          borderRadius: "16px",
          _hover: {
            "& img": {
              transform: "scale(1.05)",
            },
          },
          "& img": {
            transform: "scale(1)",
            transitionProperty: "transform",
            transitionDuration: "1.2s",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          },
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
      mediaCard: {
        root: {
          border: "1px solid",
          borderColor: "neutral.100",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          h: "full",
          boxShadow: "0 3px 6px 0 rgba(28, 20, 15, 0.06)",
        },
        header: {
          p: 0,
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid",
          borderColor: "neutral.100",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
        },
        title: {
          textStyle: "subtitle.bold",
        },
        description: {
          textStyle: "body.2",
          color: "neutral.600",
        },
      },
    },
  },
  defaultVariants: {
    variant: "mediaCard",
  },
});
