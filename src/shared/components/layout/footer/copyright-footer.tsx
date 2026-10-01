import { Heading, HStack, Skeleton, Text, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { YearDisplay } from "./year-display";

export async function CopyrightFooter() {
  return (
    <VStack
      w="full"
      bg="neutral.300"
      color="neutral.900"
      justifyContent="space-between"
      gap={{ base: 4, desktop: 0 }}
      pt="16"
    >
      <HStack justifyContent="center" w="full" px="6">
        <Heading textStyle="title.2-extra-big" textTransform="uppercase">
          Typica
        </Heading>
      </HStack>

      <HStack
        borderTop="1px solid"
        borderColor="neutral.400"
        w="full"
        justifyContent="center"
        mt="2"
      >
        <Text textStyle="body.1" py="6">
          Copyright{" "}
          <Suspense fallback={<Skeleton w="100px" h="10px" />}>
            <YearDisplay />
          </Suspense>{" "}
          © Typica. All rights reserved.
        </Text>
      </HStack>
    </VStack>
  );
}
