import { HStack, Text } from "@chakra-ui/react";

interface DetailBoxDrinkProps {
  label: string;
  value: string;
}

export function DetailBoxDrink({ label, value }: DetailBoxDrinkProps) {
  return (
    <HStack
      flexDirection={{ base: "column", desktop: "row" }}
      alignItems={{ base: "flex-start", desktop: "center" }}
      gap={{ base: 0, desktop: "2" }}
    >
      <Text textStyle="body.1" color="neutral.0">
        {label}:
      </Text>
      <Text textStyle="body.1" color="neutral.500">
        {value}
      </Text>
    </HStack>
  );
}
