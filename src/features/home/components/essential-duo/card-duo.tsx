"use client";

import { Card, Heading, HStack, Tag, Text } from "@chakra-ui/react";
import { BrewMethodInterface } from "../../types/brew-method";
import { ScaledImageWithVideo } from "./scaled-image-with-video";

export const CardDuo = ({
  brewMethod,
}: {
  brewMethod: BrewMethodInterface;
}) => {
  const { name, description, cover, video, method_type, extraction_type } =
    brewMethod;

  return (
    <Card.Root variant="duo" className="group">
      <Card.Header>
        <Tag.Root variant="featured" zIndex={3}>
          <Tag.Label>{method_type}</Tag.Label>
        </Tag.Root>

        <ScaledImageWithVideo cover={cover} videoUrl={video.url} />
      </Card.Header>
      <Card.Body>
        <HStack pb="3" justify="space-between" align="center">
          <Heading textStyle="subtitle.2" color="neutral.0">
            {name}
          </Heading>
          <Text textStyle="tag.1" color="neutral.400">
            Type: {extraction_type}
          </Text>
        </HStack>

        <Text textStyle="body.2" color="neutral.0">
          {description}
        </Text>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card.Root>
  );
};
