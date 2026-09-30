import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { normalizeText } from "../utils/normalize-text";

interface UseDrinkFiltersProps {
  drinks: CoffeeDrinkInterface[];
}

export const useDrinkFilters = ({ drinks }: UseDrinkFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery] = useDebounceValue(searchQuery, 300);

  const filteredDrinks = drinks.filter((drink) => {
    const matchesCategory =
      selectedCategory === "all" ||
      drink.drinks_category?.slug === selectedCategory;

    const query = normalizeText(debouncedSearchQuery);
    const drinkName = normalizeText(drink.name);
    const matchesSearch = drinkName.includes(query);

    return matchesCategory && matchesSearch;
  });

  return {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredDrinks,
  };
};
