import { getGrinders } from "./get-grinders";
import { queryGrinderBySlug } from "../querys/query-grinders";

export const getGrinderBySlug = async (slug: string) => {
  const response = await getGrinders(queryGrinderBySlug(slug));
  return response.data[0] ?? null;
};
