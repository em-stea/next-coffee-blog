"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { useDrinksContext } from "../providers/drinks-providers";
import { DrinkCategoryInterface } from "../types/drinks-categories";
import { CardDrink } from "./card-drink/card-drink";
import { DrinkFilters } from "./filters/filters";

interface FiltersProps {
  categories: DrinkCategoryInterface[];
}

export function FilteredContent({ categories }: FiltersProps) {
  const { filteredDrinks } = useDrinksContext();

  return (
    <>
      <DrinkFilters categories={categories} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
        {filteredDrinks.map((drink) => (
          <CardDrink key={drink.slug} drink={drink} />
        ))}
      </SimpleGrid>
    </>
  );
}
