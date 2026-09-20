"use client";

import { Box, FlexProps, Flex } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { EmblaCarouselArrowButtons } from "./arrow-buttons.embla-carousel";
import {
  EmblaCarouselDotButtonList,
  useDotButton,
} from "./dot-button.embla-carousel";

export interface CarouselSlide {
  id: string | number;
  src: string;
  alt: string;
}

interface ImageCarouselProps extends FlexProps {
  slides: CarouselSlide[];
  aspectRatio?: string;
}

export function ImageCarousel({
  slides,
  aspectRatio = "16/9",
  ...props
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  if (!slides || slides.length === 0) return null;

  return (
    <Box position="relative" w="full" overflow="hidden">
      <Box overflow="hidden" ref={emblaRef}>
        <Flex display="flex" w="full" {...props}>
          {slides.map((slide) => (
            <Box
              key={slide.id}
              flex="0 0 100%" // 1 imagen por slide en todos los breakpoints
              minW={0}
              position="relative"
              aspectRatio={aspectRatio}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Flechas y Controles */}
      {scrollSnaps.length > 1 && (
        <>
          <EmblaCarouselArrowButtons
            emblaApi={emblaApi}
            selectedIndex={selectedIndex}
            containerProps={{
              display: { base: "none", md: "flex" },
            }}
          />
          <EmblaCarouselDotButtonList
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
            onDotButtonClick={onDotButtonClick}
          />
        </>
      )}
    </Box>
  );
}
