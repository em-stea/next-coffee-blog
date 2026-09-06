import { httpSecure } from "@/shared/http";
import { RoastLevelResponse } from "../types/roast-level";

export const getRoastLevels = async (query?: string) => {
  const response = await httpSecure.get<RoastLevelResponse>(
    `roast-levels?${query ?? ""}`,
  );

  return response.data;
};
