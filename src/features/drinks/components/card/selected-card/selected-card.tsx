import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Card, Heading, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import { CompositionDrinkChart } from "./composition-drink-chart";

export const SelectedCard = ({ drink }: { drink: CoffeeDrinkInterface }) => {
  const {
    name,
    cover,
    drink_recipe,
    formattedServingSize,
    formattedEspressoShot,
  } = drink;
  const {
    serving_size,
    espresso_shot,
    milk_ratio,
    foam_type: foamType,
  } = drink_recipe;
  console.log(drink_recipe, "drink_recipe");

  console.log(drink, "drink");
  return (
    <Card.Root variant="highlight">
      <Card.Header>
        <ResponsivePicture image={cover} alt={name} />
      </Card.Header>
      <Card.Body>
        <VStack alignItems="flex-start" justifyContent="flex-start">
          <Heading textStyle="subtitle.2" pb="4">
            {name}
          </Heading>
          <Tag.Root>
            <Tag.Label>{formattedServingSize}</Tag.Label>
          </Tag.Root>

          <VStack alignItems="flex-start" my="4">
            <HStack>
              <Text textStyle="body.1" color="neutral.200">
                Espresso Shots
              </Text>
              <Text textStyle="body.1" color="neutral.200">
                1
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <CompositionDrinkChart
          serving_size={serving_size}
          espresso_shot={espresso_shot}
          formattedEspressoShot={formattedEspressoShot}
          milk_ratio={milk_ratio}
          foam_type={foamType}
        />
      </Card.Body>
    </Card.Root>
  );
};
