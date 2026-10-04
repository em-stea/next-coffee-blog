import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Card, Heading, Tag, VStack } from "@chakra-ui/react";
import { CompositionDrinkChart } from "./composition-drink-chart";

export const SelectedCard = ({ drink }: { drink: CoffeeDrinkInterface }) => {
  const {
    name,
    cover,
    drink_recipe,
    formattedServingSize,
    formattedEspressoShot,
  } = drink;

  return (
    <Card.Root variant="highlight">
      <Card.Header>
        <ResponsivePicture image={cover} alt={name} />
      </Card.Header>
      <Card.Body>
        <VStack alignItems="flex-start" justifyContent="flex-start" gap="0">
          <Heading textStyle="subtitle.2">{name}</Heading>
          <Tag.Root my="4">
            <Tag.Label>{formattedServingSize}</Tag.Label>
          </Tag.Root>
        </VStack>

        <CompositionDrinkChart
          drink_recipe={drink_recipe}
          formattedEspressoShot={formattedEspressoShot}
        />
      </Card.Body>
    </Card.Root>
  );
};
