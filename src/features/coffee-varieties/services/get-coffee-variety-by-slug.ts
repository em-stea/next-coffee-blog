import { getCoffeeVarieties } from "./get-coffee-varieties";
import { queryCoffeeVarietyBySlug } from "../querys/query-coffee-varieties";

export const getCoffeeVarietyBySlug = async (slug: string) => {
  const response = await getCoffeeVarieties(queryCoffeeVarietyBySlug(slug));
  return response.data[0] ?? null;
};
