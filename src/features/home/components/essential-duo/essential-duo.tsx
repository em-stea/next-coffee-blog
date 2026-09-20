import { Container, Grid, GridItem } from "@chakra-ui/react";
import { HeaderBlock } from "../header-block";
import { CardDuo } from "./card-duo";
import { BrewMethodInterface } from "../../types/brew-method";

interface EssentialDuoProps {
  eyebrow: string;
  title: string;
  description: string;
  brewMethods: BrewMethodInterface[];
}

export const EssentialDuo = ({
  eyebrow,
  title,
  description,
  brewMethods,
}: EssentialDuoProps) => {
  return (
    <Container>
      <HeaderBlock eyebrow={eyebrow} title={title} description={description} />

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", desktop: "repeat(2, 1fr)" }}
        gap="4"
      >
        {brewMethods.map((brewMethod, index) => (
          <GridItem key={index}>
            <CardDuo brewMethod={brewMethod} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
