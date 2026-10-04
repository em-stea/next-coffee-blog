import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Card, Heading, Tag, Text, VStack } from "@chakra-ui/react";
import { CompositionDrinkChart } from "./composition-drink-chart";
import { ScaledImage } from "@/shared/components/scaled-image/scaled-image";

export const SelectedCard = ({ drink }: { drink: CoffeeDrinkInterface }) => {
  const {
    name,
    description,
    cover,
    drink_recipe,
    formattedServingSize,
    formattedEspressoShot,
  } = drink;

  return (
    <Card.Root variant="highlight" className="group">
      <Card.Header>
        <ScaledImage cover={cover} />
      </Card.Header>
      <Card.Body>
        <VStack alignItems="flex-start" justifyContent="flex-start">
          <Heading
            textStyle="subtitle.2"
            mb="2"
            _groupHover={{ color: "amber.500" }}
            transition="all 0.3s ease-in-out"
          >
            {name}
          </Heading>
          <Tag.Root>
            <Tag.Label>{formattedServingSize}</Tag.Label>
          </Tag.Root>
          <Text textStyle="body.1" color="neutral.200">
            {description}
          </Text>
        </VStack>

        <CompositionDrinkChart
          drink_recipe={drink_recipe}
          formattedEspressoShot={formattedEspressoShot}
        />
      </Card.Body>
    </Card.Root>
  );
};
