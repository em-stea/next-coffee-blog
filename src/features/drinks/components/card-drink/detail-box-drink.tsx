import { HStack, Text } from "@chakra-ui/react";

interface DetailBoxDrinkProps {
  label: string;
  value: string;
}

export function DetailBoxDrink({ label, value }: DetailBoxDrinkProps) {
  return (
    <HStack>
      <Text textStyle="body.1" color="neutral.0">
        {label}:
      </Text>
      <Text textStyle="body.1" color="neutral.500">
        {value}
      </Text>
    </HStack>
  );
}
