import { httpSecure } from "@/shared/http";
import { AccesoryResponse } from "../types/accesory";

export const getAccesories = async (query?: string) => {
  const response = await httpSecure.get<AccesoryResponse>(
    `accesories?${query ?? ""}`,
  );

  return response.data;
};
