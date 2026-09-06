import { httpSecure } from "@/shared/http";
import { GrinderResponse } from "../types/grinder";

export const getGrinders = async (query?: string) => {
  const response = await httpSecure.get<GrinderResponse>(
    `grinders?${query ?? ""}`,
  );

  return response.data;
};
