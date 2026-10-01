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
    <HStack
      w="full"
      mt="28"
      px={{ base: 0, desktop: "28" }}
      justify="space-between"
      flexDirection={{ base: "column", desktop: "row" }}
      overflow="hidden"
      gap="8"
    >
      <HStack
        gap="4"
        justify={{ base: "flex-start", desktop: "center" }}
        maxW="full"
        minW="0"
        overflowX="auto"
        scrollbarWidth="none"
      >
        {allCategories.map((category) => (
          <Button
            key={category.slug}
            variant={selectedCategory === category.slug ? "solid" : "outline"}
            onClick={() => setSelectedCategory(category.slug)}
            flex="0 0 auto"
            _first={{
              ml: 4,
            }}
            _last={{
              mr: 4,
            }}
          >
            {category.name}
          </Button>
        ))}
      </HStack>

      <InputGroup
        w={{ base: "full", desktop: "auto" }}
        px={{ base: 4, desktop: 0 }}
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
          w={{ base: "full", desktop: "auto" }}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>
    </HStack>
  );
}
