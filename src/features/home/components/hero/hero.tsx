import { CoffeeDrinkInterface } from "@/features/coffee-drinks/types/coffee-drink";
import { Box, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import { MainFeaturedCard } from "../card/main-featured-card";
import { HeroTextSection } from "./hero-text-section";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  featuredDrink: CoffeeDrinkInterface;
};

export function Hero({ eyebrow, title, subtitle, featuredDrink }: HeroProps) {
  return (
    <VStack h="100vh">
      <Box overflow="hidden" position="relative" h="full" w="full">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={{ base: "0", lg: "6" }}
          w="full"
          h="full"
          pt="20"
          position="absolute"
          zIndex="1"
          px={{ base: "4", lg: "10" }}
        >
          <GridItem
            colSpan={1}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <HeroTextSection
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
            />
          </GridItem>
          <GridItem
            colSpan={1}
            display="flex"
            justifyContent="flex-end"
            alignItems={{ base: "flex-start", lg: "center" }}
          >
            <MainFeaturedCard drink={featuredDrink} />
          </GridItem>
        </Grid>

        <Box
          h="full"
          w="full"
          bgGradient="to-b"
          gradientFrom="neutral.1000/95"
          gradientTo="coffee.900/95"
          position="absolute"
        />
        <Image
          src="./hero-image.jpg"
          alt="Hero Image"
          width="full"
          h="full"
          objectFit="cover"
        />
      </Box>
    </VStack>
  );
}
