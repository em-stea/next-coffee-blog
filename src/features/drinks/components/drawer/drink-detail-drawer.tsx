import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { Drawer, Grid, Heading, Tag, Text, VStack } from "@chakra-ui/react";
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
  } = drink_recipe;

  return (
    <Drawer.Body>
      <ImageDrawer cover={cover} name={name} />
      <VStack align="flex-start" gap="0" w="full">
        <Tag.Root variant="featured" position="relative" left="0" mb="6">
          <Tag.Label>{drinks_category.name}</Tag.Label>
        </Tag.Root>
        <Heading textStyle="title.3" color="amber.500">
          {name}
        </Heading>
        <Text textStyle="body.1" color="neutral.0" mb="4">
          {description}
        </Text>
        {/* <Separator w="full" color="neutral.700" border=".5px solid" mt="6" /> */}

        <ServingSizeGraph serving_size={serving_size} />

        <Grid templateColumns="repeat(8, 1fr)" gap="4" my="4" w="full">
          <DrinkRecipeItem
            label="Espresso Shots"
            value={espresso_shot?.name}
            colSpan={4}
          />
          <DrinkRecipeItem label="Foam Type" value={foam_type} colSpan={4} />
          <DrinkRecipeItem
            label="Milk Ratio"
            value={milk_ratio?.liquid_ratio.name}
            colSpan={2}
          />
          <DrinkRecipeItem
            label="Water Ratio"
            value={water_ratio?.liquid_ratio.name}
            colSpan={2}
          />
          <DrinkRecipeItem
            label="Whiskey Ratio"
            value={whiskey_ratio?.liquid_ratio.name}
            colSpan={2}
          />
          <DrinkRecipeItem
            label="Syrup Ratio"
            value={syrup_ratio?.liquid_ratio.name}
            colSpan={2}
          />
        </Grid>
        <Text textStyle="body.3.semibold" color="neutral.0">
          Instructions:
        </Text>
        <Text textStyle="body.1" color="neutral.0">
          {instructions}
        </Text>
      </VStack>
    </Drawer.Body>
  );
};
