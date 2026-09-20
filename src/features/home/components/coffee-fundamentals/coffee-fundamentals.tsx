import {
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { COFFEE_FUNDAMENTALS } from "../../data/coffee-fundamentals";
import { FundamentalItemCard } from "./fundamental-item-card";

interface CoffeePillarsGridProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const CoffeeFundamentals = ({
  eyebrow,
  title,
  description,
}: CoffeePillarsGridProps) => {
  return (
    <Container>
      <HStack
        justifyContent={{ base: "flex-start", desktop: "space-between" }}
        pb="10"
        flexDirection={{ base: "column", desktop: "row" }}
      >
        <VStack alignItems="flex-start" gap="2">
          <Text textStyle="body.2.semibold">{eyebrow}</Text>
          <Heading textStyle="title.2" w={{ base: "100%", desktop: "70%" }}>
            {title}
          </Heading>
        </VStack>
        <Text textStyle="body.2" w={{ base: "100%", desktop: "37%" }}>
          {description}
        </Text>
      </HStack>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", desktop: "repeat(4, 1fr)" }}
        gap={{ base: "6", desktop: "4" }}
      >
        {COFFEE_FUNDAMENTALS.map((item, index) => (
          <GridItem key={item.tag}>
            <FundamentalItemCard item={item} index={index} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
