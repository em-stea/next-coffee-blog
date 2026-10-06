import { httpSecure } from "@/shared/http";
import { AccesoriesResponse } from "../types/accesories";

export const getAccesories = async (query: string) => {
  const response = await httpSecure.get<AccesoriesResponse>(
    `accesories?${query}`,
  );

  const [firstFeatured, secondFeatured, ...rest] = response.data;

  return {
    firstFeatured,
    secondFeatured,
    rest,
  };
};
