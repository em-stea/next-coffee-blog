"use client";

import { createIcon } from "@chakra-ui/react";

export const CoffeeBeanIcon = createIcon({
  displayName: "CoffeeBeanIcon",
  viewBox: "0 0 24 24",
  defaultProps: {
    fill: "currentColor",
  },
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.5C8.5 1.5 5.5 5 5.5 10.5S8.5 19.5 12 19.5s6.5-3.5 6.5-9S15.5 1.5 12 1.5Zm.55 2.6c.45 1.7.7 3.8.7 6.4s-.25 4.7-.7 6.4c-.45-1.7-.7-3.8-.7-6.4s.25-4.7.7-6.4Z"
    />
  ),
});

export default CoffeeBeanIcon;
