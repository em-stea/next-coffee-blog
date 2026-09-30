import { httpSecure } from "@/shared/http";
import { DrinkCategoryResponse } from "../types/drinks-categories";

export const getCoffeeDrinkCategories = async (query: string) => {
  const response = await httpSecure.get<DrinkCategoryResponse>(
    `drinks-categories?${query}`,
  );
  return response.data;
};
