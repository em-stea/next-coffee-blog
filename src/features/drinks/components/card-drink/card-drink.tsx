import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Card, Heading, Tag, Text, VStack } from "@chakra-ui/react";
import { DetailBoxDrink } from "./detail-box-drink";
import Link from "next/link";

export function CardDrink({ drink }: { drink: CoffeeDrinkInterface }) {
  const { name, description, cover, servingSize, espressoShots, foamType } =
    drink;

  return (
    <Link href="/">
      <Card.Root variant="drink">
        <Card.Header>
          <Tag.Root variant="featured">
            <Tag.Label>{servingSize}</Tag.Label>
          </Tag.Root>
          <ResponsivePicture image={cover || {}} alt="Card Drink" />
        </Card.Header>
        <Card.Body>
          <Heading textStyle="subtitle.2" pb="2">
            {name}
          </Heading>
          <Text textStyle="body.1">{description}</Text>
          <VStack
            align="flex-start"
            border="1px solid"
            borderColor="neutral.700"
            p="2"
            mt="2"
            borderRadius="8px"
          >
            <DetailBoxDrink label="Espresso Shots" value={espressoShots} />
            <DetailBoxDrink label="Foam type" value={foamType} />
          </VStack>
        </Card.Body>
      </Card.Root>
    </Link>
  );
}
