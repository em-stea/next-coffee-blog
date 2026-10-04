"use client";

import { HeaderBlock } from "@/features/home/components/header-block";
import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { InputSelect } from "@/shared/components/input-select/input-select";
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { SelectedCard } from "../card/selected-card/selected-card";

export interface ComparisonState {
  drinkA: CoffeeDrinkInterface | null;
  drinkB: CoffeeDrinkInterface | null;
}

export const ComparisonGuide = ({
  drinks,
}: {
  drinks: CoffeeDrinkInterface[];
}) => {
  const [selectedDrinks, setSelectedDrinks] = useState<ComparisonState>({
    drinkA: null,
    drinkB: null,
  });

  return (
    <Container>
      <VStack
        alignItems="flex-start"
        px={{ base: "4", desktop: "6" }}
        py="10"
        border="1px solid"
        borderColor="neutral.700"
        borderRadius="16px"
        gap="0"
      >
        <HeaderBlock
          eyebrow="INTERACTIVE TOOL"
          title={`Explore & Compare \n Brewed Drinks`}
          description="Select two brews to compare extraction parameters, volume, milk ratio, foam texture, and cup intensity."
          type="row"
        />
        <Box px={{ base: "0", desktop: "21" }} w="full">
          <HStack
            gap={{ base: "1.5", desktop: "4" }}
            w="full"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <InputSelect
              collection={drinks}
              placeholder="Select a drink"
              selected={selectedDrinks.drinkA}
              setSelected={(drink) =>
                setSelectedDrinks({ ...selectedDrinks, drinkA: drink })
              }
              disabledSlug={selectedDrinks.drinkB?.slug ?? null}
            />
            <InputSelect
              collection={drinks}
              placeholder="Select a drink"
              selected={selectedDrinks.drinkB}
              setSelected={(drink) =>
                setSelectedDrinks({ ...selectedDrinks, drinkB: drink })
              }
              disabledSlug={selectedDrinks.drinkA?.slug ?? null}
            />
          </HStack>

          {selectedDrinks.drinkA && selectedDrinks.drinkB && (
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
              gap="4"
              mt="8"
            >
              <GridItem>
                <SelectedCard drink={selectedDrinks.drinkA} />
              </GridItem>
              <GridItem>
                <SelectedCard drink={selectedDrinks.drinkB} />
              </GridItem>
            </Grid>
          )}
        </Box>
      </VStack>
    </Container>
  );
};
