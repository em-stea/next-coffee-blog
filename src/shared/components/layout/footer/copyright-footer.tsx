import { HStack, Skeleton, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import { YearDisplay } from "./year-display";
import { CupIcon } from "../../icons";

export async function CopyrightFooter() {
  return (
    <HStack
      h={{ base: "auto", desktop: "6rem" }}
      px="6"
      py={{ base: "6", desktop: 0 }}
      w="full"
      bg="neutral.300"
      color="neutral.900"
      justifyContent="space-between"
      flexDirection={{ base: "column", desktop: "row" }}
      gap={{ base: 4, desktop: 0 }}
    >
      <HStack gap="3">
        <CupIcon width="2rem" height="2rem" />
        <Text textStyle="body.3.semibold">Cupping Desk</Text>
      </HStack>

      <Text textStyle="body.1">
        Copyright{" "}
        <Suspense fallback={<Skeleton w="100px" h="10px" />}>
          <YearDisplay />
        </Suspense>{" "}
        © Cupping Desk. All rights reserved.
      </Text>
    </HStack>
  );
}
