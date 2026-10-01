"use client";

import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { ResponsivePicture } from "@/shared/components/responsive-picture/responsive-picture";
import { Box, Card, Heading, Tag, Text, VStack } from "@chakra-ui/react";
import { DetailBoxDrink } from "./detail-box-drink";
import Link from "next/link";
import { LuCoffee } from "react-icons/lu";
import { useRef, useState } from "react";
import { useEventListener, useHover } from "usehooks-ts";
import Image from "next/image";

export function CardDrink({ drink }: { drink: CoffeeDrinkInterface }) {
  const { name, description, cover, servingSize, espressoShots, foamType } =
    drink;

  const cardRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(cardRef as React.RefObject<HTMLElement>);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEventListener(
    "mousemove",
    (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    },
    cardRef as React.RefObject<HTMLElement>,
  );

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

        {isHovered && (
          <Box
            position="fixed"
            top={0}
            left={0}
            transform={`translate3d(${cursorPos.x - 30}px, ${cursorPos.y - 20}px, 0)`}
            pointerEvents="none"
            zIndex={9999}
            color="neutral.0"
            // bg="neutral.900"
            // backdropFilter="blur(8px)"
            p="2"
            borderRadius="full"
            // boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* <LuCoffee size={20} /> */}
            <Image
              src="/cursor-image.png"
              alt="Coffee"
              width={120}
              height={120}
            />
          </Box>
        )}
      </Card.Root>
    </Link>
  );
}
