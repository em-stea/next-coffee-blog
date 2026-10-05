import { GridItem, Text } from "@chakra-ui/react";

interface DrinkRecipeItemProps {
  label: string;
  value: string | null | undefined;
  colSpan?: number;
}

export const DrinkRecipeItem = ({
  label,
  value,
  colSpan = 1,
}: DrinkRecipeItemProps) => {
  const noValue = value === null || value === undefined;
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
      <Text textStyle="body.1" color={noValue ? "neutral.600" : "neutral.0"}>
        {noValue ? "No " + label : value}
      </Text>
    </GridItem>
  );
};
