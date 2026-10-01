"use client";

import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Box, Card, Heading, Tag, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useCursorPosition } from "../../hooks/use-cursor-position";
import { CursorImage } from "./cursor-image";
import { DetailBoxDrink } from "./detail-box-drink";

export function CardDrink({ drink }: { drink: CoffeeDrinkInterface }) {
  const { name, description, cover, servingSize, espressoShots, foamType } =
    drink;

  const { cardRef, isHovered, cursorPos } = useCursorPosition();

  return (
    <Link href="/">
      <Card.Root variant="drink" className="group" ref={cardRef}>
        <Card.Header>
          <Tag.Root variant="featured" zIndex={3}>
            <Tag.Label>{servingSize}</Tag.Label>
          </Tag.Root>

          <ResponsivePicture image={cover || {}} alt="Card Drink" />
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="blackAlpha.600"
            opacity={0}
            _groupHover={{
              opacity: 1,
            }}
            transition="opacity 0.3s ease-in-out"
            pointerEvents="none"
            zIndex={2}
          />
        </Card.Header>
        <Card.Body>
          <VStack align="flex-start">
            <Heading textStyle="subtitle.2" pb="2">
              {name}
            </Heading>
            <Text textStyle="body.1">{description}</Text>
          </VStack>
          <VStack
            align="flex-start"
            border="1px solid"
            borderColor="neutral.700"
            _groupHover={{
              borderColor: "neutral.500",
              transition: "border-color 0.5s ease",
            }}
            p="2"
            mt="2"
            borderRadius="8px"
          >
            <DetailBoxDrink label="Espresso Shots" value={espressoShots} />
            <DetailBoxDrink label="Foam type" value={foamType} />
          </VStack>
        </Card.Body>

        {isHovered && <CursorImage cursorPos={cursorPos} />}
      </Card.Root>
    </Link>
  );
}
