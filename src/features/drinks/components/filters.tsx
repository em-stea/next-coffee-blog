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
import { LuSearch, LuX } from "react-icons/lu";
import { useDrinkFilters } from "../hooks/use-drink-filters";
import { DrinkCategoryInterface } from "../types/drinks-categories";

interface FiltersProps {
  drinks: CoffeeDrinkInterface[];
  categories: DrinkCategoryInterface[];
}

export function Filters({ drinks, categories }: FiltersProps) {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredDrinks,
  } = useDrinkFilters({ drinks });

  const allCategories = [{ name: "All Drinks", slug: "all" }, ...categories];

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
