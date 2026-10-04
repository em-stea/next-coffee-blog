import {
  EspressoShots,
  LiquidRatio,
  ServingSize,
} from "@/features/home/types/coffee-drink";

interface UseDrinkCompositionProps {
  serving_size: ServingSize;
  espresso_shot?: EspressoShots | null;
  milk_ratio?: { liquid_ratio: LiquidRatio } | null;
  water_ratio?: { liquid_ratio: LiquidRatio } | null;
  syrup_ratio?: { liquid_ratio: LiquidRatio } | null;
  whiskey_ratio?: { liquid_ratio: LiquidRatio } | null;
  whipped_cream_ratio?: { liquid_ratio: LiquidRatio } | null;
  foam_type?: string | null;
}

export interface CompositionLayer {
  id: string;
  label: string;
  percentage: number;
  textColor: string;
  bgColor: string;
}

const FOAM_PERCENTAGES: Record<string, number> = {
  DenseFoam: 25, // Espuma densa y gruesa (ej. Cappuccino)
  MicroFoam: 10, // Capa fina de microespuma (ej. Flat White, Latte)
};

// Configuración centralizada de las capas adicionales
const RATIO_CONFIGS: Array<{
  id: string;
  ratioKey: keyof Omit<
    UseDrinkCompositionProps,
    "serving_size" | "espresso_shot" | "foam_type"
  >;
  getLabel: (ratioName: string) => string;
  textColor: string;
  bgColor: string;
}> = [
  {
    id: "milk",
    ratioKey: "milk_ratio",
    getLabel: (name) => `Milk Ratio - ${name}`,
    textColor: "neutral.800",
    bgColor: "neutral.200",
  },
  {
    id: "water",
    ratioKey: "water_ratio",
    getLabel: (name) => `Water Ratio - ${name}`,
    textColor: "neutral.800",
    bgColor: "blue.100",
  },
  {
    id: "syrup",
    ratioKey: "syrup_ratio",
    getLabel: (name) => `Syrup Ratio - ${name}`,
    textColor: "neutral.800",
    bgColor: "coffee.200",
  },
  {
    id: "whiskey",
    ratioKey: "whiskey_ratio",
    getLabel: (name) => `Whiskey Ratio - ${name}`,
    textColor: "neutral.800",
    bgColor: "amber.50",
  },
  {
    id: "whipped_cream",
    ratioKey: "whipped_cream_ratio",
    getLabel: (name) => `Whipped Cream Ratio - ${name}`,
    textColor: "neutral.800",
    bgColor: "neutral.0",
  },
];

export const useDrinkComposition = (props: UseDrinkCompositionProps) => {
  const { serving_size, espresso_shot, foam_type } = props;

  const foamPercentage = foam_type ? FOAM_PERCENTAGES[foam_type] : 0;
  const availablePercentage = 100 - foamPercentage;

  // 1. Filtrar únicamente los ratios activos que contengan el formato "X:Y" (ej: "1:1", "1:1.5")
  const activeRatios = RATIO_CONFIGS.map((config) => {
    const item = props[config.ratioKey];
    const ratioName = item?.liquid_ratio?.name;
    const isValid = ratioName?.includes(":");

    if (!isValid || !ratioName) return null;

    // Extraer base y agregado soportando decimales ("1:1.5" -> base 1, secondary 1.5)
    const [basePart, secondaryPart] = ratioName.split(":").map((val) => {
      const parsed = parseFloat(val.trim());
      return isNaN(parsed) ? 0 : parsed;
    });

    return {
      ...config,
      ratioName,
      basePart: basePart || 1,
      secondaryPart: secondaryPart || 0,
    };
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  const hasRatio = activeRatios.length > 0;

  // 2. Si la bebida TIENE ratios definidos
  if (hasRatio) {
    // Usamos la parte base extraída del primer ratio (habitualmente 1)
    const espressoParts = activeRatios[0].basePart;
    const totalAdditionalParts = activeRatios.reduce(
      (acc, r) => acc + r.secondaryPart,
      0,
    );
    const totalParts = espressoParts + totalAdditionalParts;

    const espressoPercentage =
      (espressoParts / totalParts) * availablePercentage;

    // Generar la lista de capas adicionales
    const layers: CompositionLayer[] = activeRatios.map((item) => ({
      id: item.id,
      label: item.getLabel(item.ratioName),
      percentage: (item.secondaryPart / totalParts) * availablePercentage,
      textColor: item.textColor,
      bgColor: item.bgColor,
    }));

    return {
      espressoPercentage,
      layers,
      hasRatio: true,
      foamPercentage,
    };
  }

  // 3. Si no tiene ratios ni shot de espresso (ej. Cold Brew pura macerada en agua)
  if (!espresso_shot && !hasRatio) {
    return {
      espressoPercentage: 0,
      layers: [
        {
          id: "water-base",
          label: "Cold Brew Coffee",
          percentage: availablePercentage,
          textColor: "neutral.100",
          bgColor:
            "linear-gradient(to top, token(colors.coffee.800), token(colors.blue.100))",
        },
      ],
      hasRatio: true,
      isWaterOnly: true,
      foamPercentage,
    };
  }

  // 4. Si la bebida NO TIENE ratios (bebidas solo de espresso: Single, Double, Ristretto, Lungo, etc.)
  const espressoMaxVolume = Number(espresso_shot?.maximumVolume) || 0;
  const cupMaxVolume = Number(serving_size?.maximumSize) || 1;

  const rawEspressoPercentage = Math.min(
    (espressoMaxVolume / cupMaxVolume) * 100,
    100,
  );

  const espressoPercentage =
    (rawEspressoPercentage / 100) * availablePercentage;

  return {
    espressoPercentage,
    layers: [],
    hasRatio: false,
    foamPercentage,
  };
};
