import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { ArrowRightIcon } from "../icons";
import { EmblaApiType } from "./types";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

type EmblaCarouselArrowButtonsProps = {
  emblaApi: EmblaApiType;
  selectedIndex: number;
  containerProps?: FlexProps;
};

type EmblaCarouselArrowButtonProps = FlexProps & {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
};

export function usePrevNextButtons(
  emblaApi: EmblaApiType,
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // onSelect();
    queueMicrotask(onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

function EmblaCarouselArrowButton({
  direction,
  disabled,
  onClick,
  ...props
}: EmblaCarouselArrowButtonProps) {
  const isPrev = direction === "prev";

  return (
    <Flex
      as="button"
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      cursor={disabled ? "not-allowed" : "pointer"}
      zIndex={10}
      onClick={onClick}
      bgColor="neutral.0"
      opacity={disabled ? 0.45 : 0.9}
      _hover={{
        opacity: disabled ? 0.45 : 1,
        transform: isPrev
          ? "translateY(-50%) rotate(180deg) scale(1.05)"
          : "translateY(-50%) scale(1.05)",
      }}
      transition="all 0.2s ease-in-out"
      borderRadius="full"
      justifyContent="center"
      alignItems="center"
      w={10}
      h={10}
      shadow="md"
      transform={isPrev ? "rotate(180deg)" : undefined}
      {...props}
    >
      <ArrowRightIcon color="neutral.900" boxSize={3.5} />
    </Flex>
  );
}

export function EmblaCarouselArrowButtons({
  emblaApi,
  containerProps,
}: EmblaCarouselArrowButtonsProps) {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Flex
      justifyContent="space-between"
      w="full"
      position="absolute"
      top="50%"
      left={0}
      right={0}
      transform="translateY(-50%)"
      px={4}
      pointerEvents="none"
      zIndex={2}
      {...containerProps}
    >
      <Box pointerEvents="auto">
        <EmblaCarouselArrowButton
          direction="prev"
          disabled={prevBtnDisabled}
          onClick={onPrevButtonClick}
        />
      </Box>
      <Box pointerEvents="auto">
        <EmblaCarouselArrowButton
          direction="next"
          disabled={nextBtnDisabled}
          onClick={onNextButtonClick}
        />
      </Box>
    </Flex>
  );
}
