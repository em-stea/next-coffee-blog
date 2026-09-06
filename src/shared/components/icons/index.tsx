export { CupIcon } from "./others/cup";
export { CoffeeBeanIcon } from "./others/coffee-bean";
export { ChevronRightIcon } from "./directional/chevron-right";
export { MoonIcon } from "./others/moon";
export { SunIcon } from "./others/sun";
export { ArrowRightIcon } from "./directional/arrow-right";

import ArrowRightIcon from "./directional/arrow-right";
import ChevronRightIcon from "./directional/chevron-right";
import { CoffeeBeanIcon } from "./others/coffee-bean";
import { CupIcon } from "./others/cup";
import MoonIcon from "./others/moon";
import SunIcon from "./others/sun";

export const iconEntries = [
  { name: "CupIcon", component: CupIcon, file: "cup" },
  { name: "CoffeeBeanIcon", component: CoffeeBeanIcon, file: "coffee-bean" },
  { name: "ArrowRightIcon", component: ArrowRightIcon, file: "arrow-right" },
  {
    name: "ChevronRightIcon",
    component: ChevronRightIcon,
    file: "chevron-right",
  },
  { name: "MoonIcon", component: MoonIcon, file: "moon" },
  { name: "SunIcon", component: SunIcon, file: "sun" },
] as const;
