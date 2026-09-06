import { getCoffeeDrinks } from "../../home/services/get-coffee-drinks";
import { queryCoffeeDrinkBySlug } from "../../home/querys/query-coffee-drinks";

export const getCoffeeDrinkBySlug = async (slug: string) => {
  const response = await getCoffeeDrinks(queryCoffeeDrinkBySlug(slug));
  return response.data[0] ?? null;
};
