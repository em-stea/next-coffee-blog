"use client";

import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { DrinkCategoryInterface } from "../types/drinks-categories";
import { LuSearch, LuX } from "react-icons/lu";
import { useDebounceValue } from "usehooks-ts";
import { normalizeText } from "../utils/normalize-text";

interface FiltersProps {
  drinks: CoffeeDrinkInterface[];
  categories: DrinkCategoryInterface[];
}

export function Filters({ drinks, categories }: FiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery] = useDebounceValue(searchQuery, 300);

  const allCategories = [{ name: "All Drinks", slug: "all" }, ...categories];

  const filteredDrinks = drinks.filter((drink) => {
    const matchesCategory =
      selectedCategory === "all" ||
      drink.drinks_category?.slug === selectedCategory;

    const query = normalizeText(debouncedSearchQuery);
    const drinkName = normalizeText(drink.name);
    const matchesSearch = drinkName.includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <HStack w="full" my="8" px="6" justify="space-between">
        <HStack gap="4" justify="center">
          {/* Barra de Filtros y Búsqueda */}

          {allCategories.map((category) => (
            <Button
              key={category.slug}
              variant={selectedCategory === category.slug ? "solid" : "outline"}
              onClick={() => setSelectedCategory(category.slug)}
              flex="0 0 auto"
            >
              {category.name}
            </Button>
          ))}
        </HStack>
        <InputGroup
          w="auto"
          startElement={
            <Icon color="neutral.0">
              <LuSearch />
            </Icon>
          }
          endElement={
            <Icon
              color="neutral.0"
              onClick={() => setSearchQuery("")}
              cursor="pointer"
            >
              <LuX />
            </Icon>
          }
        >
          <Input
            placeholder="Filter by name"
            w="auto"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </HStack>

      {/* Grid de Resultados */}
      {/* <Text my="4" color="neutral.400" fontSize="sm">
        Showing {filteredDrinks.length} recipes
      </Text> */}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
        {filteredDrinks.map((drink) => (
          <Box key={drink.slug}>
            <Text>{drink.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
