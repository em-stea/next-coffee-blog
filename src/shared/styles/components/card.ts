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
          h: { base: "450px", lg: "550px" },
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
          borderColor: "neutral.700",
          bg: "neutral.800",
          display: "flex",
          w: "full",
          h: "full",
          overflow: "hidden",
          flexDirection: { base: "column-reverse", desktop: "row" },
          gap: { base: 6, desktop: 0 },
          p: 4,
          _hover: {
            bg: "neutral.800",
            transition: "background-color 0.5s ease",
          },
        },
        header: {
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { base: 6, desktop: 2 },
          py: 0,
          pl: 0,
          flex: {
            base: "none",
            desktop:
              "0 1 calc(var(--unit) - 2 * var(--card-pad) - 2 * var(--bw))",
          },
        },
        body: {
          p: 0,
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
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
      drink: {
        root: {
          color: "neutral.0",
          position: "relative",
          bg: "neutral.800",
          borderRadius: "16px",
          p: "1px",
          overflow: "hidden",
          _hover: {
            borderColor: "neutral.500",
            transition: "border-color 0.5s ease",
            _before: {
              opacity: 1,
            },
          },
          _before: {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1px",
            background: `radial-gradient(350px circle at var(--x, -500px) var(--y, -500px), var(--chakra-colors-amber-500, #f59e0b), transparent 80%)`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
            zIndex: 10,
          },
        },
        header: {
          p: 0,
          h: { base: "17rem", desktop: "27rem" },
          overflow: "hidden",
          position: "relative",
        },
        body: {
          p: 4,
          minH: "14.6rem",
          justifyContent: "space-between",
          gap: "0",
        },
        footer: {
          display: "flex",
          justifyContent: "end",
        },
      },
      highlight: {
        root: {
          border: "1px solid",
          borderColor: "neutral.700",
          borderRadius: "16px",
          overflow: "hidden",
          h: "full",
          color: "neutral.0",
        },
        header: {
          p: 0,
          h: { base: "25rem" },
          maxH: "25rem",
          overflow: "hidden",
        },
        body: {
          justifyContent: "space-between",
          gap: "4",
          px: { base: 4, desktop: 4 },
          py: { base: 4, desktop: 6 },
        },
      },
      accesories: {
        root: {
          border: "1px solid",
          borderColor: "amber.500",
          borderRadius: "8px",
        },
        header: {
          p: 0,
          h: { base: "auto", desktop: "30rem" },
          maxH: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        },
        body: {
          px: { base: 4, desktop: 6 },
          py: { base: 8, desktop: 6 },
        },
      },
    },
  },
  defaultVariants: {
    variant: "fundamental",
  },
});
