"use client";

import useBreakpoint from "@/shared/hooks/use-breakpoint";
import { Container, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { COFFEE_FUNDAMENTALS } from "../../data/coffee-fundamentals";
import { HeaderBlock } from "../header-block";
import { FundamentalItemCard } from "./fundamental-item-card";

interface CoffeePillarsGridProps {
  eyebrow: string;
  title: string;
  description: string;
}

const DEFAULT_ACTIVE = 0;
const N = COFFEE_FUNDAMENTALS.length;

export const CoffeeFundamentals = ({
  eyebrow,
  title,
  description,
}: CoffeePillarsGridProps) => {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE);
  const { isLargerThanLG } = useBreakpoint();

  return (
    <Container>
      <HeaderBlock
        eyebrow={eyebrow}
        title={title}
        description={description}
        type="row"
      />
      <Flex
        direction={{ base: "column", desktop: "row" }}
        gap="4"
        h={{ desktop: "560px" }}
        containerType="inline-size"
        css={{
          "--gap": "1rem",
          // ancho de una card cerrada: (ancho total - gaps) / (n + 2)
          "--unit": `calc((100cqw - ${N - 1} * var(--gap)) / ${N + 2})`,
        }}
        onMouseLeave={() => {
          setActiveIndex(DEFAULT_ACTIVE);
        }}
      >
        {COFFEE_FUNDAMENTALS.map((item, index) => (
          <FundamentalItemCard
            key={item.tag}
            item={item}
            index={index}
            isDesktop={isLargerThanLG}
            isActive={!isLargerThanLG || activeIndex === index}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </Flex>
    </Container>
  );
};
