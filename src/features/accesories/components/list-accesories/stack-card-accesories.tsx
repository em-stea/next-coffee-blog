import { Card, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { AccesoriesInterface } from "../../types/accesories";

interface CardAccesoriesProps {
  data: AccesoriesInterface[];
}
export const StackCardAccesories = ({ data }: CardAccesoriesProps) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", desktop: "repeat(2, 1fr)" }}
      gap="6"
    >
      {data.map((item, index) => (
        <GridItem key={index} colSpan={1}>
          <Card.Root key={item.slug} variant="accesories">
            <Card.Header>
              <Image src={item.cover.url} alt={item.name} />
            </Card.Header>
            <Card.Body>
              <Heading textStyle="title.3" color="amber.500">
                {item.name}
              </Heading>
              <Text textStyle="body.2" color="neutral.500" pb="10">
                {item.description}
              </Text>
              <Text textStyle="body.3.semibold" color="neutral.0" pb="2">
                Instructions for use:
              </Text>
              <Text textStyle="body.1" color="neutral.0">
                {item.instructionsForUse}
              </Text>
            </Card.Body>
          </Card.Root>
        </GridItem>
      ))}
    </Grid>
  );
};
