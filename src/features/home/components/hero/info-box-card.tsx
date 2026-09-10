import { SystemStyleObject, Text, VStack } from "@chakra-ui/react";

export function InfoBox({
  label,
  value,
  _groupHover,
}: {
  label: string;
  value: string;
  _groupHover?: SystemStyleObject;
}) {
  return (
    <VStack
      align="center"
      border="1px solid"
      borderColor="neutral.100"
      borderRadius="8px"
      p="2"
      gap="1"
      w="full"
      h="full"
      _groupHover={_groupHover}
    >
      <Text textStyle="eyebrow" textAlign="center" color="neutral.0">
        {label}
      </Text>
      <Text textStyle="body.1" textAlign="center" color="neutral.0">
        {value}
      </Text>
    </VStack>
  );
}
