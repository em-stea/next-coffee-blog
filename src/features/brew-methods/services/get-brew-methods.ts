import { httpSecure } from "@/shared/http";
import { BrewMethodResponse } from "../types/brew-method";

export const getBrewMethods = async (query?: string) => {
  const response = await httpSecure.get<BrewMethodResponse>(
    `brew-methods?${query ?? ""}`,
  );

  return response.data;
};
