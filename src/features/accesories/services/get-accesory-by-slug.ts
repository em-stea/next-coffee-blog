import { getAccesories } from "./get-accesories";
import { queryAccesoryBySlug } from "../querys/query-accesories";

export const getAccesoryBySlug = async (slug: string) => {
  const response = await getAccesories(queryAccesoryBySlug(slug));
  return response.data[0] ?? null;
};
