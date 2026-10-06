import { ApiResponse } from "@/shared/types/strapi-response";

export interface AccesoriesInterface {
  name: string;
  slug: string;
  description: string;
  instructionsForUse: string;
  cover: {
    url: string;
  };
  sortOrder: number;
}

export type AccesoriesResponse = ApiResponse<AccesoriesInterface[]>;
