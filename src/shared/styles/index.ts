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
    },
    textStyles,
    recipes: {
      ...componentRecipes,
    },
    slotRecipes,
  },
  globalCss: {
    "html, body": {
      bg: "neutral.900",
      color: "neutral.0",
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
