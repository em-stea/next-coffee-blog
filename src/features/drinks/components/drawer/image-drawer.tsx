import { Box, Flex, Image } from "@chakra-ui/react";

export function ImageDrawer({
  cover,
  name,
}: {
  cover: { url: string };
  name: string;
}) {
  return (
    <Box
      position="relative"
      w={{ base: "full", desktop: "25rem" }}
      minW={{ base: "full", desktop: "25rem" }}
      h={{ base: "15rem", desktop: "30rem" }}
      p="1px"
      mt={{ base: 3, desktop: "0" }}
      borderRadius="8px"
      background={`radial-gradient(350px circle at 50% 0%, #f59e0b, transparent 80%),radial-gradient(350px circle at 50% 100%, #f59e0b, transparent 80%)`}
    >
      <Flex
        w="full"
        h="full"
        borderRadius="7px"
        overflow="hidden"
        bg="neutral.900"
      >
        <Image src={cover.url} alt={name} w="full" h="full" objectFit="cover" />
      </Flex>
    </Box>
  );
}
