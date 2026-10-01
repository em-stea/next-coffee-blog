import { Box, Heading, VStack } from "@chakra-ui/react";

export const HeroDrink = () => {
  return (
    <VStack
      bg="neutral.200"
      h={{ base: "70vh", desktop: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box mt="5rem" position="relative">
        <Heading
          textStyle="title.1-extra-big"
          zIndex={2}
          position="relative"
          css={{
            backgroundImage: "url('/hero-drinks.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DRINKS
        </Heading>
        <Heading
          zIndex={1}
          textStyle="title.1-extra-big"
          color="transparent"
          position="absolute"
          top=".4rem"
          left=".5rem"
          css={{
            WebkitTextStroke: "1px var(--chakra-colors-amber-500)",
          }}
        >
          DRINKS
        </Heading>
      </Box>
    </VStack>
  );
};
