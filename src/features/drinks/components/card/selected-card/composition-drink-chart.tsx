import { useDrinkComposition } from "@/features/drinks/hooks/use-drink-composition";
import {
  EspressoShots,
  FOAM_TYPES,
  FoamType,
  LiquidRatio,
  ServingSize,
} from "@/features/home/types/coffee-drink";
import { Flex, Text, VStack } from "@chakra-ui/react";

interface CompositionDrinkChartProps {
  serving_size: ServingSize;
  espresso_shot: EspressoShots | null;
  formattedEspressoShot: string;
  milk_ratio: LiquidRatio;
  foam_type: FoamType;
}

const VALID_FOAM_TYPES: readonly string[] = Object.values(FOAM_TYPES);

export const CompositionDrinkChart = ({
  serving_size,
  espresso_shot,
  formattedEspressoShot,
  milk_ratio,
  foam_type,
}: CompositionDrinkChartProps) => {
  const { espressoPercentage, milkPercentage, containerHeightPx, hasRatio } =
    useDrinkComposition({
      serving_size,
      espresso_shot,
      milk_ratio,
    });

  const hasFoam = foam_type != null && VALID_FOAM_TYPES.includes(foam_type);

  return (
    <VStack
      justifyContent="flex-end"
      border="1px solid"
      borderColor="neutral.200"
      borderRadius="8px"
      p="2"
      w="full"
      h={`${containerHeightPx}px`}
      gap="1"
    >
      {hasFoam && (
        <Flex
          alignItems="center"
          justifyContent="center"
          h={`${milkPercentage - espressoPercentage}px`}
          w="full"
          bg="neutral.0"
          borderRadius="4px"
        >
          <Text textStyle="body.1" color="neutral.800">
            Foam Type / {foam_type}
          </Text>
        </Flex>
      )}
      {hasRatio && (
        <Flex
          alignItems="center"
          justifyContent="center"
          h={`${milkPercentage}px`}
          w="full"
          bg="neutral.200"
          borderRadius="4px"
        >
          <Text textStyle="body.1" color="neutral.800">
            Milk Ratio / {milk_ratio.name}
          </Text>
        </Flex>
      )}

      <Flex
        alignItems="center"
        justifyContent="center"
        h={`${espressoPercentage}px`}
        w="full"
        bg="coffee.700"
        borderRadius="4px"
      >
        <Text textStyle="body.1" color="neutral.100">
          {formattedEspressoShot}
        </Text>
      </Flex>
    </VStack>
  );
};
