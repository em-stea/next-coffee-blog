export { ArrowRightIcon } from "./directional/arrow-right";
export { ChevronRightIcon } from "./directional/chevron-right";
export { CupIcon } from "./others/cup";
export { WarningIcon } from "./others/warning";
export { CupWarmIcon } from "./others/cup-warm";
export { CoffeeBeanIcon } from "./others/coffee-bean";
export { ToolCoffeeIcon } from "./others/tool-coffee";
export { FrenchPressIcon } from "./others/french-press";

import { ArrowRightIcon } from "./directional/arrow-right";
import { ChevronRightIcon } from "./directional/chevron-right";
import { CoffeeBeanIcon } from "./others/coffee-bean";
import { CupIcon } from "./others/cup";
import { CupWarmIcon } from "./others/cup-warm";
import { WarningIcon } from "./others/warning";
import { ToolCoffeeIcon } from "./others/tool-coffee";
import { FrenchPressIcon } from "./others/french-press";

export const iconEntries = [
  { name: "CupIcon", component: CupIcon, file: "cup" },
  { name: "WarningIcon", component: WarningIcon, file: "warning" },
  { name: "ArrowRightIcon", component: ArrowRightIcon, file: "arrow-right" },
  {
    name: "ChevronRightIcon",
    component: ChevronRightIcon,
    file: "chevron-right",
  },
  { name: "CoffeeBeanIcon", component: CoffeeBeanIcon, file: "coffee-bean" },
  { name: "CupWarmIcon", component: CupWarmIcon, file: "cup-warm" },
  { name: "ToolCoffeeIcon", component: ToolCoffeeIcon, file: "tool-coffee" },
  { name: "FrenchPressIcon", component: FrenchPressIcon, file: "french-press" },
] as const;
