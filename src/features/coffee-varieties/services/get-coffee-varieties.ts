import { httpSecure } from "@/shared/http";
import { CoffeeVarietyResponse } from "../types/coffee-variety";

export const getCoffeeVarieties = async (query?: string) => {
  const response = await httpSecure.get<CoffeeVarietyResponse>(
    `coffee-varieties?${query ?? ""}`,
  );

  return response.data;
};
