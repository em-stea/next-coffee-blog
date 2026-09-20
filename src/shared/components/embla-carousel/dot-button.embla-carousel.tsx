"use client";

import { Box, HStack, StackProps } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { EmblaApiType } from "./types";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

type EmblaCarouselDotButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

type EmblaCarouselDotButtonListProps = StackProps & {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
};

const DOT_COLORS = {
  active: "amber.500",
  inactive: "neutral.300",
} as const;

export function useDotButton(emblaApi: EmblaApiType): UseDotButtonType {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Diferimos las llamadas iniciales para evitar setState síncrono al montar
    queueMicrotask(() => {
      onInit();
      onSelect();
    });

    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

export function EmblaCarouselDotButton({
  isActive,
  onClick,
}: EmblaCarouselDotButtonProps) {
  return (
    <Box
      as="button"
      aria-label="Go to slide"
      w={isActive ? "32px" : "8px"}
      h="8px"
      bgColor={isActive ? DOT_COLORS.active : DOT_COLORS.inactive}
      onClick={onClick}
      cursor="pointer"
      transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
      borderRadius="full"
    />
  );
}

export function EmblaCarouselDotButtonList({
  scrollSnaps,
  selectedIndex,
  onDotButtonClick,
  ...props
}: EmblaCarouselDotButtonListProps) {
  return (
    <HStack gap="8px" w="full" justifyContent="center" py={6} {...props}>
      {scrollSnaps.map((_, index) => (
        <EmblaCarouselDotButton
          key={index}
          isActive={index === selectedIndex}
          onClick={() => onDotButtonClick(index)}
        />
      ))}
    </HStack>
  );
}
