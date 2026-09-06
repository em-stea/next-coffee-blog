import { httpSecure } from "@/shared/http";
import { ProcessMethodResponse } from "../types/process-method";

export const getProcessMethods = async (query?: string) => {
  const response = await httpSecure.get<ProcessMethodResponse>(
    `process-methods?${query ?? ""}`,
  );

  return response.data;
};
