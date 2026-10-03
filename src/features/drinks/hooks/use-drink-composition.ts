import {
  EspressoShots,
  LiquidRatio,
  ServingSize,
} from "@/features/home/types/coffee-drink";

interface UseDrinkCompositionProps {
  serving_size: ServingSize;
  espresso_shot: EspressoShots | null;
  milk_ratio: LiquidRatio;
}

export const useDrinkComposition = ({
  serving_size,
  espresso_shot,
  milk_ratio,
}: UseDrinkCompositionProps) => {
  // 1. Calculate the average cup size
  const totalCupSizeAverage =
    (Number(serving_size.minimumSize) + Number(serving_size.maximumSize)) / 2;

  // 2. Calculate the average espresso volume
  const espressoVolumeAverage =
    (Number(espresso_shot?.minimumVolume) +
      Number(espresso_shot?.maximumVolume)) /
    2;

  // 3. Calculate the container height in pixels
  const PX_PER_ML = 1.2;
  const MIN_CONTAINER_HEIGHT = 80;

  const containerHeightPx = Math.max(
    totalCupSizeAverage * PX_PER_ML,
    MIN_CONTAINER_HEIGHT,
  );

  // 4. Check if the drink has a ratio
  const hasRatio = milk_ratio?.name?.includes(":");

  // 5. Calculate the espresso and milk percentages
  let espressoPercentage = 100;
  let milkPercentage = 0;

  if (hasRatio) {
    const partsAsStrings = milk_ratio.name.split(":"); // ["1", "4"]
    const partsAsNumbers = partsAsStrings.map((item) => Number(item)); // [1, 4]

    const espressoParts = partsAsNumbers[0]; // 1
    const milkParts = partsAsNumbers[1]; // 4

    const totalParts = espressoParts + milkParts;

    espressoPercentage = (espressoParts / totalParts) * 100;
    milkPercentage = (milkParts / totalParts) * 100;
  } else {
    // 6. If the drink has no ratio, calculate the espresso percentage based on the espresso volume and the total cup size
    espressoPercentage = Math.min(
      (espressoVolumeAverage / totalCupSizeAverage) * 100,
      100,
    );
  }

  return {
    espressoPercentage,
    milkPercentage,
    containerHeightPx,
    hasRatio,
  };
};
