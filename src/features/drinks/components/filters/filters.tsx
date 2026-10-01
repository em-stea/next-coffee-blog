"use client";

import { Button, HStack, Icon, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch, LuX } from "react-icons/lu";
import { useDrinksContext } from "../../providers/drinks-providers";
import { DrinkCategoryInterface } from "../../types/drinks-categories";

interface DrinkFiltersProps {
  categories: DrinkCategoryInterface[];
}

export function DrinkFilters({ categories }: DrinkFiltersProps) {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } =
    useDrinksContext();

  const allCategories = [{ name: "All Drinks", slug: "all" }, ...categories];

  return (
    <HStack w="full" my="8" px="6" justify="space-between">
      <HStack gap="4" justify="center">
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
          searchQuery ? (
            <Icon
              color="neutral.0"
              onClick={() => setSearchQuery("")}
              cursor="pointer"
            >
              <LuX />
            </Icon>
          ) : undefined
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
  );
}
