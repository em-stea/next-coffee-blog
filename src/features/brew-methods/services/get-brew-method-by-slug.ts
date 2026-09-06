import { getBrewMethods } from "./get-brew-methods";
import { queryBrewMethodBySlug } from "../querys/query-brew-methods";

export const getBrewMethodBySlug = async (slug: string) => {
  const response = await getBrewMethods(queryBrewMethodBySlug(slug));
  return response.data[0] ?? null;
};
