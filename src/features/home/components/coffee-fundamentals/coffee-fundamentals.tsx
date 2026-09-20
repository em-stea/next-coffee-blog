import { Container, Grid, GridItem } from "@chakra-ui/react";
import { COFFEE_FUNDAMENTALS } from "../../data/coffee-fundamentals";
import { HeaderBlock } from "../header-block";
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
      <HeaderBlock
        eyebrow={eyebrow}
        title={title}
        description={description}
        type="row"
      />

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
