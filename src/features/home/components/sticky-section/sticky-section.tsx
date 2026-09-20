"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { ExpandableButton } from "./expandable-button";
import useBreakpoint from "@/shared/hooks/use-breakpoint";
import { ImageCarousel } from "@/shared/components/embla-carousel/carousel";

export const StickySection = () => {
  const { isLargerThanMD } = useBreakpoint();

  return (
    <Grid
      templateColumns={{ base: "1fr", desktop: "repeat(2, 1fr)" }}
      alignItems="flex-start"
      bg="neutral.800"
      my="20"
      pb={{ base: "16", desktop: 0 }}
    >
      {/* Columna Izquierda: STICKY */}
      <GridItem
        colSpan={1}
        position={{ base: "relative", desktop: "sticky" }}
        top={{ base: 0, desktop: "80px" }}
        h={{ base: "auto", desktop: "100vh" }}
        zIndex={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          gap="6"
          px={{ base: "4", desktop: "10" }}
          py={{ base: "16", desktop: 0 }}
        >
          <Heading textStyle="title.2">Precision Puck Prep</Heading>
          <Text textStyle="body.1">
            Achieving the perfect shot starts long before turning on the pump.
            From declumping coffee grounds with a fine-needle WDT tool to
            applying an even tamp and locking in a precision portafilter—every
            step is crafted to eliminate channeling and extract balanced, rich
            flavors.
          </Text>

          <ExpandableButton />
        </Flex>
      </GridItem>

      {/* Columna Derecha: SCROLL (Galería de imágenes) */}
      <Show when={isLargerThanMD}>
        <GridItem colSpan={1}>
          <Box display="flex" flexDirection="column" position="relative">
            <Image
              src="/espresso-sticky-01.jpg"
              alt="Sticky Section 1"
              width={500}
              height={500}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <Image
              src="/espresso-sticky-02.jpg"
              alt="Sticky Section 2"
              width={500}
              height={500}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <Image
              src="/espresso-sticky-03.jpg"
              alt="Sticky Section 3"
              width={500}
              height={500}
              style={{ objectFit: "cover", width: "100%" }}
            />

            {/* Capa Superior (Filtro): Ahora vive dentro del contenedor relativo de imágenes */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="blackAlpha.600"
              opacity="1"
              transition="opacity 0.3s ease-in-out"
              pointerEvents="none"
              zIndex={1}
            />
          </Box>
        </GridItem>
      </Show>

      <Show when={!isLargerThanMD}>
        <ImageCarousel
          height="30rem"
          slides={[
            {
              id: "1",
              src: "/espresso-sticky-01.jpg",
              alt: "Sticky Section 1",
            },
            {
              id: "2",
              src: "/espresso-sticky-02.jpg",
              alt: "Sticky Section 2",
            },
            {
              id: "3",
              src: "/espresso-sticky-03.jpg",
              alt: "Sticky Section 3",
            },
          ]}
        />
      </Show>
    </Grid>
  );
};
