import { httpSecure } from "@/shared/http";
import { OriginResponse } from "../types/origin";

export const getOrigins = async (query?: string) => {
  const response = await httpSecure.get<OriginResponse>(
    `origins?${query ?? ""}`,
  );

  return response.data;
};
