import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import {
  Drawer,
  Heading,
  Separator,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ImageDrawer } from "./image-drawer";

export const DrinkDetailDrawer = ({
  drink,
}: {
  drink: CoffeeDrinkInterface;
}) => {
  const { name, cover, description, drinks_category, instructions } = drink;

  return (
    <Drawer.Body>
      <ImageDrawer cover={cover} name={name} />
      <VStack align="flex-start" gap="0">
        <Tag.Root variant="featured" position="relative" left="0" mb="6">
          <Tag.Label>{drinks_category.name}</Tag.Label>
        </Tag.Root>
        <Heading textStyle="title.3" color="amber.500">
          {name}
        </Heading>
        <Text textStyle="body.1" color="neutral.0">
          {description}
        </Text>
        <Separator w="full" color="neutral.700" border=".5px solid" mt="6" />
        <Text
          textStyle="body.3.semibold"
          color="neutral.0"
          mt={{ base: "4", desktop: "2" }}
          mb={{ base: "4", desktop: "0" }}
        >
          Instructions:
        </Text>
        <Text textStyle="body.1" color="neutral.0">
          {instructions}
        </Text>
      </VStack>
    </Drawer.Body>
  );
};
