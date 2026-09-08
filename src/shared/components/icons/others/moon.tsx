"use client";

import { createIcon } from "@chakra-ui/react";

export const MoonIcon = createIcon({
  displayName: "MoonIcon",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  path: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
});
