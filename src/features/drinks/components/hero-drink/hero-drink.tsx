"use client";

import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useAnimatedHero } from "../../hooks/use-animated-hero";

const MotionBox = motion.create(Box);

export const HeroDrink = () => {
  const {
    containerRef,
    isExpanded,
    animatedWidth,
    animatedHeight,
    animatedScale,
    animatedBorderRadius,
  } = useAnimatedHero();

  return (
    <Box ref={containerRef} h="200vh" position="relative" w="full">
      <Box
        position="sticky"
        top={0}
        h="100vh"
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        backgroundImage="url('/background-hero-drinks.jpg')"
        backgroundSize="contain"
      >
        {/* Cuadro animado que se expande */}
        <MotionBox
          style={{
            width: isExpanded ? "100%" : animatedWidth,
            height: isExpanded ? "100%" : animatedHeight,
            scale: isExpanded ? 1 : animatedScale,
            borderRadius: isExpanded ? "0px" : animatedBorderRadius,
          }}
          bg="neutral.200"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
          transition={{ ease: "easeOut" }}
        >
          <Box position="relative" mt="20">
            {/* Heading con máscara de imagen */}
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

            {/* Heading con stroke de sombra/borde */}
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
        </MotionBox>
      </Box>
    </Box>
  );
};
