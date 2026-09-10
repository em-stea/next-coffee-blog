export { ArrowRightIcon } from "./directional/arrow-right";
export { ChevronRightIcon } from "./directional/chevron-right";
export { CupIcon } from "./others/cup";
export { MoonIcon } from "./others/moon";
export { SunIcon } from "./others/sun";
export { WarningIcon } from "./others/warning";

import { ArrowRightIcon } from "./directional/arrow-right";
import { ChevronRightIcon } from "./directional/chevron-right";
import { CupIcon } from "./others/cup";
import { MoonIcon } from "./others/moon";
import { SunIcon } from "./others/sun";
import { WarningIcon } from "./others/warning";

export const iconEntries = [
  { name: "CupIcon", component: CupIcon, file: "cup" },
  { name: "WarningIcon", component: WarningIcon, file: "warning" },
  { name: "ArrowRightIcon", component: ArrowRightIcon, file: "arrow-right" },
  {
    name: "ChevronRightIcon",
    component: ChevronRightIcon,
    file: "chevron-right",
  },
  { name: "MoonIcon", component: MoonIcon, file: "moon" },
  { name: "SunIcon", component: SunIcon, file: "sun" },
] as const;
