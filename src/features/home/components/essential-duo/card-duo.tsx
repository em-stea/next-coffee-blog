"use client";

import {
  Button,
  Card,
  Circle,
  Grid,
  GridItem,
  Heading,
  HStack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { BrewMethodInterface } from "../../types/brew-method";
import { ScaledImageWithVideo } from "./scaled-image-with-video";
import { SpecDetail } from "./spec-detail";
import { ArrowRightIcon } from "@/shared/components/icons";

export const CardDuo = ({
  brewMethod,
}: {
  brewMethod: BrewMethodInterface;
}) => {
  const {
    name,
    description,
    cover,
    video,
    method_type,
    extraction_type,
    coffee_ratio,
    grind_size,
    brew_time,
    time_note,
    difficulty,
  } = brewMethod;

  return (
    <Card.Root variant="duo" className="group">
      <Card.Header>
        <Tag.Root variant="featured" zIndex={3}>
          <Tag.Label>{method_type}</Tag.Label>
        </Tag.Root>

        <ScaledImageWithVideo cover={cover} videoUrl={video.url} />
      </Card.Header>
      <Card.Body>
        <HStack
          pb={{ base: "4", desktop: "3" }}
          justify="space-between"
          align={{ base: "flex-start", desktop: "center" }}
          flexDirection={{ base: "column", desktop: "row" }}
          gap={{ base: 4, desktop: 0 }}
        >
          <Heading textStyle="subtitle.2" color="neutral.0">
            {name}
          </Heading>
          <Text textStyle="tag.1" color="neutral.400">
            Type: {extraction_type}
          </Text>
        </HStack>

        <Text textStyle="body.2" color="neutral.0" pb="6">
          {description}
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)",
          }}
          gap="3"
          w="full"
        >
          <GridItem>
            <SpecDetail
              label="Ratio"
              value={coffee_ratio.ratio}
              detail={coffee_ratio.detail}
            />
          </GridItem>
          <GridItem>
            <SpecDetail
              label="Grind"
              value={grind_size.name}
              detail={grind_size.description}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, desktop: 1 }}>
            <SpecDetail
              label="Total time"
              value={brew_time}
              detail={time_note}
            />
          </GridItem>
        </Grid>
      </Card.Body>
      <Card.Footer>
        <HStack>
          <Circle size="2" bg="amber.500" />
          <Text textStyle="body.1" color="neutral.400">
            Difficulty: {difficulty}
          </Text>
        </HStack>
        <Button
          variant="text-link"
          colorScheme="primary"
          _groupHover={{ color: "amber.500" }}
        >
          Step by step guide
          <ArrowRightIcon boxSize="10px" />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
