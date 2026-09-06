import { httpSecure } from "@/shared/http";
import { MilkRatioResponse } from "../types/milk-ratio";

export const getMilkRatios = async (query?: string) => {
  const response = await httpSecure.get<MilkRatioResponse>(
    `milk-ratios?${query ?? ""}`,
  );

  return response.data;
};
