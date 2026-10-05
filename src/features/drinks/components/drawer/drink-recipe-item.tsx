import { GridItem, Text } from "@chakra-ui/react";

interface DrinkRecipeItemProps {
  label: string;
  value: string | null;
  colSpan?: number;
}

export const DrinkRecipeItem = ({
  label,
  value,
  colSpan = 1,
}: DrinkRecipeItemProps) => {
  if (value === null) return null;

  return (
    <GridItem
      colSpan={colSpan}
      border="1px solid"
      borderColor="neutral.700"
      p="4"
      borderRadius="8px"
    >
      <Text textStyle="body.3.semibold" color="neutral.0">
        {label}:
      </Text>
      <Text textStyle="body.1" color="neutral.0">
        {value}
      </Text>
    </GridItem>
  );
};
