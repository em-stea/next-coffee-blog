import { CoffeeDrinkInterface } from "@/features/coffee-drinks/types/coffee-drink";
import { ArrowRightIcon } from "@/shared/components/icons";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { ROUTES } from "@/shared/lib/route";
import { Box, Button, Card, Heading, HStack, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { InfoBox } from "./info-box-card";

export function MainFeaturedCard({ drink }: { drink: CoffeeDrinkInterface }) {
  const { name, espressoShots, cover, servingSize } = drink;

  return (
    <Card.Root variant="featured" className="group">
      <Tag.Root variant="featured">
        <Tag.Label>featured drink</Tag.Label>
      </Tag.Root>

      <Box overflow="hidden" position="relative">
        <ResponsivePicture
          image={cover}
          alt={cover.alternativeText || ""}
          forceSize={{ mobile: "small", desktop: "large" }}
          transform="scale(1)"
          transition="transform"
          transitionTimingFunction="ease-in-out"
          transitionDuration="fast"
          _groupHover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>
      <Card.Header>
        <Heading
          textStyle="subtitle.3"
          color="neutral.0"
          transition="color 0.3s ease"
          _groupHover={{ color: "amber.500" }}
        >
          {name}
        </Heading>
        <Button
          asChild
          variant="text-link"
          transition="color 0.3s ease"
          _groupHover={{ color: "amber.500" }}
        >
          <Link href={ROUTES.coffeeDrinks}>
            View Recipe
            <ArrowRightIcon boxSize="10px" />
          </Link>
        </Button>
      </Card.Header>

      <Card.Footer>
        <HStack
          w="full"
          alignItems="flex-start"
          h={{ base: "5.5rem", lg: "4.5rem" }}
        >
          <InfoBox
            label="Espresso Shots"
            value={espressoShots}
            _groupHover={{ borderColor: "amber.500" }}
          />
          <InfoBox
            label="Serving Size"
            value={servingSize}
            _groupHover={{ borderColor: "amber.500" }}
          />
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}
