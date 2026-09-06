import { httpSecure } from "@/shared/http";
import { CoffeeDrinkResponse } from "../../coffee-drinks/types/coffee-drink";

export const getCoffeeDrinks = async (query?: string) => {
  const response = await httpSecure.get<CoffeeDrinkResponse>(
    `coffee-drinks?${query}`,
  );

  return response.data;
};
