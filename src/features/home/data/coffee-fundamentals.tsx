import {
  CupWarmIcon,
  CoffeeBeanIcon,
  ToolCoffeeIcon,
  FrenchPressIcon,
} from "@/shared/components/icons";

export type CoffeeFundamentals = {
  tag: string;
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
  icon?: React.ReactNode;
  url: string;
};

export const COFFEE_FUNDAMENTALS: CoffeeFundamentals[] = [
  {
    tag: "Recipes",
    title: "All about \n Drinks",
    description:
      "Flat White, Cortado, Cold Brew, and Espresso calibrated under precise liquid mass.",
    action: {
      label: "Browse recipes",
      href: "/",
    },
    icon: <CupWarmIcon boxSize="35px" _groupHover={{ color: "amber.700" }} />,
    url: "/expanded-step-card-01.jpg",
  },
  {
    tag: "Protocols",
    title: "Brew \n Methods",
    description:
      "V60, AeroPress, French Press, Chemex, and 9-Bar Espresso extraction profiles.",
    action: {
      label: "View Protocols",
      href: "/",
    },
    icon: (
      <FrenchPressIcon boxSize="35px" _groupHover={{ color: "amber.700" }} />
    ),
    url: "/expanded-step-card-02.jpg",
  },
  {
    tag: "Equipment",
    title: "Tools & \n Accessories",
    description:
      "0.1g scales, tamping stands, 0.35mm WDT tools, and 150mm puck screens.",
    action: {
      label: "Discover gear",
      href: "/",
    },
    icon: (
      <ToolCoffeeIcon boxSize="35px" _groupHover={{ color: "amber.700" }} />
    ),
    url: "/expanded-step-card-03.jpg",
  },
  {
    tag: "Varietals",
    title: "Varieties & \n Genetics",
    description:
      "Bourbon, Geisha, SL28, and Castillo: molecular density, genetics, and processing.",
    action: {
      label: "Learn origins",
      href: "/",
    },
    icon: (
      <CoffeeBeanIcon boxSize="35px" _groupHover={{ color: "amber.700" }} />
    ),
    url: "/expanded-step-card-04.jpg",
  },
];
