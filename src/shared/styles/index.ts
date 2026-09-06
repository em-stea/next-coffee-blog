import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { recipes as componentRecipes, slotRecipes } from "./components";
import { colors } from "./primitive-tokens/colors";
import { textStyles } from "./text-styles";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      desktop: "1200px",
      wide: "1400px",
    },
    tokens: {
      colors,
      fonts: {
        heading: { value: "var(--fontfamily-primary)" },
        body: { value: "var(--fontfamily-primary)" },
        mono: { value: "var(--fontfamily-tertiary)" },
      },
    },
    textStyles,
    recipes: {
      ...componentRecipes,
    },
    slotRecipes,
  },
  globalCss: {
    "html, body": {
      bg: "neutral.0",
      color: "neutral.900",
      minH: "100%",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      minH: "100dvh",
    },
  },
});

export const system = createSystem(defaultConfig, config);
