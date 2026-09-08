import { WarningIcon } from "@/shared/components/icons";
import { Heading, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack
      gap="0"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg="gray.200"
    >
      <WarningIcon color="neutral.900" boxSize={10} />
      <Heading textStyle="title.2" color="neutral.900">
        No content yet
      </Heading>
      <Text textStyle="body.2" color="neutral.600">
        This page is empty. Please try again later.
      </Text>
    </VStack>
  );
}
