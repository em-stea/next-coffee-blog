"use client";

import { useDrinkFilters } from "@/features/drinks/hooks/use-drink-filters";
import { CoffeeDrinkInterface } from "@/features/home/types/coffee-drink";
import { createContext, ReactNode, useContext } from "react";

interface DrinksContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredDrinks: CoffeeDrinkInterface[];
}

const DrinksContext = createContext<DrinksContextType | undefined>(undefined);

interface DrinksProviderProps {
  children: ReactNode;
  drinks: CoffeeDrinkInterface[];
}

export function DrinksProvider({ children, drinks }: DrinksProviderProps) {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredDrinks,
  } = useDrinkFilters({ drinks });

  return (
    <DrinksContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        filteredDrinks,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
}

export function useDrinksContext() {
  const context = useContext(DrinksContext);
  if (!context) {
    throw new Error("useDrinksContext debe usarse dentro de un DrinksProvider");
  }
  return context;
}
