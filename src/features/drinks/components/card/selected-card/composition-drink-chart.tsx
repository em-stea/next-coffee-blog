import { useDrinkComposition } from "@/features/drinks/hooks/use-drink-composition";
import { DrinkRecipe, FOAM_TYPES } from "@/features/home/types/coffee-drink";
import { Flex, Text, VStack } from "@chakra-ui/react";

interface CompositionDrinkChartProps {
  drink_recipe: DrinkRecipe;
  formattedEspressoShot: string;
}

const VALID_FOAM_TYPES: readonly string[] = Object.values(FOAM_TYPES);

const CONTAINER_HEIGHTS: Record<string, number> = {
  Small: 80, // Taza chica (30ml - 60ml)
  Medium: 140, // Taza mediana (180ml - 240ml)
  Large: 200, // Taza grande (300ml+)
};

export const CompositionDrinkChart = ({
  drink_recipe,
  formattedEspressoShot,
}: CompositionDrinkChartProps) => {
  const {
    serving_size,
    espresso_shot,
    milk_ratio,
    water_ratio,
    syrup_ratio,
    whiskey_ratio,
    whipped_cream_ratio,
    foam_type,
  } = drink_recipe;

  const hasFoam = foam_type != null && VALID_FOAM_TYPES.includes(foam_type);

  const { espressoPercentage, layers, foamPercentage } = useDrinkComposition({
    serving_size,
    espresso_shot,
    milk_ratio,
    water_ratio,
    syrup_ratio,
    whiskey_ratio,
    whipped_cream_ratio,
    foam_type,
  });

  const containerHeightPx = CONTAINER_HEIGHTS[serving_size.name] || 100;

  const syrupLayer = layers.find((layer) => layer.id === "syrup");
  const whippedCreamLayer = layers.find(
    (layer) => layer.id === "whipped_cream",
  );
  const upperRatioLayers = layers.filter(
    (layer) => layer.id !== "syrup" && layer.id !== "whipped_cream",
  );

  // Capa de Syrup (siempre en la base)
  const syrupBlock = syrupLayer && (
    <Flex
      key={syrupLayer.id}
      alignItems="center"
      justifyContent="center"
      h={`${syrupLayer.percentage}%`}
      w="full"
      bg={syrupLayer.bgColor}
      borderRadius="4px"
    >
      <Text textStyle="body.3" color={syrupLayer.textColor}>
        {syrupLayer.label}
      </Text>
    </Flex>
  );

  // Capa de Whipped Cream (siempre en la base)
  const whippedCreamBlock = whippedCreamLayer && (
    <Flex
      key={whippedCreamLayer.id}
      alignItems="center"
      justifyContent="center"
      h={`${whippedCreamLayer.percentage}%`}
      w="full"
      bg={whippedCreamLayer.bgColor}
      borderRadius="4px"
    >
      <Text textStyle="body.3" color={whippedCreamLayer.textColor}>
        {whippedCreamLayer.label}
      </Text>
    </Flex>
  );

  // Demás ratios (Milk, Water, Whiskey)
  const otherRatioBlocks = upperRatioLayers.map((layer) => (
    <Flex
      key={layer.id}
      alignItems="center"
      justifyContent="center"
      h={`${layer.percentage}%`}
      w="full"
      bg={layer.bgColor}
      borderRadius="4px"
    >
      <Text textStyle="body.3" color={layer.textColor}>
        {layer.label}
      </Text>
    </Flex>
  ));

  // Espresso
  const espressoBlock = (
    <Flex
      display={!espresso_shot ? "none" : "flex"}
      key="espresso-layer"
      alignItems="center"
      justifyContent="center"
      h={`${espressoPercentage}%`}
      w="full"
      bg="coffee.700"
      borderRadius="4px"
    >
      <Text textStyle="body.3" color="neutral.100">
        {formattedEspressoShot}
      </Text>
    </Flex>
  );

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
      {/* 1. Foam at the top */}
      {hasFoam && (
        <Flex
          alignItems="center"
          justifyContent="center"
          h={`${foamPercentage}%`}
          w="full"
          bg="neutral.0"
          borderRadius="4px"
        >
          <Text textStyle="body.3" color="neutral.800">
            Foam Type - {foam_type}
          </Text>
        </Flex>
      )}

      {/* 2. Capas medias según vertido de agua/leche */}
      {water_ratio?.pour_water_first || milk_ratio?.pour_milk_first ? (
        <>
          {espressoBlock}
          {otherRatioBlocks}
        </>
      ) : (
        <>
          {whippedCreamBlock}
          {otherRatioBlocks}
          {espressoBlock}
        </>
      )}

      {/* 3. Syrup siempre al fondo (base de la taza) */}
      {syrupBlock}
    </VStack>
  );
};
