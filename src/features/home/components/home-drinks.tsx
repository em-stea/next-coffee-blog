import Link from "next/link";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@/shared/components/icons";
import { ROUTES } from "@/shared/lib/route";
import { getStrapiImageUrl } from "@/shared/utils/strapi-media";
import type { CoffeeDrinkInterface } from "@/features/coffee-drinks/types/coffee-drink";

type HomeDrinksProps = {
  drinks: CoffeeDrinkInterface[];
};

export function HomeDrinks({ drinks }: HomeDrinksProps) {
  if (drinks.length === 0) {
    return null;
  }

  return (
    <Container variant="default" py={{ base: 10, desktop: 16 }}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        mb={{ base: 6, desktop: 8 }}
      >
        <Heading as="h2" textStyle="title.4">
          Latest drinks
        </Heading>
        <Text
          asChild
          textStyle="button.2"
          color="neutral.900"
          display="inline-flex"
          alignItems="center"
          gap={1}
          _hover={{ color: "coffee.600" }}
        >
          <Link href={ROUTES.coffeeDrinks}>
            View more
            <ChevronRightIcon boxSize="4" />
          </Link>
        </Text>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          desktop: "repeat(4, 1fr)",
        }}
        columnGap="6"
        rowGap="10"
      >
        {drinks.map((drink) => {
          const imageSrc = getStrapiImageUrl(drink.cover, [
            "medium",
            "small",
            "thumbnail",
          ]);

          return (
            <Card.Root key={drink.documentId} asChild variant="mediaCard">
              <Link href={`${ROUTES.coffeeDrinks}/${drink.slug}`}>
                <Card.Header position="relative">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={drink.cover?.alternativeText?.trim() || drink.name}
                      w="full"
                      aspectRatio="4/3"
                      objectFit="cover"
                    />
                  ) : (
                    <Box w="full" aspectRatio="4/3" bg="neutral.50" />
                  )}
                  {drink.servingSize ? (
                    <Tag.Root variant="mediaOverlay">
                      <Tag.Label>{drink.servingSize}</Tag.Label>
                    </Tag.Root>
                  ) : null}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{drink.name}</Card.Title>
                  {drink.description ? (
                    <Card.Description lineClamp={3}>
                      {drink.description}
                    </Card.Description>
                  ) : null}
                </Card.Body>
              </Link>
            </Card.Root>
          );
        })}
      </Grid>
    </Container>
  );
}
