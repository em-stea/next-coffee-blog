import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import {
  Drawer,
  Grid,
  GridItem,
  Heading,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DrinkRecipeItem } from "./drink-recipe-item";
import { ImageDrawer } from "./image-drawer";
import { ServingSizeGraph } from "./serving-size-graph";

export const DrinkDetailDrawer = ({
  drink,
}: {
  drink: CoffeeDrinkInterface;
}) => {
  const {
    name,
    cover,
    description,
    drinks_category,
    instructions,
    drink_recipe,
  } = drink;

  const {
    serving_size,
    espresso_shot,
    foam_type,
    milk_ratio,
    water_ratio,
    whiskey_ratio,
    syrup_ratio,
    whipped_cream_ratio,
  } = drink_recipe;

  const topRowItems = [
    { label: "Espresso Shots", value: espresso_shot?.name },
    { label: "Foam Type", value: foam_type },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  const bottomRowItems = [
    { label: "Milk Ratio", value: milk_ratio?.liquid_ratio.name },
    { label: "Water Ratio", value: water_ratio?.liquid_ratio.name },
    { label: "Whiskey Ratio", value: whiskey_ratio?.liquid_ratio.name },
    { label: "Syrup Ratio", value: syrup_ratio?.liquid_ratio.name },
    {
      label: "Whipped Cream Ratio",
      value: whipped_cream_ratio?.liquid_ratio.name,
    },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  const getColSpan = (count: number) => (count > 0 ? 8 / count : 8);

  return (
    <Drawer.Body>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", desktop: "repeat(3, 1fr)" }}
        gap={{ base: "0", desktop: "10" }}
        pb="3.2rem"
        w="full"
      >
        <GridItem colSpan={1} position="relative">
          <ImageDrawer cover={cover} name={name} />
        </GridItem>
        <GridItem colSpan={2} mt={{ base: "4", desktop: "0" }}>
          <VStack align="flex-start" gap="0" w="full">
            <Tag.Root variant="featured" position="relative" left="0" mb="4">
              <Tag.Label>{drinks_category.name}</Tag.Label>
            </Tag.Root>
            <Heading textStyle="title.3" color="amber.500">
              {name}
            </Heading>
            <Text textStyle="body.1" color="neutral.0" mb="4">
              {description}
            </Text>

            <ServingSizeGraph serving_size={serving_size} />
            <Grid templateColumns="repeat(8, 1fr)" gap="4" my="4" w="full">
              {topRowItems.map((item) => (
                <DrinkRecipeItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  colSpan={getColSpan(topRowItems.length)}
                />
              ))}
              {bottomRowItems.map((item) => (
                <DrinkRecipeItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  colSpan={getColSpan(bottomRowItems.length)}
                />
              ))}
            </Grid>
            <Text textStyle="body.3.semibold" color="neutral.0">
              Instructions:
            </Text>
            <Text textStyle="body.1" color="neutral.0">
              {instructions}
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Drawer.Body>
  );
};
