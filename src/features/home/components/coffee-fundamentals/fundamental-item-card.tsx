"use client";

import {
  Box,
  Button,
  Card,
  Heading,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CoffeeFundamentals } from "../../data/coffee-fundamentals";
import { ArrowRightIcon } from "@/shared/components/icons";

type FundamentalItemCardProps = {
  index: number;
  item: CoffeeFundamentals;
  isActive: boolean;
  isDesktop: boolean;
  onActivate: () => void;
};

const EASE = [0.33, 1, 0.68, 1] as const;
const LAYOUT = { duration: 1.1, ease: EASE };

export const FundamentalItemCard = ({
  index,
  item,
  isActive,
  isDesktop,
  onActivate,
}: FundamentalItemCardProps) => {
  const { tag, title, description, action, url } = item;

  const grow = isDesktop ? (isActive ? 3 : 1) : 0;

  return (
    <motion.div
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      initial={false}
      animate={{ flexGrow: grow }}
      transition={LAYOUT}
      style={{
        display: "flex",
        minWidth: 0,
        outline: "none",
        flexShrink: 1,
        flexBasis: isDesktop ? 0 : "auto",
        willChange: "flex-grow",
      }}
    >
      <Card.Root variant="fundamental">
        {/* Header: siempre mide 1 unidad en desktop */}
        <Card.Header
          w={{ base: "full", desktop: "var(--unit)" }}
          flexShrink={0}
        >
          <Heading color="amber.500" textStyle="body.2">
            0{index + 1}
          </Heading>

          <VStack align="flex-start" w="full" gap="4">
            <Tag.Root variant="fundamental">
              <Tag.Label>{tag}</Tag.Label>
            </Tag.Root>

            <Heading
              textStyle={{ base: "subtitle.2", desktop: "subtitle.3" }}
              color="neutral.0"
              whiteSpace="pre-line"
            >
              {title}
            </Heading>

            <Text textStyle="body.1" color="neutral.0">
              {description}
            </Text>
            <Button variant="text-link" isInverted>
              {action.label}
              <ArrowRightIcon boxSize="10px" />
            </Button>
          </VStack>
        </Card.Header>

        {/* Body: ocupa el resto; la imagen mide siempre 2 unidades y se recorta */}
        <Card.Body
          p="0"
          flex="1"
          minW="0"
          position="relative"
          minH={{ base: "240px", desktop: "0" }}
        >
          <Box
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            w={{ base: "full", desktop: "calc(var(--unit) * 2)" }}
          >
            <Image
              src={url}
              alt={title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              style={{ objectFit: "cover" }}
              draggable={false}
            />
          </Box>
        </Card.Body>
      </Card.Root>
    </motion.div>
  );
};
