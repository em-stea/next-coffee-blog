import { Box, Heading, VStack } from "@chakra-ui/react";

export const HeroAccesories = () => {
  return (
    <VStack h="100vh" justifyContent="center">
      <Heading
        textStyle="title.1-extra-big"
        color="neutral.0"
        position="absolute"
        zIndex="2"
        mt="20"
      >
        Accesories
      </Heading>

      <Box
        bg="neutral.900"
        opacity="0.7"
        h="100vh"
        w="full"
        position="absolute"
        top="0"
        left="0"
        overflow="hidden"
      />
      <Box
        w="full"
        h="full"
        backgroundImage="url('/hero-accesories.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      {/* </Box> */}
    </VStack>
  );
};
